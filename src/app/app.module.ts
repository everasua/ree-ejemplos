import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccordionModule } from '@ree/accordion';
import { InputModule } from '@ree/input';
import { ButtonModule } from '@ree/button';
import { SelectorModule } from '@ree/selector';
import { DropdownModule } from '@ree/dropdown';
import { RadioModule } from '@ree/radio';
import { DatepickerModule } from '@ree/datepicker';
import { HeaderModule } from '@ree/header';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AccordionModule,
    InputModule,
    ButtonModule,
    SelectorModule,
    FormsModule,
    ReactiveFormsModule,
    RadioModule,
    DropdownModule,
    DatepickerModule,
    HeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
