import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'dynamic-imports-runtime';

  constructor() {
    import('https://code.jquery.com/jquery-3.7.1.min.js').then((jquery) => {
      console.log('jquery loaded');
      console.log(jquery.fn.jquery);
    });
  }
}
