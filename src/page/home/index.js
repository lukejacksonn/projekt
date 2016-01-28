import {LayoutView} from 'orchestra';
import Template from './template.hbs';
//Page Widgets
import LoginWidget from '../../widget/login';
//Page Layout
export default LayoutView.extend({
  tagName: 'home-page',
  template: Template,
  regions: {
    login: '#login-widget'
  },
  onShow() {
    this.login.show(new LoginWidget());
  }
});
