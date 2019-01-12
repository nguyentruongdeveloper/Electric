import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '../../../node_modules/@angular/common/http';
import { MenuService } from './services/menu.service';
@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [MenuService],
  bootstrap: []
})
export class CoreModule { }
