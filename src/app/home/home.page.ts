import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ChtestPage } from '../chtest/chtest.page';
import * as $ from "jquery";
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

	 constructor(private router: Router) {}
     
  goSetting(){
    this.router.navigate(['../setting']);
  }
  pushPage(event){

  	switch(event) {
    	case 'test':
        	this.router.navigate(['../chtest']);
        	break;
    	case 'hard':
        	this.router.navigate(['../hard-q']);
        	break;
    	case 'share':
    		console.log('this is share page');
    		break;
    	default:
        	this.router.navigate(['../about']);
	  }

  }
}
