import { Injectable } from '@angular/core';
import { Footwear } from './footwear';
import {footweararray} from './mock-footwear';

@Injectable()

export class FootwearService{
    getFootwears():Footwear[]{
        return footweararray;
      
    }
}