import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  template: `
    <div class="content-container">
      <div class="content-title-group">
        <h2 class="title">Admin</h2>
        <div>
          <p>This is a page you can't get to unless logged in</p>
        </div>
      </div>
    </div>
  `
})
export class AdminComponent {}
