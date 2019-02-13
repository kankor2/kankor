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

  customAlertOptions: any = {
    header: 'انتخاب صنف',
    translucent: true
  };
  customOptions: any = {
    header: 'انتخاب مضمون',
    translucent: true
  };
  ngOnInit() {

  }
  nav(){
  	this.router.navigate(['../home']);
  }
  CheckGrade(){
  	if($('#select').val() != '10'){
  		console.log($('#selectSub').children()[7].remove());
  	}else{
  		if($('#selectSub').children()[7] == undefined){
  			$('#selectSub').append("<option value='audi'>جیولوژی</option>");
  		}
  	}
  }

}
