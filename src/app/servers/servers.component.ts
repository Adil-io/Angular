import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})

export class ServersComponent implements OnInit {

  createServer: string = 'No Servers';
  serverName: string;
  serverID: number = 100;
  serverStatus: boolean = false;
  btnStatus: boolean = false;
  constructor() {
    setTimeout(() => {
      this.serverStatus = true;
      // this.status = true;
    }, 6000);
  }
  // getInput(event: any) {
  //   this.name = event.target.value;
  // }

  getColor() {

  }

  onButtonClick() {
    this.createServer = `Server was created successfully`;
    this.btnStatus = true;
    // let h3 = document.createElement('h3')
    // h3.textContent = `Server ID = ${this.serverID} and Server Name is ${this.serverName}`;
    // document.querySelector('.disp').appendChild(h3);

  }
  ngOnInit() {
  }

}
