class DeviceLayoutRatios{
    constructor() {
        this.Items=[];
        this.arrRations=[];
    }

    loadItems()
    {
        this.Items=[ 
            {DeviceId:1, LayoutId:1, Ratio:60,ActionsHistoryId:5000, Active:1},    
            {DeviceId:1, LayoutId:2, Ratio:40,ActionsHistoryId:5000, Active:1},    
            {DeviceId:2, LayoutId:1, Ratio:50,ActionsHistoryId:5001, Active:1},    
            {DeviceId:2, LayoutId:2, Ratio:50,ActionsHistoryId:5001, Active:1},    
        ];

        this.loadArrRatios();

    }

    loadArrRatios(){
        //or each unique device, build the array for ratio calc by random later, and put it on the dictonary on the class scope
        const arrUniqueDevices = [...new Set(this.Items.map(x=>x.DeviceId))];

        for (const deviceID of Object.values(arrUniqueDevices) ){

                let arr = new Array(100); let arrIndex = 0;

                for (let item of this.Items.filter(x=> x.DeviceId==deviceID)) {
                     for (let i = 0; i < item.Ratio; i++){
                         arr[arrIndex] = item.LayoutId;
                         arrIndex++;
                     }                  
                }
                this.arrRations.push({key: deviceID , value: arr });
        }
    }

    GetLayout(deviceId){
        //Returns the chosen layout after taking into account the admin configuration data (DeviceLayoutRatio) and making the random call.
       

        //get the array with 100 items of the specific device, each item will hold layoutId by the ratio numbrer we have on DeviceLayoutRatio Data
        let arr = this.arrRations.find(x => x.key == deviceId).value;

        // returns a random integer from 0 to 99
        let randomNumber= Math.floor(Math.random() * 100);     

        //return the deviceId we found on the arr with the postion of the randomNumber
        return arr[randomNumber];
    }

}

module.exports = DeviceLayoutRatios;