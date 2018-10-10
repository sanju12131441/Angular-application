import { Books } from './../book';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private _url: String =  '/assets/data/books.json';
  constructor(private _http: HttpClient) {  }
  fetch_books(): Observable<Books[]> {
    return this._http.get<Books[]>(this._url);
  }
}
