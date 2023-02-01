import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BannerComponent } from '../../components/banner/banner.component';
import { MapComponent } from '../../components/map/map.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [BannerComponent, NgOptimizedImage, MapComponent, RouterModule]
})
export class HomeComponent {
  bannerTitle: string = 'Lorem ipusm';
}