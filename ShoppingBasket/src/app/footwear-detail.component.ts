import { Component, Input,OnInit} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Footwear }  from './footwear';
import { FootwearService }  from './footwear.service';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'footwear-detail',
    template: `
    <div *ngIf="footwear">
      <h2>{{footwear.name}} details!</h2>
      <div><label>id: </label>{{footwear.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="footwear.name" placeholder="name"/>
      </div>
    </div>`
})

export class FootwearDetailComponent implements OnInit
{
     @Input() footwear: Footwear;
   
    
     constructor(
      private footwearService: FootwearService,
      private route: ActivatedRoute,
      private location: Location
     ) {

       }
     ngOnInit() : void{
       this.route.paramMap
    .switchMap((params: ParamMap) => this.footwearService.getFootwear(+params.get('id')))
    .subscribe(footwear => this.footwear = footwear);
     }
}