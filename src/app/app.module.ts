import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { NotFoundComponent } from './home/not-found/not-found.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { BookkeepingModule } from './bookkeeping/bookkeeping.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { EstimatesModule } from './estimates/estimates.module';
import { InvoicesModule } from './invoices/invoices.module';
import { ProfileModule } from './profile/profile.module';
import { UserModule } from './user/user.module';
import { ClientsModule } from './clients/clients.module';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    ClientsModule,
    BookkeepingModule,
    DashboardModule,
    EstimatesModule,
    InvoicesModule,
    ProfileModule,
    UserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
