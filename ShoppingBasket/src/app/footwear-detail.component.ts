import { Component, Input} from '@angular/core';
import { Footwear }  from './footwear';
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

export class FootwearDetailComponent
{
     @Input() footwear: Footwear;
}