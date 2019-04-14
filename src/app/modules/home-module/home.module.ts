import { NgModule } from "@angular/core";
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AuthenticationModule } from '../authentication-module/authentication.module';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        LandingPageComponent,
        RegisterComponent,
        LeaderboardComponent
    ],
    imports: [
        AuthenticationModule,
        ReactiveFormsModule,
        CommonModule,
        FormsModule

    ],
    exports: [
        LandingPageComponent,
        LeaderboardComponent
    ],
    providers: [

    ]
})
export class HomeModule { }
