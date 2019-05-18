import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-card',
  templateUrl: './store-card.component.html',
  styleUrls: ['./store-card.component.scss']
})
export class StoreCardComponent implements OnInit {

  storeInfo = {
    name: 'NetShoes',
    cnpj: '32.750.883/0001-23',
    street: 'Rua Cardel Arco Verde',
    number: '123',
    comunity: 'Pinheiros',
    city: 'São Paulo',
    state: 'SP',
  }

  constructor() { }

  ngOnInit() {
  }

}
