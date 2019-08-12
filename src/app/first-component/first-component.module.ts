
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FirstComponentComponent} from './first-component.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FunctionalityService} from '../core/services/functionality.service';

@NgModule({
    declarations: [FirstComponentComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [FirstComponentComponent],
    providers: [FunctionalityService]
})
export class FirstComponentModule {
}
