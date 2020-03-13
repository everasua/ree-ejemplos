import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IRadioButton } from '@ree/radio';
import { ETypeSelector } from '@ree/selector';
import { IMenuItems, ILanguages, ILanguage, IHeaderConfig } from '@ree/header';
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
  public appName = 'Nombre de la aplicación';

  public languages: ILanguages = [
    {
      language: 'Español',
      code: 'es',
      flagSrc: '/assets/images/flags/flag-spa.svg'
    },
    {
      language: 'Inglés',
      code: 'en',
      flagSrc: '/assets/images/flags/flag-uk.svg'
    },
    {
      language: 'Euskera',
      code: 'eu',
      flagSrc: '/assets/images/flags/flag-usa.svg'
    }
  ];

  public selectedLanguage: ILanguage = {
    language: 'Inglés',
    code: 'en'
  };

  public headerOptions: IHeaderConfig = {
    optionalLinks: [{
      classIcon: 'icon-profile',
      label: 'enlace',
      code: 'enlace'
    },
    {
      color: 'blue', // black | blue
      label: 'enlace',
      code: 'enllace'
    }],
    searcher: {
      label: 'Buscar',
      dropdownLabel: 'Buscar en la aplicación',
      closeSearchLabel: 'Cerrar búsqueda',
      buttonDesktopLabel: '¡A buscar!'
    },
    login: {
      label: 'Acceder'
    }
  };

  public menuItems: IMenuItems = [
    {
      name: 'Planes anuales',
      subItems: [{
        category: 'Categoría de planes anuales',
        linkCategory: '/nuevo/enlace',
        subcategories: [{
          name: 'Enlace título',
          link: 'link',
        },
        {
          name: 'Enlace título medio',
          link: 'https://www.google.es',
        },
        {
          name: 'Enlace título medio no, largo',
          link: 'string',
        }
        ]
      },
      {
        category: '2º categoría de planes anualaes',
        linkCategory: 'https://www.bbc.co.uk',
        subcategories: [{
          name: 'Enlace título',
          link: 'link',
        },
        {
          name: 'Enlace título medio',
          link: 'string',
        },
        {
          name: 'Enlace título medio no, largo',
          link: 'string',
        }
        ]
      }, {
        category: 'Categoría de planes anuales',
        linkCategory: '/nuevo/enlace',
        subcategories: [{
          name: 'Enlace título',
          link: 'link',
        },
        {
          name: 'Enlace título medio',
          link: 'https://www.google.es',
        },
        {
          name: 'Enlace título medio no, largo',
          link: 'string',
        }
        ]
      }, {
        category: 'Categoría de planes anuales',
        linkCategory: '/nuevo/enlace',
        subcategories: [{
          name: 'Enlace título',
          link: 'link',
        },
        {
          name: 'Enlace título medio',
          link: 'https://www.google.es',
        },
        {
          name: 'Enlace título medio no, largo',
          link: 'string',
        }
        ]
      }, {
        category: 'Categoría de planes anuales',
        linkCategory: '/nuevo/enlace',
        subcategories: [{
          name: 'Enlace título',
          link: 'link',
        },
        {
          name: 'Enlace título medio',
          link: 'https://www.google.es',
        },
        {
          name: 'Enlace título medio no, largo',
          link: 'string',
        }
        ]
      }, {
        category: 'Categoría de planes anuales',
        linkCategory: '/nuevo/enlace',
        subcategories: [{
          name: 'Enlace título',
          link: 'link',
        },
        {
          name: 'Enlace título medio',
          link: 'https://www.google.es',
        },
        {
          name: 'Enlace título medio no, largo',
          link: 'string',
        }
        ]
      }, {
        category: 'Categoría de planes anuales',
        linkCategory: '/nuevo/enlace',
        subcategories: [{
          name: 'Enlace título',
          link: 'link',
        },
        {
          name: 'Enlace título medio',
          link: 'https://www.google.es',
        },
        {
          name: 'Enlace título medio no, largo',
          link: 'string',
        }
        ]
      }, {
        category: 'Categoría de planes anuales',
        linkCategory: '/nuevo/enlace',
        subcategories: [{
          name: 'Enlace título',
          link: 'link',
        },
        {
          name: 'Enlace título medio',
          link: 'https://www.google.es',
        },
        {
          name: 'Enlace título medio no, largo',
          link: 'string',
        }
        ]
      }, {
        category: 'Categoría de planes anuales',
        linkCategory: '/nuevo/enlace',
        subcategories: [{
          name: 'Enlace título',
          link: 'link',
        },
        {
          name: 'Enlace título medio',
          link: 'https://www.google.es',
        },
        {
          name: 'Enlace título medio no, largo',
          link: 'string',
        }
        ]
      }, {
        category: 'Categoría de planes anuales',
        linkCategory: '/nuevo/enlace',
        subcategories: [
        ]
      }]
    },
    {
      name: 'Auditorías',
      subItems: [{
        category: 'Categoría',
        subcategories: [{
          name: 'Enlace título',
          link: 'link',
        },
        {
          name: 'Enlace título',
          link: 'link',
        },
        {
          name: 'Enlace título medio',
          link: 'string',
        },
        {
          name: 'Enlace título medio no, largo',
          link: 'string',
        }]
      }, {
        //category: 'Categoría de planes anualaes',
        subcategories: [{
          name: 'Enlace título',
          link: 'link',
        },
        {
          name: 'Enlace título medio',
          link: 'string',
        },
        {
          name: 'Enlace título medio no, largo',
          link: 'string',
        }
        ]
      }],
    },
    {
      name: 'Anomalías',
      links: [{
        name: 'Enlace título',
        link: 'link',
      },
      {
        name: 'Enlace título medio',
        link: 'string',
      },
      {
        name: 'Enlace título medio no, largo',
        link: 'string',
      },
      {
        name: 'Enlace título',
        link: 'link',
      },
      {
        name: 'Enlace título medio',
        link: 'https://www.google.es',
      },
      {
        name: 'Enlace título medio no, largo',
        link: 'string',
      },
      {
        name: 'Enlace título',
        link: 'link',
      },
      {
        name: 'Enlace título medio',
        link: 'https://www.google.es',
      },
      {
        name: 'Enlace título medio no, largo',
        link: 'string',
      },
      {
        name: 'Enlace título',
        link: 'link',
      },
      {
        name: 'Enlace título medio',
        link: 'https://www.google.es',
      },
      {
        name: 'Enlace título medio no, largo',
        link: 'string',
      },
      {
        name: 'Enlace título',
        link: 'link',
      },
      {
        name: 'Enlace título medio',
        link: 'https://www.google.es',
      },
      {
        name: 'Enlace título medio no, largo',
        link: 'string',
      }
      ]
    },
    {
      name: 'Observaciones',
    },
    {
      name: 'Informes',
    },
    {
      name: 'Programas de trabajo',
    },
    {
      name: 'Gestión de tiempos',
    },
    {
      name: 'Datos estructurales',
    }
  ]

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
  public searchChangeEmit($event) {
    console.log($event);
  }
  public actionHeaderEmit($event){
    console.log($event);
  }
  public selectedLanguageEmit($event){
    console.log($event);
  }
  public searchEmit($event){
    console.log($event);
  }
}
