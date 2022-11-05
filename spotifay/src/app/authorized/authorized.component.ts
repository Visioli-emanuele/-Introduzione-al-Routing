import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-authorized',
  templateUrl: './authorized.component.html',
  styleUrls: ['./authorized.component.css']
})

export class AuthorizedComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
    console.log(this.router.url);
    let myArray = this.router.url.split("=");
    console.log(myArray[1]);
    myArray = myArray[1].split("&");
    console.log(myArray[0]);
  }

}