import { Component, OnInit } from '@angular/core';
import { UserDetailsComponent } from '@app/components/user-details/user-details.component';
import { AvatarUrlPipe } from '@app/pipes/avatar-url.pipe';
import { RandomPointsPipe } from '@app/pipes/random-points.pipe';
import { UserService } from '@app/services/user.service';
import { ModalComponent } from '@app/shared/modal/modal.component';
import { User } from '@app/types/feature';

@Component({
  selector: 'app-list-participant',
  standalone: true,
  imports: [
    AvatarUrlPipe,
    RandomPointsPipe,
    ModalComponent,
    UserDetailsComponent,
  ],
  templateUrl: './list-participant.component.html',
  styleUrl: './list-participant.component.scss',
})
export class ListParticipantComponent implements OnInit {
  participants: User[] = [];
  selectedParticipant: number | undefined;
  isDetailParticipantOpen = false;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getList().subscribe((data) => {
      const excludeFirstThree = data.slice(3); // Exclude the first three items
      this.participants = excludeFirstThree;
    });
  }

  handleSelectUser(id: number) {
    this.selectedParticipant = id;
    this.isDetailParticipantOpen = true;
  }

  handleCloseDetail() {
    this.isDetailParticipantOpen = false;
    this.selectedParticipant = undefined;
  }
}
