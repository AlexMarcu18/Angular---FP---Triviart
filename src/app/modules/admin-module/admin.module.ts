import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { MatTabsModule, MatFormFieldModule, MatInputModule, MatSnackBarModule } from '@angular/material';
import { SharedModule } from '../shared-module/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddQuestionComponent } from './add-question/add-question.component';


@NgModule({
    declarations: [
        DashboardComponent,
        AddQuestionComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        MatTabsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSnackBarModule

    ],
    exports: [
        DashboardComponent
    ],
    providers: [

    ]
})
export class AdminModule { }
