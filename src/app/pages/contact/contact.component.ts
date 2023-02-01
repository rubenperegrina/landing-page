import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { BannerComponent } from '../../components/banner/banner.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
  imports: [BannerComponent, CommonModule, RouterModule, ReactiveFormsModule, MatSnackBarModule],
})
export class ContactComponent implements OnInit {
  bannerTitle: string = 'Contact';
  form: FormGroup;

  constructor(
    public _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.form = new FormGroup({
      'name': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'message': new FormControl('', [Validators.required]),
      'checkbox': new FormControl(false)
    });
  }

  submitForm() {
    if (this.form.valid && this.form.get('checkbox')?.value) {
      this.showNotification("The form has been submitted successfully");
      this.form.reset();
    }
  }

  showNotification(message: string) {
    this._snackBar.open(message, "OK", {
      panelClass: 'info-snackbar',
    });
  }
}
