import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Tour } from './models/tour.model'


@Injectable({
    providedIn: 'root'
})
  
export class ToursroutesService {

    baseUrl: string
  
    constructor(private http: Http) {
        // this.baseUrl = 'https://toknow-ec9ef.firebaseio.com/toursRoutes.json'
        this.baseUrl = 'http://localhost:3000/api'
  
    }
    getAllToursroutes() {
        // let url = `${this.baseUrl}`
        let url = `${this.baseUrl}/tours`
        // this.http.get(url).subscribe((response) => {
        // console.log(response.json().results)
        //})
        // Lo convirto a promesa
        return this.http.get(url).toPromise()
    }
    // getToursroutesFromUrl(pUrl) {
    //     return this.http.get(pUrl).toPromise()
    // }

    getTourById(id){
        let url = `${this.baseUrl}/tours/${id}`
        return this.http.get(url).toPromise()
    }   

    postBusquedaTour(ciudad, categoria) {
        let url = `${this.baseUrl}/tours/resultado-busqueda/ciudad/categoria`
        return this.http.post(url, {ciudad: ciudad, categoria: categoria}).toPromise()
    }



}
