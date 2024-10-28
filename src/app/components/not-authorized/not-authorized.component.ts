import { AsyncPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, Data } from '@angular/router';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-not-authorized',
  standalone: true,
  imports: [AsyncPipe, RouterLink],
  templateUrl: './not-authorized.component.html',
  styleUrl: './not-authorized.component.scss'
})
export class NotAuthorizedComponent implements OnInit {
  data$: Observable<Data> = of();
  
  private readonly _activatedRoute = inject(ActivatedRoute);

  ngOnInit(){
    this.data$ = this._activatedRoute.data;
  }
}