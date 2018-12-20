class Page{
    
    constructor(id) {
        this.id = id;
        this.Device="";
        this.Layout="";
        this.OtherContent="";
        this.Menu=[];
      }


      loadPage(id) {
        this.Menu=[ 
            {id:1, name:'Main page', pageId:100  },    
            {id:2, name:'Login', pageId:101  },  
            {id:3, name:'Register', pageId:102  },  
            {id:4, name:'About us', pageId:104  } 
        ];

        this.otherContent="Other page contnet";
      }
}

module.exports = Page;