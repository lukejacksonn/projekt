import { Service } from 'orchestra';
const LoginService = Service.extend({
  requests: {
    login: 'tryLogin',
  },
  tryLogin() {
    if (Math.random() > 0.6) this.loginError('ERROR');
  },
  loginSuccess() {
    this.trigger('success');
  },
  loginError(message) {
    this.trigger('error', message);
  },
});

export default new LoginService();
