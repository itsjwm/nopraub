import {inject} from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';
import { primusService } from './services/primusService';

@inject(primusService)
export class App {
  constructor(primus) {
    this.message = 'Hello World2!';
    this.primusService = primus;

    this.primusService.connect('http://localhost:8081');
  }

  configureRouter(config, router) {
    this.router = router;

    config.title = 'Aurelia';
    config.map([
      {
        route: ['', '/'],
        name: 'dashboard',
        moduleId: PLATFORM.moduleName('./pages/dashboard'),
        nav: true,
        title: 'Github Users'
      }
    ]);
  }
}
