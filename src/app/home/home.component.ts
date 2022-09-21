// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }
//   //String Interpolation
//   title = 'my_internship_angular_app';
//   duration = '10hrs';
//   //Property Binding
//   image="../assets/images/img3.jpg";
//   //Event Binding
//   onclick()
//   {
//     alert("I am an event binding");
//   }
//   //Two-Way Binding
//   name="John";

// }

import { Component, OnInit } from '@angular/core';
import * as data from '../data/courses.json';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // //String Interpolation
  // title = 'my_internship_angular_app';
  // duration = '10hrs';
  // //Property Binding
  // image="../assets/images/img3.jpg";
  // //Event Binding
  // onclick()
  // {
  //   alert("I am an event binding");
  // }
  // //Two-Way Binding
  // name="John";

  course: any = (data as any).default;
  //*ngFor and *ngSwitch
  CourseDetails = [
    {
      "CourseName": "Beautiful Beach views 🏖️",
      "CourseDescription": "Happiness is a day at the Beach.So book and reserve the places now!!!",
      "Status":"Active",
      "img": "https://media-cdn.tripadvisor.com/media/photo-s/10/19/c1/38/beautiful-beach-views.jpg"
    },
    {
      "CourseName": "Meditation Centre🧘",
      "CourseDescription": "Meditation centres facility comes along with your package to serve the purpose of the vaction ",
      "Status":"Active",
      "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVqoeYStZiVSA_JXJCX8UXWfMTKu05nJhU3zG81ba6PBjnp11Ja8RHU3wEInY9A9uMVoM&usqp=CAU"
    },
    {
      "CourseName": "Camp fire",
      "CourseDescription": "Cold air, dark Night, Warm fire, bright stars. Sounds perfect",
      "Status":"InActive",
      "img":"https://cf.ltkcdn.net/camping/images/orig/243208-1600x1030-types-campfires.jpg"
    },
    {
      "CourseName": "Dinner plans🍜",
      "CourseDescription": "surprise your special one with beautiful dinner plans",
      "Status":"Active",
      "img":"http://www.folomojo.com/wp-content/uploads/2015/02/12/dinnerdate3-r-535x428.jpg"
    },
    
  ]



}