import { Component, OnInit } from '@angular/core';
import { userInfo } from '../../shared/utils/utils-consts';

@Component({
  selector: 'app-checkout-info',
  templateUrl: './checkout-info.component.html',
  styleUrls: ['./checkout-info.component.scss']
})
export class CheckoutInfoComponent implements OnInit {

  userSaleInfo = userInfo

  constructor() { }

  ngOnInit() {
  }

}
