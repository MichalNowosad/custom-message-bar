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
import {ElementType} from "../../../literals/element-type";
import {MESSAGE_BAR_TYPE_CLASS_MAP} from "../../models/message-bar.const";

@Component({
  selector: 'app-message-bar',
  imports: [StatusIconComponent, CloseButtonComponent],
  templateUrl: './message-bar.component.html',
  styleUrl: './message-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageBarComponent {
  public type: InputSignal<ElementType> = input<ElementType>('information');
  public dismissible: InputSignal<boolean> = input<boolean>(false);
  public closeMessageBar: OutputEmitterRef<void> = output<void>();

  public readonly typeClass: Signal<string> = computed(() => MESSAGE_BAR_TYPE_CLASS_MAP[this.type()]);

  public onClose(): void {
    this.closeMessageBar.emit();
  }
}
