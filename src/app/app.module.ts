import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NavBarComponent,
    FooterComponent,
    CustomerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, //usa RXJS
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
