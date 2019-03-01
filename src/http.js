import axios from 'axios';

var client = axios.create({
	timeout: 20000
});

const API_URL = '/omc/';

function toApi() {
	const args = Array.prototype.slice.call(arguments);
	return API_URL + args.join('/');
}

function httpCall(url, method, headers, body) {
	return client.request({
		url,
		method,
		data: body,
		headers,
		responseType: 'json'
	});
}

function get(url, headers) {
	return httpCall(url, 'GET', headers);
}

export function post(url, data, headers) {
	return httpCall(url, 'POST', headers, data);
}

function put(url, data, headers) {
	return httpCall(url, 'PUT', headers, data);
}


function del(url, headers) {
	return httpCall(url, 'DELETE', headers);
}
