import axios from 'axios';
import config from 'config';
import interceptor from './axios-error-handler';

/** API Service classs */
class ApiService {
	/**
   * @param {string} baseUrl
   * @return {Object}
   */
	static init(baseUrl) {
		let defaultOptions = {
			baseURL: baseUrl,
			headers: this.setHeader(),
		};
		let instance = axios.create(defaultOptions);
		interceptor.responseInterceptor(instance);
		return instance;
	}
	/**
   * @function
   * @return {Object}
   */
	static setHeader() {
		let auth = {
			'Content-Type': 'application/json'
		};
		return auth;
	}
}
export default ApiService;
