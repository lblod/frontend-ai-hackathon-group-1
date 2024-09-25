import EmberRouter from '@ember/routing/router';
import config from 'frontend-ai-hackathon-group-1/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('guidelines', { path: '/guidelines/:id' });
  this.route('validation');
  this.route('chat');
});
