class Layout{
    
    constructor(id) {
            switch (id)
            {
                case 1:
                    this.menu = "A";                //example of we pass the layout to client, and on client we get the design data
                    this.backColor = "Lavender";    //example where on server we define the design by the selected layout
                    break;
                case 2:
                    this.menu = "B";
                    this.backColor = "lightcyan";
                    break;
                default:
                    this.menu = "C";
                    this.backColor = "LightBlue";
                    break;
            }
            this.id = id;
     }
}



module.exports= Layout;
