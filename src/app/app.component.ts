import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from '@app/core/layout/container/container.component';
import { ListParticipantComponent } from '@app/components/list-participant/list-participant.component';
import { WinnersComponent } from '@app/components/winners/winners.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ContainerComponent,
    WinnersComponent,
    ListParticipantComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'leaderboard-app';
}
