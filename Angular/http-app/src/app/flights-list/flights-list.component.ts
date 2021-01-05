import { Component, OnInit } from '@angular/core';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-flights-list',
  templateUrl: './flights-list.component.html',
  styleUrls: ['./flights-list.component.css']
})
export class FlightsListComponent implements OnInit {

  constructor(private fs: FlightService) { }

  flights:[];

  ngOnInit(): void {
    this.fs.listAllFlights().subscribe(response => {
      console.log(response);
      this.flights=response;

    })
  }

}
