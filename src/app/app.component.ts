import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'DEBSSA Soluções em sistemas';
  private readonly _authService = inject(AuthService)


  // scope() {
  //   throw new Error('Method not implemented.');
  // }

  // verify() {
  //   throw new Error('Method not implemented.');
  // }
  // login() {
  //   this._authService.login('lcavianna@hotmail.com','Lc011097av$').subscribe(response => {
  //       console.log('Response Login', response);
  //   });
  // }
}
