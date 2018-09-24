import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToursroutesService } from '../toursroutes.service';
import { Tour } from '../models/tour.model'



@Component({
  selector: 'app-fichatour',
  templateUrl: './fichatour.component.html',
  styleUrls: ['./fichatour.component.css'],
  providers: [ToursroutesService],
})
export class FichatourComponent implements OnInit {


  tourDetalle: Tour

  constructor(private activatedRoute: ActivatedRoute,
  private toursroutesService:ToursroutesService ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.toursroutesService.getTourById(params.id)
        .then((tour) => {
          console.log(tour.json())
          this.tourDetalle = tour.json()
       })
    })
  }
}
