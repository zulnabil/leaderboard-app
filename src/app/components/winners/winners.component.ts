import { Component, OnInit } from '@angular/core';
import { AvatarUrlPipe } from '@app/pipes/avatar-url.pipe';
import { RandomPointsPipe } from '@app/pipes/random-points.pipe';
import { UserService } from '@app/services/user.service';

@Component({
  selector: 'app-winners',
  standalone: true,
  imports: [AvatarUrlPipe, RandomPointsPipe],
  templateUrl: './winners.component.html',
  styleUrl: './winners.component.scss',
})
export class WinnersComponent implements OnInit {
  winners: any;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getList().subscribe((data) => {
      const firstThree = data.slice(0, 3); // Get the first three items
      firstThree[0].id = 2;
      firstThree[1].id = 1;
      firstThree[2].id = 3;
      this.winners = firstThree;
    });
  }
}
