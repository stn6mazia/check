import { Component, OnInit } from '@angular/core';
import { UrlService } from '../../services/url.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-credit-success-page',
  templateUrl: './credit-success-page.component.html',
  styleUrls: ['./credit-success-page.component.scss']
})
export class CreditSuccessPageComponent implements OnInit {

  user = {
    userName: localStorage.getItem('userName'),
    method: localStorage.getItem('method'),
    price: localStorage.getItem('price')
  }

  order = localStorage.getItem('orderNumber')

  constructor(
    private urlService: UrlService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  finish() {
    this.urlService.delete(localStorage.getItem('userUrl'));
    this.router.navigateByUrl('/')
  }

}
