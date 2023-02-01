import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [RouterModule, NgOptimizedImage]
})
export class FooterComponent {
}