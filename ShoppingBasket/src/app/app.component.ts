import { Component } from '@angular/core';
import {FootwearsComponent} from './footwears.component';

@Component ({
    selector: 'app-root',
    template: '<h1>{{title}}</h1>' +
              '<a routerLink ="/footwears">Footwears</a>'+
              '<router-outlet></router-outlet>'
            //   '<my-footwears></my-footwears>'

    })
export class AppComponent {
    title = 'Shopping Items';
}