import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Par 68 Golf';

  copyText(text: string) {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  }
}
