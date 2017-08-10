import { Component } from '@angular/core';
import { ModalService } from './modal/modal.service';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <button (click)='modalService.open(modalId)'>Open Modal</button>
    <app-modal [modalTitle]="'Some title'" [blocking]='false' [modalId]='modalId'>
      <div>Text inside the modal</div>
    </app-modal>
  `
})
export class AppComponent {
  modalId = 'hoplaModal';

  constructor(
    public modalService: ModalService
  ) {}
}
