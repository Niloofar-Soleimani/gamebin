import { Component, Input } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {

  @Input() modalID='';
  constructor(public modal: ModalService) {}
  closeModal() {
    this.modal.toggleModal(this.modalID);
  }
}
