import { Component, OnInit } from '@angular/core';
import { UrlService } from './services/url.service';
import { Url } from './shared/entities/url';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  url: Url
  id = localStorage.getItem('userUrl')

  constructor(
    private urlService: UrlService,
    private router: Router
  ) { }

  ngOnInit() {
    this.url = new Url();
    this.getCurrentKey()
  }

  getCurrentKey() {
    this.urlService.insert(this.url);
    this.router.navigateByUrl(`/checkout/${this.id}`);
  }

}
