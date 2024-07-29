import { Component, OnInit } from '@angular/core';
import { UserDetailsComponent } from '@app/components/user-details/user-details.component';
import { AvatarUrlPipe } from '@app/pipes/avatar-url.pipe';
import { RandomPointsPipe } from '@app/pipes/random-points.pipe';
import { UserService } from '@app/services/user.service';
import { ModalComponent } from '@app/shared/modal/modal.component';
import { User } from '@app/types/feature';

@Component({
  selector: 'app-winners',
  standalone: true,
  imports: [
    AvatarUrlPipe,
    RandomPointsPipe,
    ModalComponent,
    UserDetailsComponent,
  ],
  templateUrl: './winners.component.html',
  styleUrl: './winners.component.scss',
})
export class WinnersComponent implements OnInit {
  winners: User[] = [];
  selectedWinner: number | undefined;
  isDetailWinnerOpen = false;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getList().subscribe((data) => {
      const firstThree = data.slice(0, 3); // Get the first three items
      firstThree[0].index = 2;
      firstThree[1].index = 1;
      firstThree[2].index = 3;
      this.winners = firstThree;
    });
  }

  handleSelectUser(id: number) {
    this.selectedWinner = id;
    this.isDetailWinnerOpen = true;
  }

  handleCloseDetail() {
    this.isDetailWinnerOpen = false;
    this.selectedWinner = undefined;
  }
}
