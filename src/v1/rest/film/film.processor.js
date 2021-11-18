import ApiService from '../../../lib/app-request';
import config from 'config';
import AppProcessor from '../_core/app.processor';
import _ from 'lodash';
import Film from './film.model';
import PeopleProcessor from '../people/people.processor';
/**
 * The FilmProcessor class
 */
class FilmProcessor extends AppProcessor {
	/**
     * @param {Object} film A single character information
	 * @return {Sring}
	 */
	static extractFilmInfo(film) {
		console.log('Film to extract', film);
		const fillables = config.get('fillables.film');
		console.log(fillables);
		return _.pick(film, fillables);
	}
	/**
	 * @return {Sring}
	 */
	static getFilmsUrl() {
		const url = config.get('service.film');
		return url;
	}
    
	/**
	 * @return {Object} List of films
	 */
	static async getFilmsList() {
		return await Film.findAll({});
	}
    
	/**
     * @param {String} url film url
	 * @return {Sring}
	 */
	static extractIdFromUrl(url) {
		const last = url.split('/');
		return last[last.length-2];
	}

	/**
	 * @param {Object} value The object properties
	 * @return {Promise<Object>}
	 */
	static async getFilms() {
		const api = ApiService.init(config.get('starwars.url'));
		const url = this.getFilmsUrl();
		console.log(url);
		return await api.get(url);
	}
    
	/**
     * @param {String} film The movie payload
	 * @return {Promise<Object>} People
	 */
	static async saveFilm(film) {
		return await Film.create(film);
	}
    
	/**
     * @return {Array} Returns saved movie list
	 */
	static async processFilmAndSave() {
		const store = [];
		const films = await this.getFilms();
		for (const film of films.results) {
			const filmId = this.extractIdFromUrl(film.url);
			const processChatacter = await PeopleProcessor.processCharactersAndSave(filmId, film.characters);
			const extracted = await this.extractFilmInfo(film);
			console.log('extracted', extracted);
			const saved = await this.saveFilm(extracted);
			store.push(saved);
		}
		return store;
	}
    
	/**
     * @param {String} id
	 * @return {Object} Query response
	 */
	static async updateCommentCount(id) {
		return await Film.increment({comments_count: 1}, {where: {id}});
	}
}

export default FilmProcessor;
