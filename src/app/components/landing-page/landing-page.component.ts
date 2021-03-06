import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../../app.component';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  // calendar stuff
  date: Date = new Date();
  currentDay: number;
  month: number;
  updatedMonth:number;
  year: number;
  monthLength:number;
  months: string[];
  startDate: Date;
  startDay: number;
  formattedDate: string;
  week1: Array<number>;
  week2: Array<number>;
  week3: Array<number>;
  week4: Array<number>;
  week5: Array<number>;

  constructor( public router: Router, private appComponent: AppComponent) {
    this.router = router;
    // calander stuff
    this.date = new Date();
    this.currentDay = this.date.getDate();
    this.month = this.date.getMonth();
    this.updatedMonth = this.month + 1;
    this.year = this.date.getFullYear();
    this.monthLength = this.daysInMonth(this.month, this.year);
    this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    this.startDate = new Date(this.year, this.month, 1);
    this.startDay = this.startDate.getDay();
    this.formattedDate = this.updatedMonth + "/" + this.currentDay + "/" + this.year;
    this.week1 = new Array();
    this.week2 = new Array();
    this.week3 = new Array();
    this.week4 = new Array();
    this.week5 = new Array();
  }

  ngOnInit() {
    if(this.appComponent.getIsLoggedIn()){
      let currentUrl = this.router.url;
      console.log(currentUrl);
      this.showCalendar();
      //TODO remove this
      alert("Click on a day in the calendar to show events scheduled for that day. ---Trevor (easier to do this than commit message for this one instance) \n\n"
            + "press ok to continue.");
    }
  }

  daysInMonth(month, year) {
      // function to return the days in a month.
      return new Date(year, month + 1, 0).getDate();
  }

  showCalendar(){
    //fill month array with days
    var dateArray = new Array();
    for (var i = 0; i < this.startDay; i++){
      dateArray[i] = null;
    }
    for (var i = 1; i <= this.monthLength; i++){
      dateArray.push(i)
    }

    // fill individual weeks of calendar
    for (var i = 0; i <= 6; i++) {
      this.week1[i] = dateArray[i];
      if( this.week1[i] == this.currentDay) {
        alert("today is the: " + this.currentDay);
      }
    }
    for (var i = 7; i <= 13; i++) {
      this.week2[i-7] = dateArray[i];
      if( this.week2[i-7] == this.currentDay) {
        alert("today is the: " + this.currentDay);
      }
    }
    for (var i = 14; i <= 20; i++) {
      this.week3[i-14] = dateArray[i];
      if( this.week3[i-14] == this.currentDay) {
        console.log(this.week3.indexOf(this.week3[i-14]) + "(day " + this.currentDay + ")  is today");
      }
    }
    for (var i = 21; i <= 27; i++) {
      this.week4[i-21] = dateArray[i];
      if( this.week4[i-21] == this.currentDay) {
        alert("today is the: " + this.currentDay);
      }
    }
    for (var i = 28; i <= 34; i++) {
      this.week5[i-28] = dateArray[i];
      if( this.week5[i-28] == this.currentDay) {
        alert("today is the: " + this.currentDay);
      }
    }

  }

  getCurrent(day: number){
    return day == this.currentDay;
  }

  getEvents(day?: number){
    if (day == this.currentDay-1){
      alert("No events scheduled for yesterday (" + this.months[this.month] + " " + day + ", " + this.year + ").");
    }
    else if (day == this.currentDay){
      alert("No events scheduled for today (" + this.months[this.month] + " " + day + ", " + this.year + ").");
    }
    else if (day == this.currentDay+1){
      alert("No events scheduled for tomorrow (" + this.months[this.month] + " " + day + ", " + this.year + ").");
    }
    else if (day != null) {
      alert("No events scheduled for " + this.months[this.month] + " " + day + ", " + this.year + ".");
    }
  }
}
