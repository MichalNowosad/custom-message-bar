import {ChangeDetectionStrategy, Component, input} from '@angular/core';

@Component({
  selector: 'app-message-bar',
  imports: [],
  templateUrl: './message-bar.component.html',
  styleUrl: './message-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageBarComponent {
}
