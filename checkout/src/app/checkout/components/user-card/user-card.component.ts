import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

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
  }

}
