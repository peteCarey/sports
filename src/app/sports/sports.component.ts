import { Component, OnInit } from '@angular/core';
import { SportsService } from '../sports.service';
@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css'],
})
export class SportsComponent implements OnInit {
  sports;
  constructor(private sportservice: SportsService) {}

  ngOnInit() {
    this.sports = this.sportservice.getSports();
    console.info(this.sports);
  }
}
