import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  urlAPI = 'https://jsonplaceholder.typicode.com/photos/';

  constructor(private Http: HttpClient) {}

  getCards() {
    return this.Http.get(this.urlAPI);
  }

  getCardsbyId(id: number) {
    return this.Http.get(this.urlAPI + id);
  }
}
