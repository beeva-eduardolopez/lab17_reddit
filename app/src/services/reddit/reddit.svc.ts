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
        return this.http.json<models.IDataChildren>({
            method: 'GET',
            url: this.host + '/posts/' + redditId
        }).then((success) => {
            return success.response;
        }, (err) => {
            console.log(err);
            throw err;
        });
    }


}

register.injectable('reddit-svc', RedditService);
