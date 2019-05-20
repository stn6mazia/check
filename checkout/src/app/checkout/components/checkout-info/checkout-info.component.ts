import { Component, OnInit, Input } from '@angular/core';
import { userInfo } from '../../shared/utils/utils-consts';

@Component({
  selector: 'app-checkout-info',
  templateUrl: './checkout-info.component.html',
  styleUrls: ['./checkout-info.component.scss']
})
export class CheckoutInfoComponent implements OnInit {

  @Input() plots = '1'

  storeCart = [
    {
      productName: 'All Star - azul cano alto - 44',
      price: 70.90,
      unities: 1
    },
    {
      productName: 'Meias 3/4 - estampas - 40/43',
      price: 9.90,
      unities: 3
    }
  ]
  subTotal

  total

  userSaleInfo = userInfo

  constructor() { }

  ngOnInit() {
    this.getTotal()
  }

  getTotal() {
    let productsrice: any[] = []
    for(let i = 0; i < this.storeCart.length; i++) {
      productsrice.push({
        multipled: this.storeCart[i].price * this.storeCart[i].unities
      })
    }
    this.subTotal = productsrice
    localStorage.setItem('totalPrice', this.total)
    this.total = productsrice.reduce((sum, item) => sum + item.multipled, 0)
  }
}
