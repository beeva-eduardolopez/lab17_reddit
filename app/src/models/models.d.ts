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
        id?: string;
    }



}
