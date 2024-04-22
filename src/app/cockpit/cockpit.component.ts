import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { Server } from "../schemas/serverSchema";

@Component({
    selector: 'app-cockpit',
    templateUrl: './cockpit.component.html'
})
export class CockpitComponent {
  @Output() serverElements: Server[] = [];
  // newServerName = '';
  // newServerContent = '';
  @ViewChild("serverName", { static: true }) serverName;
  @ViewChild("serverContent", { static: true }) serverContent;

  @Output() serverAdded = new EventEmitter<Server>();
  @Output() blueprintAdded = new EventEmitter<Server>();

  onAddServer() {
    console.log(this.serverName.nativeElement);
    this.serverAdded.emit({
      type: 'server',
      name: this.serverName.nativeElement.value,
      content: this.serverContent.nativeElement.value
    })
  }

  onAddBlueprint() {
    this.blueprintAdded.emit({
      type: 'blueprint',
      name: this.serverName.nativeElement.value,
      content: this.serverContent.nativeElement.value
    });
  }
 
}