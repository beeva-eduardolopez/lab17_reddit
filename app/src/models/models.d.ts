declare module models {


// success.data.children[0].data.id
    interface IRedditPost {
        data: IData;
    }

    interface IData {
        children: IChildren;
    }

    interface IChildren {
        dataChildren: IDataChildren;

    }
    
    interface IDataChildren {
        title: string;
        author: string;
        url: string;
        id?: string;
    }



}
