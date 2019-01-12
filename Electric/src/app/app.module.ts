import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '../../node_modules/@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent, MenuComponent } from './core/components';
import { CoreModule } from './core/core.module';
import { BannerComponent, HomeComponent, SectionAdvertisementComponent, SectionHotDealComponent, SectionNewProductComponent } from './feature/home/components';
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];
@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    SectionAdvertisementComponent,
    SectionHotDealComponent,
    SectionNewProductComponent,
    HomeComponent,
    HeaderComponent,
    MenuComponent

  ],
  imports: [
    BrowserModule,
    CoreModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
