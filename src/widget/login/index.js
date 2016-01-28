import {LayoutView, Syphon} from 'orchestra';
import Template from './template.hbs';
// Widget Services
import LoginService from '../../service/login';
// Widget Layout
export default LayoutView.extend({
	tagName: 'login-widget',
	template: Template,
  initialize() {
    // Listen for triggers
    LoginService.on('error', this.loginError, this);
  },
  ui: {
    'error': '.error'
  },
  events: {
    'submit form': 'login'
  },
  login(e) {
    e.preventDefault();
    // Get data from form inputs and submit request
    let details = Syphon.serialize(this);
    LoginService.request('login', details);
    // Reset error text
    this.ui.error.text('');
  },
  loginError(message) {
    // Output error text to user
    this.ui.error.text(message);
  }
});
