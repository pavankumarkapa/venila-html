import { Component } from '@angular/core';
import { trigger, state, style, transition, animate} from '@angular/animations';


@Component({
  selector: 'about-root',
 templateUrl: './about.component.html',

 
})

export class AboutComponent {
  show:boolean=false;
  classes:string[] = ['']
   toggleClass(){
    this.classes.splice(this.classes.length-1,1); // removes the class 
    this.show=!this.show;
		if(this.show) {
			this.classes.push('active')
		 }else {
			this.classes.push('inactive')
	   }
   }
   
   
  
}