const DeviceLayoutRatios = require('./deviceLayoutRatios.js');

function getDeviceLayoutRatios(){
    _deviceLayoutRatios =  new DeviceLayoutRatios();
    _deviceLayoutRatios.loadItems();
    return _deviceLayoutRatios;
}

module.exports.getDeviceLayoutRatios = getDeviceLayoutRatios;