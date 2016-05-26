import { Behavior } from 'orchestra';
import DialogService from '../service/dialog';

export default Behavior.extend({
  events: {
    'click dialog': 'empty',
    keydown: 'empty',
  },
  empty(e) {
    if (e.target.tagName === 'DIALOG' || e.keyCode === 27) {
      DialogService.request('empty');
    }
  },
});
