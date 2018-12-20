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

    }

}

module.exports = DeviceLayoutRatios;