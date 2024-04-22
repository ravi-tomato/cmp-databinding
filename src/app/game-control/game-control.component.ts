import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent {
  @Output() interval = new EventEmitter<number>();

  onIntervalFired() {

  }

  onClearInterval() {

  }
}
