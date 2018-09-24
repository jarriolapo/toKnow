import { Component, OnInit } from '@angular/core';
import { ToursroutesService } from '../toursroutes.service';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-resultado-busqueda',
  templateUrl: './resultado-busqueda.component.html',
  styleUrls: ['./resultado-busqueda.component.css']
})
export class ResultadoBusquedaComponent implements OnInit {

  toursroutes: any[]

  constructor(private toursroutesService: ToursroutesService, private router: Router, private activatedRoute: ActivatedRoute, private toursService: ToursroutesService) {
    
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      console.log(params)
      this.toursroutesService.postBusquedaTour(params.ciudad, params.categoria)
        .then(response => {
          this.toursroutes = response.json()
          console.log(this.toursroutes)
        })
    })
  }

  navegarADetalle(tour) {
    this.router.navigate(['/fichatour', tour.id])
    console.log(this.router)

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