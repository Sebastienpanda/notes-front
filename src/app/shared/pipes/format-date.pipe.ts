import { Pipe, PipeTransform } from '@angular/core';
import dayjs from 'dayjs';

@Pipe({
    name: 'formatDate',
    standalone: true,
})
export class FormatDatePipe implements PipeTransform {
    transform(value: string | Date, format = 'DD MMM YYYY'): string {
        return dayjs(value).format(format);
    }
}
