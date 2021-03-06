import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import ReditRepository from '../../repositories/reddit/reddit.repo';
import RedditListViewControl from '../redditlist/redditlist.vc';

export default class SingleredditViewControl extends BaseViewControl {
    templateString: string = require('./singlereddit.vc.html');

    context = {
        reddit: <models.IDataChildren>{}
    };

   constructor(private redditRepo: ReditRepository) {
        super();
    }

    navigatedTo(parameters: any): void {
        let id: string = parameters.redditId;
        this.redditRepo.getReddit(id).then((success) => {
            console.log(success);
            this.context.reddit = success;
        }, (err) => {
            console.log(err);
        });
    }
    
    listReddit(){
          this.navigator.navigate(RedditListViewControl);
    }
}

register.viewControl('singlereddit-vc', SingleredditViewControl, [ReditRepository]);
