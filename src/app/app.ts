import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MessageBarComponent} from "./shared/message-bar/components/message-bar/message-bar.component";

@Component({
  selector: 'app-root',
  imports: [MessageBarComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('custom-message-bar');
}
