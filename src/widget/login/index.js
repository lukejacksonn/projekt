import { View, Syphon } from 'orchestra';
import Template from './template.hbs';

// Import Services
import LoginService from '../../service/login';
import DialogService from '../../service/dialog';

// Import Widgets
import RegisterWidget from '../register';

// Import Behavior
import FormBehavior from '../../behavior/form';

export default View.extend({
  tagName: 'login-widget',
  template: Template,
  initialize() {
    this.listenTo(LoginService, 'error', this.error);
  },
  behaviors: {
    form: { behaviorClass: FormBehavior,
            service: LoginService,
          },
  },
  ui: {
    register: '.register',
  },
  events: {
    'submit form': 'submit',
    'click @ui.register': 'register',
  },
  triggers: {
    'submit form': 'submit',
  },
  submit() {
    const details = Syphon.serialize(this);
    LoginService.request('login', details);
  },
  register(e) {
    e.preventDefault();
    DialogService.request('show', new RegisterWidget());
  },
});
