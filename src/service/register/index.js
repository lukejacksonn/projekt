import { Service } from 'orchestra';
import Model from './model';

const RegisterService = Service.extend({
  requests: {
    register: 'tryRegister',
  },
  tryRegister(data) {
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
  registerSuccess() {
    this.trigger('success');
  },
  registerError(message) {
    this.trigger('error', message);
  },
});

export default new RegisterService();
