import { Injectable } from '@angular/core';
import { Footwear } from './footwear';
import {footweararray} from './mock-footwear';

@Injectable()

export class FootwearService{
    getFootwears():Promise<Footwear[]> {
        return Promise.resolve(footweararray);
      
    }
}