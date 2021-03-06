import {async, register} from 'platypus';
import BaseRepository from '../base/base.repo';
import RedditService from '../../services/reddit/reddit.svc';

export default class RedditRepository extends BaseRepository {

    constructor(private redditSvc: RedditService) {
        super();
    }

    getListReddit(): async.IThenable <Array<models.IDataChildren>> {
        return this.redditSvc.getListReddit();
    }
    
   getReddit(redditId: string): async.IAjaxThenable<models.IDataChildren> {
       return this.redditSvc.getReddit(redditId);
   }

}

register.injectable('reddit-repo', RedditRepository, [RedditService]); 
