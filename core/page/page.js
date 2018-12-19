class Page{
    
    constructor(id) {
        this.id = id;
        this.device="";
        this.layout="";
        this.otherContent="";
        this.menu=[];
      }


      loadPage(id) {
        this.menu=[ 
            {id:1, name:'Main page', pageId:100  },    
            {id:2, name:'Login', pageId:101  },  
            {id:3, name:'Register', pageId:102  },  
            {id:4, name:'About us', pageId:104  } 
        ];

        this.otherContent="Other page contnet";
      }
}

module.exports = Page;