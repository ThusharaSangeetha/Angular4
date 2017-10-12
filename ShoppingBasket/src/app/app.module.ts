import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { FootwearDetailComponent } from './footwear-detail.component';
import { FootwearService }  from './footwear.service';
import {RouterModule,Routes} from '@angular/router'
import { FootwearsComponent }     from './footwears.component';


const appRoutes : Routes = [
  // {
  //   path: 'crisis-center',
  //   component: CrisisListComponent
  // },
  {
    path: 'footwears/:id',
    component: FootwearDetailComponent
  },
  {
    path: 'footwears',
    component: FootwearsComponent
  },

  // {
  //   path: 'footwear',
  //   component: FootwearListComponent,
  //   data: {title: 'Footwear List'}
  // },
  {
    path:'',
    redirectTo: '/footwears',
    pathMatch: 'full'
  }
  // ,
  // {
  //   path:'**',
  //   component: PageNotFoundComponent
  // }

];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes,{enableTracing:true}),
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    FootwearDetailComponent,
    FootwearsComponent
  ],
  providers: [FootwearService],
  bootstrap: [AppComponent]
})
export class AppModule { }
