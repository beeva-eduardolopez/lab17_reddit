import {App, events, register, routing, web} from 'platypus';
import HomeViewControl from '../viewcontrols/home/home.vc';
import RedditListViewControl from '../viewcontrols/redditlist/redditlist.vc';
import SingleRedditViewControl from '../viewcontrols/singlereddit/singlereddit.vc';

export default class MyApp extends App {
    constructor(router: routing.Router, config: web.IBrowserConfig) {
        super();

		config.routingType = config.STATE;

          router.configure([
            { pattern: '', view: RedditListViewControl },
            { pattern: 'redditlist', view: RedditListViewControl },
            { pattern: 'reddit/:redditId', view: SingleRedditViewControl }
        ]);
    }

    error(ev: events.ErrorEvent<Error>): void {
        console.log(ev.error);
    }
}

register.app('app', MyApp, [
    routing.Router,
    web.IBrowserConfig
]);
