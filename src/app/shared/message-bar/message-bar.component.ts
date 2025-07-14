import {ChangeDetectionStrategy, Component, computed, input} from '@angular/core';

@Component({
  selector: 'app-message-bar',
  imports: [],
  templateUrl: './message-bar.component.html',
  styleUrl: './message-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageBarComponent {
  public type = input<'information' | 'success' | 'warning' | 'error'>('error');

  private typeClassesMap: Record<'information' | 'success' | 'warning' | 'error', string> = {
    information: 'message-bar-information',
    success: 'message-bar-success',
    warning: 'message-bar-warning',
    error: 'message-bar-error'
  };

  public readonly typeClass= computed(() => this.typeClassesMap[this.type()]);
}
