import { Behavior } from 'orchestra';

export default Behavior.extend({
  events: {
    'click dialog': 'empty',
    keydown: 'empty',
  },
  empty(e) {
    if (e.target.tagName === 'DIALOG' || e.keyCode === 27) {
      this.view.getRegion('dialog').empty();
    }
  },
});
