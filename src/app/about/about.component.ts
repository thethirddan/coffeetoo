import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  heroImg = 'assets/img/fly-trim.jpg';
  awards = [
    {place: '1st', event: 'Bullpen Submission Series. 135lb', date: 'Jan 18'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
