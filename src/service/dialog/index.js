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
    // Get window scroll position
    this.scrollY = window.pageYOffset || document.documentElement.scrollTop;
    // Make body fixed and top offset by scroll position
    this.view.el.style.position = 'fixed';
    this.view.el.style.top = `-${this.scrollY}px`;
    // Show view in dialog region
    this.view.showChildView('dialog', view);
  },
  empty() {
    // Remove fixed position and top offset
    this.view.el.style.position = '';
    this.view.el.style.top = '';
    // Scroll window to initial position
    window.scrollTo(0, this.scrollY);
    // Empty the dialog region
    this.view.getRegion('dialog').empty();
  },
});

export default new DialogService();
