import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import ReditRepository from '../../repositories/reddit/reddit.repo';
import SingleRedditViewControl from '../singlereddit/singlereddit.vc';

export default class RedditlistViewControl extends BaseViewControl {
    templateString: string = require('./redditlist.vc.html');

    context = {
        reddits: <Array<models.IDataChildren>>[]
    };

    constructor(private redditRepo: ReditRepository) {
        super();
    }

    navigatedTo(): void {
        console.log('navigated to!');
        this.redditRepo.getListReddit().then((success) => {
            console.log('get reddits returned!');
            console.log(success);
            this.context.reddits = success;
        }, (err) => {
            console.log('something went wrong!');
            console.log(err);
        });
    }
    
    viweDetails(redditId: string): void {
        this.navigator.navigate(SingleRedditViewControl, {
            parameters: {
                redditId: redditId
            }
        });
    }
}

register.viewControl('redditlist-vc', RedditlistViewControl, [ReditRepository]);
