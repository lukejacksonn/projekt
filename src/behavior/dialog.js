import {Behavior} from 'orchestra';

export default Behavior.extend({
  events: {
    'click dialog': 'emptyDialog'
  },
  emptyDialog(e) {
    if (e.target.tagName === 'DIALOG') {
      this.view.getRegion('dialog').empty();
    }
  },
});
