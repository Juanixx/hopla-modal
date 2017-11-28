import { Component } from '@angular/core';
import { ModalService } from './modal/modal.service';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <app-navbar (modalEvent)='openModal()'></app-navbar>
    <main></main>

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

  openModal = () => {
    this.modalService.open(this.modalId);
  }
}
