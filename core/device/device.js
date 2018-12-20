class Device{
    
    constructor(id) {
        this.id = id;  
        
        switch (id) {
          case 1:
             this.deviceType = deviceType.MOBILE;
             break;
          case 2:    
              this.deviceType = deviceType.DESKTOP;          
              break;
          default:
               this.deviceType = deviceType.DESKTOP;           
        }
     }


}

//make an example of enum
const deviceType = {
  MOBILE: "MOBILE",
  DESKTOP: "DESKTOP",
};


module.exports.Device = Device;
module.exports.deviceType = deviceType;