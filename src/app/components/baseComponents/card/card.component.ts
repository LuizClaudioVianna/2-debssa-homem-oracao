import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input({ required: true })
  cardText: string = '';

  @Input()
  cardQuantity: number = 0;

  @Input({ required: true })
  cardColor: 'orange' | 'purple' = 'orange';
}
