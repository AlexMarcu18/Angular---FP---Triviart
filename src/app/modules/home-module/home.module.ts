import { NgModule } from "@angular/core";
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AuthenticationModule } from '../authentication-module/authentication.module';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
    declarations:[
        LandingPageComponent,
        RegisterComponent
    ],
    imports: [
        AuthenticationModule,
        ReactiveFormsModule,
        FormsModule

    ],
    exports: [
        LandingPageComponent
    ],
    providers: [

    ]
})
export class HomeModule{}
