import { Component } from '@angular/core';
import { BannerComponent } from '@app/components/banner/banner.component';

@Component({
  selector: 'app-legal-warning',
  templateUrl: './legal-warning.component.html',
  styleUrls: ['./legal-warning.component.scss'],
  standalone: true,
  imports: [BannerComponent]
})
export class LegalWarningComponent {
  bannerTitle: string = 'Legal warning'
}
