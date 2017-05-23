// truncate.ts
import {Pipe} from '@angular/core'

@Pipe({
  name: 'truncate'
})
export class TruncatePipe {
  transform(value: string, limit: number) : string {

    let trail = value.length > limit ? '...' : '';

    return value.length > limit ? value.substring(0, limit) + trail : value;
  }
}