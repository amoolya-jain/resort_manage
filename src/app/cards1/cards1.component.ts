import { Component, OnInit } from '@angular/core';
//import the courses.json from data folder
import * as data from '../data/courses.json';

import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-cards1',
  templateUrl: './cards1.component.html',
  styleUrls: ['./cards1.component.css']
})
export class Cards1Component implements OnInit {

  var1: any|undefined;

  constructor(public httpClient: HttpClient)
  {

  }
  readData(){
  this.httpClient.get('https://fakestoreapi.com/users').subscribe((resp)=>{
  this.var1 = resp;
  });
  }

  ngOnInit(): void {
  }
  //Completed only the below
  course: any = (data as any).default;
  courseDetail = false;
  //Event for Show and Hide
  showUserDetailsToggle() {
    this.courseDetail = !this.courseDetail;//!false
    
}
getClass() {
  var classList = '';
  if (this.courseDetail) {
    //font-awesome
    classList = 'fa fa-plus';
  } else {
    classList = 'fa fa-minus';
  }
  return classList;
}
//property mycolor
mycolor:any|undefined="Black";

}