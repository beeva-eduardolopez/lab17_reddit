import {async, register} from 'platypus';
import BaseService from '../base/base.svc';

export default class RedditService extends BaseService {

    getListReddit(): async.IAjaxThenable<Array<models.IDataChildren>> {
        return this.http.json<models.IRedditPost>({
            method: 'GET',
            url: this.host + '/all.json'
        }).then((success) => {
            let children: Array<models.IChildren> = success.response.data.children;
            let arrayDataChildren: Array<models.IDataChildren> = new Array();
            children.forEach(element => {

                let dataChil = <models.IDataChildren>{};

                dataChil.title = element.data.title;
                dataChil.author = element.data.author;
                dataChil.id = element.data.id;
                dataChil.url = element.data.url;

                arrayDataChildren.push(dataChil);
            });
            return arrayDataChildren;
        }, (err) => {
            console.log(err);
            throw err;
        });
    }


    getReddit(redditId: string): async.IAjaxThenable<models.IDataChildren> {
        return this.http.json<models.IRedditPost>({
            method: 'GET',
            url: this.host + '/all.json'
        }).then((success) => {
            let children: Array<models.IChildren> = success.response.data.children;
            let dataChil = <models.IDataChildren>{};
            children.forEach(element => {
                if (element.data.id === redditId) {
                    dataChil.title = element.data.title;
                    dataChil.author = element.data.author;
                    dataChil.id = element.data.id;
                    dataChil.url = element.data.url;
                    dataChil.domain = element.data.domain;
                    dataChil.banned_by = element.data.banned_by;
                    dataChil.subreddit = element.data.subreddit;
                    dataChil.selftext_html = element.data.selftext_html;
                    dataChil.selftext = element.data.selftext;
                    dataChil.likes = element.data.likes;
                    dataChil.suggested_sort = element.data.suggested_sort;
                    dataChil.secure_media = element.data.secure_media;
                    dataChil.link_flair_text = element.data.link_flair_text;
                    dataChil.from_kind = element.data.from_kind;
                    dataChil.gilded = element.data.gilded;
                    dataChil.archived = element.data.archived;
                    dataChil.clicked = element.data.clicked;
                    dataChil.report_reasons = element.data.report_reasons;
                    dataChil.media = element.data.media;
                    dataChil.score = element.data.score;
                    dataChil.approved_by = element.data.approved_by;
                    dataChil.over_18 = element.data.over_18;
                    dataChil.hidden = element.data.hidden;         
                    dataChil.num_comments = element.data.num_comments;
                    dataChil.thumbnail = element.data.thumbnail;
                    dataChil.subreddit_id = element.data.subreddit_id;
                    dataChil.hide_score = element.data.hide_score;
                    dataChil.link_flair_css_class = element.data.link_flair_css_class;
                    dataChil.author_flair_css_class = element.data.author_flair_css_class;
                    dataChil.downs = element.data.downs;
                    dataChil.saved = element.data.saved;
                    dataChil.removal_reason = element.data.removal_reason;
                    dataChil.post_hint = element.data.post_hint;
                    dataChil.stickied = element.data.stickied;
                    dataChil.from = element.data.from;
                    dataChil.is_self = element.data.is_self;
                    dataChil.from_id = element.data.from_id;
                    dataChil.permalink = element.data.permalink;
                    dataChil.locked = element.data.locked;
                    dataChil.created = element.data.created;
                    dataChil.author_flair_text = element.data.author_flair_text;
                    dataChil.quarantine = element.data.quarantine;
                    dataChil.created_utc = element.data.created_utc;
                    dataChil.distinguished = element.data.distinguished;
                    dataChil.visited = element.data.visited;
                    dataChil.num_reports = element.data.num_reports;
                    dataChil.ups = element.data.ups;

                }
            });
            return dataChil;
        }, (err) => {
            console.log(err);
            throw err;
        });
    }


}

register.injectable('reddit-svc', RedditService);
