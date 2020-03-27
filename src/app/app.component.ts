import { Component } from '@angular/core';
import { IMenuItems, ILanguages, ILanguage, IHeaderConfig } from '@ree/header';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

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
          link: 'base',
        },
        {
          name: 'Enlace título medio',
          link: 'https://www.google.es',
        },
        {
          name: 'Enlace título medio no, largo',
          link: 'second-form',
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
  ];

  constructor() {
  }


  public searchChangeEmit($event) {
    console.log($event);
  }
  public actionHeaderEmit($event) {
    console.log($event);
  }
  public selectedLanguageEmit($event) {
    console.log($event);
  }
  public searchEmit($event) {
    console.log($event);
  }
}
