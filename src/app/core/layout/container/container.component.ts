import { Component } from '@angular/core';
import { HeaderComponent } from '@app/core/layout/header/header.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [HeaderComponent],
  template: `<div class="container">
    <app-header />
    <ng-content />
  </div>`,
  styleUrl: './container.component.scss',
})
export class ContainerComponent {}
