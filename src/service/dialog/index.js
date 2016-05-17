import { Service } from 'orchestra';
const DialogService = Service.extend({
  setup(view) {
    this.view = view;
  },
  requests: {
    show: 'show',
    empty: 'empty',
  },
  show(view) {
    this.view.showChildView('dialog', view);
  },
  empty() {
    this.view.emptyChildView();
  },
});

export default new DialogService();
