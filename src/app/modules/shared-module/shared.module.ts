import { NgModule } from "@angular/core";
import { ModalComponent } from './components/modal/modal.component';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './components/profile/profile.component';


@NgModule({
    declarations:[
        ModalComponent,
        ProfileComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        ModalComponent,
        ProfileComponent
    ],
    providers: [

    ]
})
export class SharedModule{}
