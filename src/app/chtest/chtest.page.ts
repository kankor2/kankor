import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from "jquery";
@Component({
  selector: 'app-chtest',
  templateUrl: './chtest.page.html',
  styleUrls: ['./chtest.page.scss'],
})
export class ChtestPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

  }
  nav(){
  	this.router.navigate(['../home']);
  }
  CheckGrade(){
    console.log('ali');
  	if($('#select').val() != '10'){
  		
  	}else{
  		
  	}
  }

}
