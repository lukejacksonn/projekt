import {Application} from 'orchestra';

import View from './page/home';
import Service from './service/login';

export default Application.extend({
  el: 'body',
  template: false,
  regions: {
    main: 'main',
  },
  initialize() {
    Service.setup();
    this.main.show(new View());
  }
});
