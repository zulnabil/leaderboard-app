import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'avatarUrl',
  standalone: true,
})
export class AvatarUrlPipe implements PipeTransform {
  transform(value?: string | number): string {
    if (!value)
      return `https://api.dicebear.com/9.x/micah/svg?seed=${Math.random()}`;
    return `https://api.dicebear.com/9.x/micah/svg?seed=${value.toString()}`;
  }
}
