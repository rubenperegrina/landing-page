import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BannerComponent } from '../../components/banner/banner.component';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss'],
  standalone: true,
  imports: [BannerComponent, RouterModule]
})
export class PrivacyPolicyComponent {
  bannerTitle: string = 'Privacy policy'
}
