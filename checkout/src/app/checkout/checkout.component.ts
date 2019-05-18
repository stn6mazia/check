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
    this.getCurrentKey()
  }
  
  getCurrentKey() {
    this.url = new Url();
    this.urlService.insert(this.url)
    setTimeout(() => {
      if(localStorage.getItem('userUrl')) {
        this.router.navigateByUrl(`/checkout/${localStorage.getItem('userUrl')}`);
      } else {
        console.log('no url')
      }
    }, 2000)
  }

}
