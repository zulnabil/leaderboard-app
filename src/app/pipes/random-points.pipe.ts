import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'randomPoints',
  standalone: true,
})
export class RandomPointsPipe implements PipeTransform {
  transform(value: unknown): unknown {
    return Math.floor(Math.random() * 1000);
  }
}
