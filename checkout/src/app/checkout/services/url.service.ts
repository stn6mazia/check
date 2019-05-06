import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Url } from '../shared/entities/url';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor(
    private db: AngularFireDatabase
  ) { }

  insert(url: Url) {
    this.db.list('urls').push(url)
      .then((result: any) => {
        console.log(result.key);
        localStorage.setItem('userUrl', result.key)
      });
  }

  delete(key: string) {
    this.db.object(`urls/${key}`).remove();
  }
}
