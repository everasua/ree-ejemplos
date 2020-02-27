import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proyecto-ree';

  dropdownSelect = [
    {
      id: 'extraChese',
      label: 'Extra cheese',
      disabled: true
    },
    {
      id: 'mushroom',
      label: 'Mushroom'
    },
    {
      id: 'onion',
      label: 'Onion'
    },
    {
      id: 'pepperoni',
      label: 'Pepperoni'
    },
    {
      id: 'sausage',
      label: 'Sausage'
    },
    {
      id: 'tomato',
      label: 'Tomato'
    }
  ];
}
