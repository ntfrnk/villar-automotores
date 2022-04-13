import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs';
import { Secret } from 'secret';

@Injectable()
export class Api {
	public apiURL: string;
	public endpoint: string = '';
	public token: any = '';

	constructor(public _http: HttpClient) {
		this.apiURL = Secret.api.url;
		this.token = Secret.api.token;
	}

	/*
	 * Set the options
	 *
	 * @param Object data
	 **/
	setOptions(options: any): void {
		this.endpoint = options.endpoint;
		if (options.token) {
			this.token = options.token;
		}
	}

	/*
	 * Send a GET request to API
	 *
	 * @param Object data
	 **/
	get() {
		let headers: HttpHeaders;

		if (this.token != '') {
			headers = new HttpHeaders({
				'content-type': 'application/x-www-form-urlencoded',
				Authorization: this.token,
			});
		} else {
			headers = new HttpHeaders({
				'content-type': 'application/x-www-form-urlencoded',
			});
		}

		let options: any = {
			headers: headers,
		};
		return this._http.get(this.apiURL + this.endpoint, options);
	}

	/*
	 * Send a POST request to API
	 *
	 * @param Object data
	 **/
	post(data: any) {
		let json: string = JSON.stringify(data);
		let params: string = 'json=' + json;

		let headers: HttpHeaders = new HttpHeaders({
			'content-type': 'application/x-www-form-urlencoded',
			Authorization: this.token,
		});

		return this._http.post(this.apiURL + this.endpoint, params, {
			headers: headers,
		});
	}

	/*
	 * Send a PATCH request to API
	 *
	 * @param Object data
	 **/
	put(data: any) {
		let json: string = JSON.stringify(data);
		let params: string = 'json=' + json;

		let headers: HttpHeaders = new HttpHeaders({
			'content-type': 'application/x-www-form-urlencoded',
			Authorization: this.token,
		});

		return this._http.put(this.apiURL + this.endpoint, params, {
			headers: headers,
		});
	}

	/*
	 * Send a PATCH request to API
	 *
	 * @param Object data
	 **/
	delete() {
		let headers: HttpHeaders = new HttpHeaders({
			'content-type': 'application/x-www-form-urlencoded',
			Authorization: this.token,
		});

		return this._http.delete(this.apiURL + this.endpoint, {
			headers: headers,
		});
	}
}
