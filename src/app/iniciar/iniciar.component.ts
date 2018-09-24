import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Turistasservice } from '../turistas.service'
import { ReactiveFormsModule, FormControl, FormGroup, Validator, Validators } from '@angular/forms'

@Component({
  selector: 'app-iniciar',
  templateUrl: './iniciar.component.html',
  styleUrls: ['./iniciar.component.css']
})
export class IniciarComponent implements OnInit {

  login: FormGroup
  mail: "mail"
  password: "password"

  constructor(private turistasService: Turistasservice, private router: Router) { 
      this.login = new FormGroup({
      mail: new FormControl("", [Validators.required]),
      password: new FormControl ("",[Validators.required])
    })
  }
  
  loginSubmit() {
    this.turistasService.postLoginTurista(this.login.value).then((res) => {
      console.log(res)
    })
  }


  onSubmit(values) {
    // this.router.navigate(['/iniciar', values.mail, values.password])
  }

  ngOnInit() {
  }

}
