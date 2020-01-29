import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  messageFromParent : any = 'HI';
  showChild : boolean = false;

  constructor(public route : Router) { }

  ngOnInit() {
  }

  directToChildwithoutPara(){
    this.messageFromParent = "";
    this.showChild = true;
    this.route.navigate(['child']);  
  }


  directToChildWithPara(){
    this.messageFromParent = "Message passed from parent";
    this.showChild = true;
    this.route.navigate(['child']);
  }
}
