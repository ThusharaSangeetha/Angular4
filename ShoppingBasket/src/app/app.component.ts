import { Component } from '@angular/core';
// import {Footwear } from './footwear';
@Component({
  selector: 'app-root',
  template: '<h1>{{title}}</h1>'+
  '<h2>Footwear Styles</h2>'+
  // '<input [(ngModel)] = "item.name" placeholder="Enter name...">'+
  '<ul class="footies">'+
  '<li *ngFor = "let footwear of footies"   [class.selected]="footwear === selectedFootwear" (click)="onSelect(footwear)">'+
  '  <span class="badge">{{footwear.id}}</span> {{footwear.name}}</li>'+
  '</ul>'+
  '<footwear-detail [footwear]="selectedFootwear"></footwear-detail>',
 styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .footies li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .footies li.selected:hover {
    background-color: #BBD8DC !important;
    color: blue;
  }
  .footies li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .footies .text {
    position: relative;
    top: -3px;
  }
  .footies .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`]
  
})

export class AppComponent {
  title = 'Shopping Items';
  footies = footweararray;
  selectedFootwear : Footwear;
  onSelect(footwear: Footwear): void {
  this.selectedFootwear = footwear;
}
}
export class Footwear{
  id: number;
  name: string;
}

const footweararray : Footwear[]= [
{id:1,name:'Wedges'},
{id:2,name:'Boots'},
{id:3,name:'Ballerinas'},
{id:4,name:'Flats'},
{id:5,name:'High Heels'}
];

