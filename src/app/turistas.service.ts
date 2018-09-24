import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

@Injectable({
    providedIn: 'root'
})

export class Turistasservice{
    baseUrl: string

    constructor(private http: Http) {
        this.baseUrl = 'http://localhost:3000/api'
    }

    postRegistroTurista(nombre, mail, password) {
        let url = `${this.baseUrl}/turistas/create`
        return this.http.post(url, { nombre: nombre, mail: mail, password: password })
        .toPromise()
    }

    postLoginTurista(formulario) {
        //console.log('')
        let url = `${this.baseUrl}/turistas/iniciar`
        return this.http.post(url, {formulario:formulario}).toPromise()
    }

    // postLoginTurista(mail, password) {
    //     console.log('VICTOR')
    //     let url = `${this.baseUrl}/turistas/iniciar`
    //     return this.http.post(url, {mail: mail, password:password}).toPromise()
    // }

}