import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <nav>
      <button (click)='openModal()'>Open Modal</button>
    </nav>
  `
})
export class NavbarComponent {
  @Output() modalEvent: EventEmitter<any> = new EventEmitter();

  openModal = () => {
    this.modalEvent.emit();
  }
}
