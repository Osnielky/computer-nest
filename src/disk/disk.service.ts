import { Injectable } from '@nestjs/common';

import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
  constructor(private powerService: PowerService) {}

  store() {
    console.log('storing data');
    this.powerService.supplyPower(20);
  }
}
