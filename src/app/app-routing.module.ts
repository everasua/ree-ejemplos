import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SecondComponentComponent } from './components/second-component/second-component.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';


const routes: Routes = [
  {
    path: 'second-form',
    component: SecondComponentComponent
  },
  {
    path: 'base',
    component: FirstComponentComponent,
  },
  {
    path: '',
    redirectTo: '/base',
    pathMatch: 'full'
  },
  { path: '**', component: FirstComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
