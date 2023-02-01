import { Component, Inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule, MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations'; 

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss'],
  standalone: true,
  imports: [MatIconModule, CommonModule, BrowserModule, BrowserAnimationsModule, NoopAnimationsModule, MatSnackBarModule]
})
export class SnackBarComponent {

  constructor(
    public snackBarRef: MatSnackBarRef<SnackBarComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: any
  ) {console.log(data); }
}
