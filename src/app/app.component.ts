import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IRadioButton } from '@ree/radio';
import { ETypeSelector } from '@ree/selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public formGroup: FormGroup;
  public radioButtonConfig: Array<IRadioButton>;
  public selectItems;
  ETypeSelectorComparador = ETypeSelector;

  constructor(private formBuilder: FormBuilder) {
    this.radioButtonConfig = [
      {
        id: 'radio1',
        label: 'Radio 1'
      },
      {
        id: 'radio2',
        label: 'Radio 2'
      },
      {
        id: 'radio3',
        label: 'Radio 3'
      }
    ];
    this.selectItems = [
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
    this.formGroup = this.formBuilder.group({
      email: ['', [Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      password: ['dsf', [Validators.required]],
      selector: [true],
      dropdown: ['Tomato'],
      dropdown2: [''],
      datepicker: [null],
      radioButton: ['', [Validators.required]]
    });
  }

  /**
   * Ver por consola el resultado del formulario
   * @param $event Evento recibido por parte del boton pulsado
   */
  verFormulario($event) {
    console.log('$event: ', $event);
    console.log('formGroup: ', this.formGroup);
  }
}
