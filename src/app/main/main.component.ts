import { Component, OnInit } from '@angular/core';

import { ToursroutesService } from '../toursroutes.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  ciudad: "ciudad";
  categoria: "categoria";
  busquedaTour: any

  constructor(private toursService: ToursroutesService, private router: Router) { }

  // onSubmit(values){
  //   console.log(values)
  //   }

  onSubmit(values) {
    // this.toursService.getAllToursroutes()
    //   .then((response) => {
    //     this.busquedaTour = response.json()
    //     console.log(this.busquedaTour)
    //   })
    this.router.navigate(['/resultado-busqueda', values.ciudad, values.categoria])
    // this.toursService.postBusquedaTour(values.ciudad, values.categoria)
    //   .then(response => {
    //     this.busquedaTour = response.json()
    //     console.log(this.busquedaTour)
    // })
  }

  ngOnInit() {
    
  }

}
