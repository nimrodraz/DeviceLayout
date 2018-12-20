const DeviceLayoutRatios = require('./deviceLayoutRatios.js');

function getDeviceLayoutRatios(){
    //return the deviceLayoutRations object containing the configuration of device layout rations
    var cache = require('memory-cache');

    let _deviceLayoutRatios = cache.get('deviceLayoutRatios');
    
    if (_deviceLayoutRatios==null){
      _deviceLayoutRatios =  new DeviceLayoutRatios();
      _deviceLayoutRatios.loadItems();  
      cache.put('deviceLayoutRatios',_deviceLayoutRatios);
    }

    return _deviceLayoutRatios;
}

module.exports.getDeviceLayoutRatios = getDeviceLayoutRatios;