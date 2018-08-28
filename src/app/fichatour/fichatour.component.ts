import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToursroutesService} from '../toursroutes.service';



@Component({
  selector: 'app-fichatour',
  templateUrl: './fichatour.component.html',
  styleUrls: ['./fichatour.component.css'],
  providers: [ToursroutesService],
})
export class FichatourComponent implements OnInit {

  // detalleTour = Tour

  constructor(private activatedRoute: ActivatedRoute,
    private toursroutesService:ToursroutesService ) { }

  ngOnInit() {
    // this.activatedRoute.params.subscribe((params) => {
    //   this.toursroutesService.getTourById(params.id)
    //     .then((tour) => {
    //       console.log(tour)
    //       this.detalleTour = tour
    //    })
    // })
  }

}
