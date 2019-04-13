import { NgModule } from "@angular/core";
import { GamePageComponent } from './game-page/game-page.component';
import { CommonModule } from '@angular/common';
import { MatStepperModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatIconModule } from '@angular/material';
import { SharedModule } from '../shared-module/shared.module';
import { GameComponent } from './game/game.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations:[
        GamePageComponent,
        GameComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatStepperModule,
        MatOptionModule,
        MatSelectModule,
        MatIconModule
    ],
    exports: [
        GamePageComponent
    ],
    providers: [

    ]
})
export class GameModule{}
