import { Component, OnInit} from '@angular/core';
import {Quote} from '../quote';


@Component({
  selector: 'app-text-quote',
  templateUrl: './text-quote.component.html',
  styleUrls: ['./text-quote.component.css']
})
export class TextQuoteComponent implements OnInit {


  constructor() {




 }


  ngOnInit(): void {

let q1:Quote={
	text:"If you think your teacher is tough, wait till you get a boss"
};
let q2:Quote={
	text:"Life is not fair — get used to it!"
};

let q3:Quote={
	text:"Success is a lousy teacher. It seduces smart people into thinking they can’t lose"
};
let q4:Quote={
	text:"Be nice to nerds. Chances are you’ll end up working for one"
};

  var arr:Quote[]=[q1,q2,q3,q4];



  const element: HTMLElement = document.getElementById('elem') as HTMLElement;
arr.forEach(function (value:any) {
element.innerHTML += `<p>${value.text}</p>`;
});
  }


}





