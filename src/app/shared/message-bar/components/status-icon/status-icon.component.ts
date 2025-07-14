import {Component, input} from '@angular/core';

@Component({
  selector: 'app-status-icon',
  imports: [],
  templateUrl: './status-icon.component.html',
  styleUrl: './status-icon.component.scss'
})
export class StatusIconComponent {
  public type = input<'information' | 'success' | 'warning' | 'error'>('information');
}
