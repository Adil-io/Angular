import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})

export class AppComponent {
  title = 'My-App';
  arr = [];
  serverName: string = '';
  serverContent: string = '';
  serverStatus: boolean = false;

  constructor() {
    setTimeout(() => {
      this.serverStatus = true;
    }, 4000);
  }

  onAddServer() {
    const name = this.serverName;
    const content = this.serverContent;
    const Obj = {
      name,
      content,
      color: 'grey',
      style: 'normal',
      classType: 'panel panel-info'
    };
    this.arr.push(Obj);
  }

  onAddBlueprint() {
    const name = this.serverName;
    const content = this.serverContent;
    const Obj = {
      name,
      content,
      color: 'red',
      style: 'italic',
      classType: 'panel panel-danger'
    };
    this.arr.push(Obj);
  }

}
