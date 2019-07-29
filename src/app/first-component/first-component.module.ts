import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FirstComponentComponent} from './first-component.component';
import {FormsModule} from "@angular/forms";
import {AuthService} from "../core/services/auth.service";

@NgModule({
    declarations: [FirstComponentComponent],
    imports: [
        CommonModule,
        FormsModule,
    ],
    exports: [FirstComponentComponent],
    providers: [AuthService]
})
export class FirstComponentModule {
}
