import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

@Injectable({
    providedIn: 'root'
})
  
export class ToursroutesService {

    baseUrl: string
  
    constructor(private http: Http) {
        this.baseUrl = 'https://toknow-ec9ef.firebaseio.com/toursRoutes.json'
  
    }
    getAllToursroutes() {
        let url = `${this.baseUrl}`
        // this.http.get(url).subscribe((response) => {
        // console.log(response.json().results)
        //})
        // Lo convirto a promesa
        return this.http.get(url).toPromise()
    }
    // getToursroutesFromUrl(pUrl) {
    //     return this.http.get(pUrl).toPromise()
    // }

    getTourById(id) {
        
    }

    
}
