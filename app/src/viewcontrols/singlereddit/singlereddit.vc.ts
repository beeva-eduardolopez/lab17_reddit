import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class SingleredditViewControl extends BaseViewControl {
    templateString: string = require('./singlereddit.vc.html');

    context: any = {};
}

register.viewControl('singlereddit-vc', SingleredditViewControl);
