import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BsModalService } from 'ngx-bootstrap';
import { HomeModule } from './modules/home-module/home.module';
import { GameModule } from './modules/game-module/game-page.module';
import { AdminModule } from './modules/admin-module/admin.module';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MocksModule } from './mocks/mocks.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HomeModule,
    GameModule,
    AdminModule,
    MocksModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [BsModalService,
  {
    provide: STEPPER_GLOBAL_OPTIONS,
    useValue: { displayDefaultIndicatorType: false }
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
