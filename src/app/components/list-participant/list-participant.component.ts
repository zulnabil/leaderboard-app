import { Component, OnInit } from '@angular/core';
import { AvatarUrlPipe } from '@app/pipes/avatar-url.pipe';
import { RandomPointsPipe } from '@app/pipes/random-points.pipe';
import { UserService } from '@app/services/user.service';
import { User } from '@app/types/feature';

@Component({
  selector: 'app-list-participant',
  standalone: true,
  imports: [AvatarUrlPipe, RandomPointsPipe],
  templateUrl: './list-participant.component.html',
  styleUrl: './list-participant.component.scss',
})
export class ListParticipantComponent implements OnInit {
  participants: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getList().subscribe((data) => {
      const excludeFirstThree = data.slice(3); // Exclude the first three items
      this.participants = excludeFirstThree;
    });
  }
}
