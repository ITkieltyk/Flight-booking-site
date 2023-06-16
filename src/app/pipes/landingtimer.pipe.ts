import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'landingtimer',
})
export class LandingtimerPipe implements PipeTransform {
  transform(value: Date, duration: number): Date {
    value.setMinutes(value.getMinutes() + duration);

    return value;
  }
}
