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
  showCostumerInfo = true;
  showPayment = true

  userSaleInfo = userInfo

  userInfo = {
    name: 'Nicolas Mazia',
    street: 'Rua dos Bobos',
    number: '0',
    comunity: 'Pinheiros',
    city: 'São Paulo',
    state: 'SP',
  }

  storeInfo = {
    name: ''
  }

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
    this.page.name = 'Company Name'
  }

  goToTicket() {
    this.router.navigateByUrl(this.ticketLink)
    this.page.id = 2
    this.page.name = 'Boleto'
  }


}
