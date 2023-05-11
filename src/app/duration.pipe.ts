import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): unknown {
    const hours: number = Math.floor(value / 60);
    const minutes: number = Math.floor(value % 60);
    return `${hours} h ${minutes} min`;
  }
}
