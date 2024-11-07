import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  @Input({ alias: 'disabled' })
  isDisabled: boolean = false;

  @Input({ required: true, alias: 'text' })
  buttonText: string = '';

  @Input({ required: true, alias: 'color' })
  buttonColor: 'blue' | 'purple' = 'blue';

  @Output('clicked') buttonClickedEmmitt = new EventEmitter<void>();
  onButtonClicked() {
    this.buttonClickedEmmitt.emit();
  }
}
