import ApiService from '../../../lib/app-request';
import config from 'config';
import AppProcessor from '../_core/app.processor';
import People from './people.model';
import _ from 'lodash';

/**
 * The PeopleProcessor class
 */
class PeopleProcessor extends AppProcessor {
	/**
	 * @return {Sring}
	 */
	static async getCharacterUrl() {
		const url = config.get('service.people');
		return await url;
	}
    
	/**
     * @param {String} name
	 * @return {Sring}
	 */
	static async characterExist(name) {
		const character = await People.findOne({where: {name}});
		if (!_.isEmpty(character)) {
			return true;
		}
		return false;
	}
    
	/**
     * @param {Object} character A single character information
	 * @return {Sring}
	 */
	static extractCharcterInfo(character) {
		const fillables = config.get('fillables.people');
		return _.pick(character, fillables);
	}
    
	/**
     * @param {String} id The filmId
     * @param {Object} character A single character information
	 * @return {Sring}
	 */
	static injectFilmId(id, character) {
		return _.extend(character, {film_id: id});
	}
    
	/**
     * @param {String} character The character payload
	 * @return {Promise<Object>} People
	 */
	static async saveCharacter(character) {
		const exist = await this.characterExist(character.name);
		if (!exist) {
			character.height = character.height == 'unknown' ? 0 : parseInt(character.height);
			return await People.create(character);
		}
	}
    
	/**
     * @param {String} id The filmId
     * @param {Array} characters The characters in a movie
	 */
	static async processCharactersAndSave(id, characters) {
		for (const characterUrl of characters) {
			const character = await this.getCharactersInfo(characterUrl);
			const extracted = await this.extractCharcterInfo(character);
			const processedWithId = this.injectFilmId(id, extracted);
			console.log('processed charcter', processedWithId);
			const save = await this.saveCharacter(processedWithId);
		}
		return;
	}

	/**
	 * @param {String} url The object properties
	 * @return {Promise<Object>}
	 */
	static async getCharactersInfo(url) {
		const api = ApiService.init(config.get('starwars.url'));
		return await api.get(url);
	}
    
	/**
	 * @param {String} value The object properties
	 * @return {Promise<Object>}
	 */
	toFeetandInch(value) {
		return (parseInt(value/12) + ' ' + Math.round(value%12, 1));
	}
    
	/**
	 * @param {String} data The object properties
	 * @return {Promise<Object>}
	 */
	sumTotalHeight(data) {
		let sum = 0;
		for (let value of data) {
			sum += value.height;
		}
		const feetInch = this.toFeetandInch(sum);
		return {sum, feetInch};
	}
}

export default PeopleProcessor;
