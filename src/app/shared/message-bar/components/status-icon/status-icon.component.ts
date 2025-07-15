import {ChangeDetectionStrategy, Component, input, InputSignal} from '@angular/core';
import {MessageBarType} from "../../models/message-bar-type.enum";

@Component({
  selector: 'app-status-icon',
  templateUrl: './status-icon.component.html',
  styleUrl: './status-icon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatusIconComponent {
  public type: InputSignal<MessageBarType> = input<MessageBarType>(MessageBarType.Information);

  public MessageBarType = MessageBarType;
}
