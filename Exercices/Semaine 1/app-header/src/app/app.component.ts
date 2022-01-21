import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <nav class="navbar navbar-dark bg-dark">
    <span class="navbar-brand mb-0 h1">{{title}}</span>
  </nav>
  `,
})
export class AppComponent {
  title = 'Intoduction à Angular';
}
