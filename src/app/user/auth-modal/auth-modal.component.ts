import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharedModule } from "../../shared/shared.module";
import { ModalComponent } from "../../shared/modal/modal.component";
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-auth-modal',
  standalone: true,
  imports: [SharedModule, ModalComponent],
  templateUrl: './auth-modal.component.html',
  styleUrl: './auth-modal.component.css',
})
export class AuthModalComponent implements OnInit, OnDestroy {
  constructor(public modal: ModalService) {}
  ngOnInit() {
    this.modal.register('auth');
  }

  ngOnDestroy(): void {
    this.modal.unregister('auth');
  }
}
