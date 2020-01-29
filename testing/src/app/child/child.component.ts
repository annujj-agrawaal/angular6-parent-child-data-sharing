import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  // messageFromParent : string;

  @Input() messageToChild : string;
  
  constructor(
    public route : Router
  ) { }

  ngOnInit() {
    // this.messageFromParent = this.messageToChild;
  }

  goBackToParent(){
    this.route.navigate(['parent']);
  }
}
