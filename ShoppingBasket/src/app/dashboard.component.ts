
import { Component, OnInit } from '@angular/core';

import { Footwear } from './footwear';
import { FootwearService } from './footwear.service';
@Component({
    selector: 'footwear-dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit{ 
   footwears: Footwear[]=[];
     constructor(private footwearService: FootwearService) { }
   ngOnInit():void {
        this.footwearService.getFootwears().
            then(footwears=>this.footwears = footwears.slice(1,3));
   }
}