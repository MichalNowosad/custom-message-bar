import {Component, output} from '@angular/core';

@Component({
  selector: 'app-close-button',
  imports: [],
  templateUrl: './close-button.component.html',
  styleUrl: './close-button.component.scss'
})
export class CloseButtonComponent {
  public close = output<void>();

  public onClose(): void {
    this.close.emit();
  }
}
