import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'avatarUrl',
  standalone: true,
})
export class AvatarUrlPipe implements PipeTransform {
  transform(value: string): string {
    return `https://api.dicebear.com/9.x/micah/svg?seed=${value}`;
  }
}
