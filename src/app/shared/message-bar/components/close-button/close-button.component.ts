import {ChangeDetectionStrategy, Component, output, OutputEmitterRef} from '@angular/core';

@Component({
  selector: 'app-close-button',
  templateUrl: './close-button.component.html',
  styleUrl: './close-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CloseButtonComponent {
  public close: OutputEmitterRef<void> = output<void>();

  public onClose(): void {
    this.close.emit();
  }
}
