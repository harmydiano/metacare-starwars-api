import PeopleProcessor from '../v1/rest/people/people.processor';
import FilmProcessor from '../v1/rest/film/film.processor';

/**
 * The FilmProcessor class
 */
export const runJob = async ()=>{
	const films = await FilmProcessor.getFilmsList();
	if (!films.length) {
		await FilmProcessor.processFilmAndSave();
	}
};
