import {Service} from 'orchestra';
const LoginService = Service.extend({
	requests: {
		login: 'tryLogin'
	},
	tryLogin(details) {
		console.log(details);
    if (Math.random() > 0.6) this.loginError('jhbjhbjhb');
	},
  loginSuccess() {
    this.trigger('success');
  },
  loginError(message) {
    this.trigger('error', message);
  }
});

export default new LoginService();
