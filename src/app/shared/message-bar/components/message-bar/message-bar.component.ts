import {ChangeDetectionStrategy, Component, ComponentRef, computed, input, output} from '@angular/core';
import {StatusIconComponent} from "../status-icon/status-icon.component";
import {CloseButtonComponent} from "../close-button/close-button.component";

@Component({
  selector: 'app-message-bar',
  imports: [StatusIconComponent, CloseButtonComponent],
  templateUrl: './message-bar.component.html',
  styleUrl: './message-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageBarComponent {
  public type = input<'information' | 'success' | 'warning' | 'error'>('error');
  public close = output<void>();

  public readonly typeClass= computed(() => this.typeClassesMap[this.type()]);

  private readonly typeClassesMap: Record<'information' | 'success' | 'warning' | 'error', string> = {
    information: 'message-bar-information',
    success: 'message-bar-success',
    warning: 'message-bar-warning',
    error: 'message-bar-error'
  };

  public onClose(): void {
    this.close.emit();
  }
}
