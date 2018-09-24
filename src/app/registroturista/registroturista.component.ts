import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Turistasservice } from '../turistas.service';


@Component({
  selector: 'app-registroturista',
  templateUrl: './registroturista.component.html',
  styleUrls: ['./registroturista.component.css']
})
export class RegistroturistaComponent implements OnInit {

  nombre: "nombre"
  mail: "mail"
  password: "password"
  registroTurista: any

  constructor(private turistasService: Turistasservice, private router: Router) { }

  onSubmit(values) {
    console.log(values)
    this.turistasService.postRegistroTurista(values.nombre, values.mail, values.password)
    .then(res => {
      // console.error(); 
      // this.router.navigate()
        alert('Ya te has registrado')
        this.router.navigate(['/'])
    })
  }




  ngOnInit() {
  }

}
