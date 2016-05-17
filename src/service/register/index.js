import { Service } from 'orchestra';
const RegisterService = Service.extend({
  requests: {
    register: 'tryRegister',
  },
  tryRegister() {
    if (Math.random() > 0.6) this.registerError('ERROR');
  },
  registerSuccess() {
    this.trigger('success');
  },
  registerError(message) {
    this.trigger('error', message);
  },
});

export default new RegisterService();
