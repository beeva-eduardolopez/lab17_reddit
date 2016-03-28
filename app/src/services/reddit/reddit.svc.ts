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
