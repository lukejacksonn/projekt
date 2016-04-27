import {View, Syphon} from 'orchestra';
import Template from './template.hbs';

// Import Services
import DialogService from '../../service/dialog';
import RegisterService from '../../service/register';

// Import Widgets
import LoginView from '../login';

// Generate View
export default View.extend({
  tagName: 'register-widget',
  template: Template,
  ui: {
    'error': '.error',
    'login': '.login',
  },
  events: {
    'submit form': 'register',
    'click @ui.login': 'login',
  },
  initialize() {
    this.listenTo(RegisterService, 'error', this.registerError);
  },
  register(e) {
    e.preventDefault();
    this.ui.error.text('');
    let data = Syphon.serialize(this);
    RegisterService.request('register', data);
  },
  login(e) {
    e.preventDefault();
    DialogService.request('show', new LoginView());
  },
  registerError(message) {
    this.ui.error.text(message);
  }
});
