import { Component, OnInit } from '@angular/core';
import { userInfo } from '../../shared/utils/utils-consts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit {

  showTable = true
  showCostumerInfo = false;

  userSaleInfo = userInfo

  page = {
    id: 0,
    name: 'Company Name'
  }

  creditLink = `/checkout/${localStorage.getItem('userUrl')}/credit`
  ticketLink = `/checkout/${localStorage.getItem('userUrl')}/ticket`

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goToCredit() {
    this.router.navigateByUrl(this.creditLink)
    this.page.id = 1
    this.page.name = 'Credito'
  }

  goToTicket() {
    this.router.navigateByUrl(this.ticketLink)
    this.page.id = 2
    this.page.name = 'Boleto'
  }


}
