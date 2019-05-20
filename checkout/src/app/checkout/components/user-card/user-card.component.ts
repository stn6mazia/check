import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  order

  userInfo = {
    name: 'Nicolas Mazia',
    cpf: '365.304.388-31',
    street: 'Rua dos Bobos',
    number: '0',
    comunity: 'Pinheiros',
    city: 'São Paulo',
    state: 'SP',
  }

  constructor() { }

  ngOnInit() {
    this.order = Math.floor((Math.random() * 9999999) + 1)
  }

}
