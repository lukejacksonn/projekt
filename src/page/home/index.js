import { View } from 'orchestra';
import Template from './template.hbs';

// Import Widgets
import PromoWidget from '../../widget/promo';
import GamesWidget from '../../widget/games';

// Generate View
export default View.extend({
  tagName: 'home-page',
  template: Template,
  regions: {
    promo: 'promo-widget',
    games: 'games-widget',
  },
  onAttach() {
    // Show Child Views
    this.showChildView('promo', new PromoWidget(), { replaceElement: true });
    this.showChildView('games', new GamesWidget(), { replaceElement: true });
  },
});
