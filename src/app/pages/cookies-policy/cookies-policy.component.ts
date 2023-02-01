import { Component } from '@angular/core';
import { BannerComponent } from '@app/components/banner/banner.component';

@Component({
  selector: 'app-cookies-policy',
  templateUrl: './cookies-policy.component.html',
  styleUrls: ['./cookies-policy.component.scss'],
  standalone: true,
  imports: [BannerComponent]
})
export class CookiesPolicyComponent {
  bannerTitle: string = 'Cookies policy'
}
