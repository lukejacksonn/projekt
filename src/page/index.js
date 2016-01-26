import Orchestra from 'orchestra';
import Template from './template.hbs';

import LoginWidget from '../widget';

export default Orchestra.LayoutView.extend({
  tagName: 'home-page',
  template: Template,
  regions: {
    login: '#login-widget'
  },
  onShow() {
    this.login.show(new LoginWidget());
  }
});