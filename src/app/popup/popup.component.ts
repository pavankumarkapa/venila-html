import { Component } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {

	show:boolean=false;
  	pop:string[] = ['sss']
	note:string[] = ['']
	playerbtn: string[] =['']
	cancelbtn: string[] =['']
	deletebtn: string[] =['']
	selectbtn: string[] =['']
	personal: string[] =['']
	pav: string[] =['www']
	
	
   	toggleClass1(){
    this.pop.splice(this.pop.length-1,1); // removes the class 
    this.show=!this.show;
		if(this.show) {
			this.pop.push('open')
		 }else {
			this.pop.push('close')
	   }
   	};
	toggleClass2(){
    this.note.splice(this.note.length-1,1); // removes the class 
    this.show=!this.show;
		if(this.show) {
			this.note.push('open')
		 }else {
			this.note.push('close')
	   }
   	};
	
	
	
	clicked(event) {
		this.pop.splice(this.pop.length-1,1); // removes the class
		this.show=!this.show;  
  	};
	clicked1(event) {		
		this.note.splice(this.note.length-1,1); // removes the class
		this.show=!this.show;		
  	};
	playerclick(event) {		
		this.playerbtn.push('open')
  	};
	selectclick(event) {		
		this.cancelbtn.push('open');
		this.deletebtn.push('open');
		this.selectbtn.push('close')
  	};
	cancelclick(event) {		
		this.cancelbtn.push('close');
		this.deletebtn.push('close');
		this.selectbtn.push('open')
  	};
	pavan(event) {		
		this.note.push('open')
  	};
 
 
 toggleClass3(){
    this.deletebtn.splice(this.deletebtn.length-1,1); // removes the class 
    this.show=!this.show;
		if(this.show) {
			this.deletebtn.push('')
		 }else {
			this.deletebtn.push('open','active')
	   }
   	};
	personalnote(event) {		
		this.personal.push('open')
  	};
 

}
