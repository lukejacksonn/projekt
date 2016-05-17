import { View, Syphon } from 'orchestra';
import Template from './template.hbs';

// Import Services
import LoginService from '../../service/login';
import DialogService from '../../service/dialog';

// Import Widgets
import RegisterWidget from '../register';

export default View.extend({
  tagName: 'login-widget',
  template: Template,
  initialize() {
    this.listenTo(LoginService, 'error', this.loginError);
  },
  ui: {
    error: '.error',
    register: '.register',
  },
  events: {
    'submit form': 'login',
    'click @ui.register': 'register',
  },
  login(e) {
    e.preventDefault();
    this.ui.error.text('');
    const details = Syphon.serialize(this);
    LoginService.request('login', details);
  },
  register(e) {
    e.preventDefault();
    DialogService.request('show', new RegisterWidget());
  },
  loginError(message) {
    this.ui.error.text(message);
  },
});
