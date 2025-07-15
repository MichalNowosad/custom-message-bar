import {Component, output, OutputEmitterRef} from '@angular/core';

@Component({
  selector: 'app-close-button',
  imports: [],
  templateUrl: './close-button.component.html',
  styleUrl: './close-button.component.scss'
})
export class CloseButtonComponent {
  public close: OutputEmitterRef<void> = output<void>();

  public onClose(): void {
    this.close.emit();
  }
}
