import { Component, EventEmitter, Output } from '@angular/core';
import { Server } from './schemas/serverSchema';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements: Server[] = [];

  handleAddServer(serverElement: Server) {
    console.log(serverElement);
   this.serverElements.push(serverElement);   
  }

  handleAddBlueprint(serverElement: Server) {
    this.serverElements.push(serverElement);
  }
}
