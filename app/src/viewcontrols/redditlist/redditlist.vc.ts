import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class RedditlistViewControl extends BaseViewControl {
    templateString: string = require('./redditlist.vc.html');

    context: any = {};
}

register.viewControl('redditlist-vc', RedditlistViewControl);
