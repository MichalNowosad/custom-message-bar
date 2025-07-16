import {ChangeDetectionStrategy, Component, input, InputSignal} from '@angular/core';
import {ElementType} from "../../../literals/element-type";

@Component({
  selector: 'app-status-icon',
  templateUrl: './status-icon.component.html',
  styleUrl: './status-icon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatusIconComponent {
  public type: InputSignal<ElementType> = input<ElementType>('information');
}
