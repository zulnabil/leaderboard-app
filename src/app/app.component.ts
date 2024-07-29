import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from '@app/core/layout/container/container.component';
import { HeaderComponent } from '@app/core/layout/header/header.component';
import { WinnersComponent } from '@app/winners/winners.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContainerComponent, WinnersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'leaderboard-app';
}
