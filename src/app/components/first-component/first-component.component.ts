import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IRadioButton } from '@ree/radio';
import { ETypeSelector } from '@ree/selector';
import { DialogComponent } from '@ree/dialog';
@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit {
  @ViewChild('saveChanges', { static: true }) private _dialog: DialogComponent;
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

  ngOnInit() {
  }

  openModal(){
    this._dialog.openDialog(900, 'class', 900, true, false);
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
