import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  schedule = [
    {day: "Tuesday", time: "7p - 9", location:"Evolv Fitness"},
    {day: "Thursday", time: "7p - 9", location:"Evolv Fitness"},
    {day: "Sunday", time: "5p - 7", location:"Koei-Kan Academy"},
  ];

  constructor() { }

  ngOnInit() {
  }

}
