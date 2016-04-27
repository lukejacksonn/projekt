import {View} from 'orchestra';

// Import Services
import DialogService from './service/dialog';
import LoginService from './service/login';

// Import Pages
import HomePageView from './page/home';

// Import Behaviours
import DialogBehavior from './behavior/dialog';

export default View.extend({
  el: 'body',
  template: false,
  regions: {
    main: 'main',
    dialog: 'dialog',
  },
  behaviors: {
    dialog: { behaviorClass: DialogBehavior }
  },
  initialize() {

    // Setup Services
    LoginService.setup();
    DialogService.setup(this);

    // Show default page
    this.showChildView('main', new HomePageView());
  },
});
