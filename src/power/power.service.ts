import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
  supplyPower(watts: number) {
    console.log(`Supliying this amount of wats: ${watts} `);

    return watts;
  }
}
