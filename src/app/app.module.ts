import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FirstComponentModule} from './first-component/first-component.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormComponent } from './form/form.component';
import {FunctionalityService} from './core/services/functionality.service';

@NgModule({
    declarations: [
        AppComponent,
        FormComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        FirstComponentModule,
        ReactiveFormsModule,
    ],
    providers: [FunctionalityService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
