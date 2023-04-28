import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CardService } from '../../services/card.service';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css'],
})
export class CreateCardComponent {
  constructor(
    public CardService: CardService,
    public ModalService: ModalService
  ) {}

  form = new FormGroup({
    firstName: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    lastName: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(60)
    ]),
    email: new FormControl<string>('', [
      Validators.required,
      Validators.email
    ]),
    phone: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(10),
      Validators.pattern('[0-9]+')
    ]),
  });

  submit() {
    console.log(this.form.value);
    this.CardService.create({
      name: `${this.form.value.firstName} ${this.form.value.lastName}`,
      email: this.form.value.email,
      phone: this.form.value.phone,
    })
      .subscribe(() => {
        this.ModalService.close();
      });
  }
}
