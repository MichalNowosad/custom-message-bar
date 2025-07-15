import {Component, input, InputSignal} from '@angular/core';
import {MessageBarType} from "../../models/message-bar-type.enum";

@Component({
  selector: 'app-status-icon',
  imports: [],
  templateUrl: './status-icon.component.html',
  styleUrl: './status-icon.component.scss'
})
export class StatusIconComponent {
  public type: InputSignal<MessageBarType> = input<MessageBarType>(MessageBarType.Information);

  public MessageBarType = MessageBarType;
}
