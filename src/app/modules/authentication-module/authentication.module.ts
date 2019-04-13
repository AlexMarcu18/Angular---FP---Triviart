import { NgModule } from "@angular/core";
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared-module/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations:[
        LoginComponent
    ],
    imports: [
        SharedModule,
        ReactiveFormsModule,
        FormsModule,
        CommonModule
    ],
    exports: [
        LoginComponent
    ],
    providers: [

    ]
})
export class AuthenticationModule{}
