import { Pipe, PipeTransform } from '@angular/core';
import { Trainer } from './trainer.interface';

@Pipe({
  name: 'maskPhoneNum',
})
export class MaskPhoneNumPipe implements PipeTransform {
  // transform(value: Trainer): string {
  //   return value.name;
  // }

  transform(phoneNum: string): string {
    return phoneNum.slice(0, 3) + '****' + phoneNum.slice(7);
  }
}
