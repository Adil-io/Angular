import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  currentValue;
  arrValues = [];
  disp = '';
  constructor() { }
  getInput(event: any) {
    this.currentValue = event.target.value;
  }
  ngOnInit() {
  }
  display() {
    let element = document.querySelector('.ul');
    this.arrValues.push(this.currentValue);
    this.arrValues.forEach((el, i, arr) => {
      this.disp = this.disp + el + ' ';
    })
    let li = document.createElement('li');
    li.textContent = this.disp;
    element.appendChild(li);
    this.disp = '';
    console.log(this.arrValues);
  }

}
const tc = new TemplateComponent();
window.addEventListener('keypress', e => {
  if (e.keyCode === 13) {
    tc.display();
  }
});