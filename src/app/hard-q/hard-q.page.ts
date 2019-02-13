import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-hard-q',
  templateUrl: './hard-q.page.html',
  styleUrls: ['./hard-q.page.scss'],
})
export class HardQPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
   nav(){
  	this.router.navigate(['../home']);
  }

}
