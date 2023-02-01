import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent, MatSnackBarModule]
})
export class AppComponent implements OnInit {

  constructor(public _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    if(!localStorage.getItem('cookiesMessageShown')) {
      localStorage.setItem('cookiesMessageShown', 'true');
      this._snackBar.open('Aquest pàgina no utilitza cookies per guardar la teva informació', "D'acord", {
        panelClass: 'info-snackbar',
      });
    }
  }
}
