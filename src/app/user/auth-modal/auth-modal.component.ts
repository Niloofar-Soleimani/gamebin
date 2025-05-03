import { Component } from '@angular/core';
import { SharedModule } from "../../shared/shared.module";
import { ModalComponent } from "../../shared/modal/modal.component";

@Component({
  selector: 'app-auth-modal',
  standalone: true,
  imports: [SharedModule, ModalComponent],
  templateUrl: './auth-modal.component.html',
  styleUrl: './auth-modal.component.css',
})
export class AuthModalComponent {}
