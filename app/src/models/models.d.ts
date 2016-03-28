declare module models {

    // success.data.children[0].data.id
    interface IRedditPost {
        data: IData;
    }

    interface IData {
        children: Array<IChildren>;
    }

    interface IChildren {
        data: IDataChildren;

    }

    interface IDataChildren {
        title: string;
        author: string;
        url: string;
        id: string;
        domain?: string,
        banned_by?: string,
        subreddit?: string,
        selftext_html?: string,
        selftext?: string,
        likes?: string,
        suggested_sort?: string,
        secure_media?: string,
        link_flair_text?: string,
        from_kind?: string,
        gilded?: number,
        archived?: boolean,
        clicked?: boolean,
        report_reasons?: string,
        media?: string,
        score?: number,
        approved_by?: string,
        over_18?: boolean,
        hidden?: boolean,
        num_comments?: number,
        thumbnail?: string,
        subreddit_id?: string,
        hide_score?: boolean,
        edited?: boolean,
        link_flair_css_class?: string,
        author_flair_css_class?: string,
        downs?: number,
        saved?: boolean,
        removal_reason?: string,
        post_hint?: string,
        stickied?: boolean,
        from?: string,
        is_self?: boolean,
        from_id?: string,
        permalink?: string,
        locked?: boolean,
        created?: Date,
        author_flair_text?: string,
        quarantine?: boolean,
        created_utc?: Date,
        distinguished?: string,
        visited?: boolean,
        num_reports?: string,
        ups?: number
    }

}
