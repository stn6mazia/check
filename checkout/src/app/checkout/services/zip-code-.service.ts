import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ZipCodeService {

    baseUri = 'https://viacep.com.br/ws'

    constructor(
        private http: HttpClient
    ) { }

    checkCode(code) {
        return this.http.get<any>(`${this.baseUri}/${code}/json`)
        .pipe(
            tap()
        )
        .subscribe(
            data => console.log('success', data),
            error => console.log('oops', error)
          );
    }
}
