import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { FootwearDetailComponent } from './footwear-detail.component';
import { FootwearService }  from './footwear.service';
@NgModule({
  declarations: [
    AppComponent,
    FootwearDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [FootwearService],
  bootstrap: [AppComponent]
})
export class AppModule { }
