import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  InputSignal,
  output,
  OutputEmitterRef
} from '@angular/core';
import {ElementType} from "../../../literals/element-type";
import {BUTTON_TYPE_CLASS_MAP} from "../../../button/models/button.const";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-close-button',
  templateUrl: './close-button.component.html',
  styleUrl: './close-button.component.scss',
  imports: [NgClass],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CloseButtonComponent {
  public type: InputSignal<ElementType> = input<ElementType>('information');
  public close: OutputEmitterRef<void> = output<void>();

  public buttonTypeClass = computed(() => BUTTON_TYPE_CLASS_MAP[this.type()]);
  public onClose(): void {
    this.close.emit();
  }
}
