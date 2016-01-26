import Orchestra from 'orchestra';

import View from './page';
import Service from './service';

module.exports =
Orchestra.Application.extend({
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