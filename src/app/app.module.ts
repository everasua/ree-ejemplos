import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputModule } from '@ree/input';
import { ButtonModule } from '@ree/button';
import { SelectorModule } from '@ree/selector';
import { DropdownModule } from '@ree/dropdown';
import { RadioModule } from '@ree/radio';
import { DatepickerModule } from '@ree/datepicker';
import { DialogModule } from '@ree/dialog';
import { HeaderModule } from '@ree/header';
import { LoginModule } from '@ree/login';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SecondComponentComponent } from './components/second-component/second-component.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
@NgModule({
  declarations: [
    AppComponent,
    SecondComponentComponent,
    FirstComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    InputModule,
    ButtonModule,
    SelectorModule,
    FormsModule,
    HeaderModule,
    ReactiveFormsModule,
    RadioModule,
    LoginModule,
    DropdownModule,
    DatepickerModule,
    DialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
