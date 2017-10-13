import { Injectable } from '@angular/core';
import { Footwear } from './footwear';
import {footweararray} from './mock-footwear';

@Injectable()

export class FootwearService{
    getFootwears():Promise<Footwear[]> {
        return Promise.resolve(footweararray);
      
    }
    getFootwear(id: number): Promise<Footwear> {
        return this.getFootwears()
             .then(footwears => footwears.find(footwear => footwear.id === id));
    }
}