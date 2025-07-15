import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  InputSignal,
  output,
  OutputEmitterRef, Signal
} from '@angular/core';
import {StatusIconComponent} from "../status-icon/status-icon.component";
import {CloseButtonComponent} from "../close-button/close-button.component";
import {MessageBarType} from "../../models/message-bar-type.enum";

@Component({
  selector: 'app-message-bar',
  imports: [StatusIconComponent, CloseButtonComponent],
  templateUrl: './message-bar.component.html',
  styleUrl: './message-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageBarComponent {
  public type: InputSignal<MessageBarType> = input<MessageBarType>(MessageBarType.Information);
  public dismissible: InputSignal<boolean> = input<boolean>(false);
  public close: OutputEmitterRef<void> = output<void>();

  public readonly typeClass: Signal<string> = computed(() => this.typeClassesMap[this.type()]);

  private readonly typeClassesMap: Record<MessageBarType, string> = {
    information: 'message-bar-information',
    success: 'message-bar-success',
    warning: 'message-bar-warning',
    error: 'message-bar-error'
  };

  public onClose(): void {
    this.close.emit();
  }
}
