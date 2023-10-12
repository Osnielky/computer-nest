import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
  constructor(private powerService: PowerService) {}

  compute() {
    this.powerService.supplyPower(50);
    console.log('Analizing Data');
    return 'data example';
  }
}
