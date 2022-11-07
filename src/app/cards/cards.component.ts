import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { Card } from '../card';
import { CardsService } from '../cards.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  cards: Card[] = [];
  initCards: any;
  subscribedCards: any;
  choosenCard: any;

  constructor(private CardsService: CardsService) {}

  ngOnInit(): void {
    this.initCards = this.CardsService.getCards();
  }

  showCard(quantity: number): void {
    this.initCards
      .pipe(
        switchMap((resp: any) => from(resp)),
        filter((ele: any) => ele.id < quantity)
      )
      .subscribe((ele: any) => {
        this.cards.push(ele);
      });
  }

  chooseCard(number: number) {
    this.CardsService.getCardsbyId(number).subscribe(
      (ele: any) => (this.cards = [ele])
    );
  }
}
