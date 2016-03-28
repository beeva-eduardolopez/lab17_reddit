import {async, register} from 'platypus';
import BaseService from '../base/base.svc';

export default class RedditService extends BaseService {
    
      getListReddit(): async.IAjaxThenable<Array<models.IRedditPost>> {
        return this.http.json<Array<models.IRedditPost>>({
            method: 'GET',
            url: this.host + '/all.json'
        }).then((success) => {
            return success.response;
        }, (err) => {
            console.log(err);
            throw err;
        });
    }

}

register.injectable('reddit-svc', RedditService);
