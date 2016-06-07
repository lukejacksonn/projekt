import { Service } from 'orchestra';
import Model from './model';

const LoginService = Service.extend({
  requests: {
    login: 'tryLogin',
  },
  tryLogin(data) {
    const user = data;
    user.service = 'test';
    this.user = new Model(user);
    this.user.save(user, {
      success(model) {
        console.log('Saved', model);
      },
      error(model, res) {
        console.log('Error', model, res);
      },
    });
  },
  loginSuccess() {
    this.trigger('success');
  },
  loginError(message) {
    this.trigger('error', message);
  },
});

export default new LoginService();
