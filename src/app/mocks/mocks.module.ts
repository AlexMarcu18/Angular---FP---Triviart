import { NgModule } from "@angular/core";
import { QuestionsService } from './services/questions.service';
import { RulesService } from './services/rules.service';

@NgModule({
    declarations: [

    ],
    imports: [
    ],
    exports: [
    ],
    providers: [
        QuestionsService,
        RulesService
    ]
})
export class MocksModule { }
