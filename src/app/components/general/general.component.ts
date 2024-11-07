import { AsyncPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Observable, of } from 'rxjs';
import { CardComponent } from "../baseComponents/card/card.component";

@Component({
  selector: 'app-general',
  standalone: true,
  imports: [AsyncPipe, CardComponent],
  templateUrl: './general.component.html',
  styleUrl: './general.component.scss'
})
export class GeneralComponent {
  data$: Observable<Data> = of({});
  private readonly _activatedRoute = inject(ActivatedRoute);


  ngOnInit() {
    this.data$ = this._activatedRoute.data;
  }
}
