import { Behavior } from 'orchestra';

export default Behavior.extend({
  ui: {
    error: '.error',
  },
  onSubmit() {
    this.ui.error.text('');
  },
  error(message) {
    this.ui.error.text(message);
  },
});
