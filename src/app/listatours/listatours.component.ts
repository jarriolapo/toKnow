import { Component, OnInit } from '@angular/core';
import { ToursroutesService } from '../toursroutes.service';


@Component({
  selector: 'app-listatours',
  templateUrl: './listatours.component.html',
  styleUrls: ['./listatours.component.css']
})
export class ResultadoBusquedaComponent implements OnInit {

  toursroutes: any[]

  constructor(private toursroutesService: ToursroutesService) { }

  ngOnInit() {
    this.toursroutesService.getAllToursroutes()
      .then((response) => {
        this.toursroutes = response.json()
        console.log(this.toursroutes)
    })
  }

}



// import { Component, OnInit } from '@angular/core';
// import { ProductosService } from '../productos.service';

// @Component({
//   selector: 'app-shop',
//   templateUrl: './shop.component.html',
//   styleUrls: ['./shop.component.css']
// })
// export class ShopComponent implements OnInit {

//  productos: any[]

//   constructor(private productosService: ProductosService) { }

//   ngOnInit() {
//     this.productosService.getAllProductos()
//       .then((response) => {
//       this.productos = response.json()
//       })
//   }
//   handleAddCarrito(value) { 
//     console.log(value)
//     this.productosService.postAddCarrito(value)
//       .then((response) => {
//       console.log(response)
//     })
//   }
      
//   }

  



