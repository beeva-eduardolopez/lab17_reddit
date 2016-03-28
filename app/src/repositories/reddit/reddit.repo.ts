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

}

register.injectable('reddit-repo', RedditRepository, [RedditService]); 
