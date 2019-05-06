import { Component, OnInit } from '@angular/core';
import { userInfo } from '../../shared/utils/utils-consts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit {

  userSaleInfo = userInfo

  creditLink = `/checkout/${sessionStorage.getItem('userUrl')}/credit`
  ticketLink = `/checkout/${sessionStorage.getItem('userUrl')}/ticket`

  constructor(
    private router: Router
  ) { }

  ngOnInit() {

  }

  goToCredit() {
    this.router.navigateByUrl(this.creditLink)
  }

  goToTicket() {
    this.router.navigateByUrl(this.ticketLink)
  }


}
