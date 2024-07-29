import { Component, Input, OnInit } from '@angular/core';
import { AvatarUrlPipe } from '@app/pipes/avatar-url.pipe';
import { UserService } from '@app/services/user.service';
import { User } from '@app/types/feature';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [AvatarUrlPipe],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss',
})
export class UserDetailsComponent implements OnInit {
  @Input() id: number | undefined;

  detail: User | undefined;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    if (!this.id) return;

    this.userService.getDetail(this.id).subscribe((data) => {
      this.detail = data;
    });
  }
}
