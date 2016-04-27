import {Service} from 'orchestra';
const RegisterService = Service.extend({
  requests: {
    register: 'tryRegister',
  },
  tryRegister(details) {
    console.log(details);
    if (Math.random() > 0.6) this.registerError('jhbjhbjhb');
  },
  registerSuccess() {
    this.trigger('success');
  },
  registerError(message) {
    this.trigger('error', message);
  }
});

export default new RegisterService();
