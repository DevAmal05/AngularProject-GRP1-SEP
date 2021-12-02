import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


title="hello world";
msg;
name:string;
value:boolean;

imageURL="assets/images/img2.jpg";

date=new Date();

nameList=['Ahmed','Imen','Ilyes'];
condition=false


  constructor() { }

  ngOnInit(): void {
  }


}
