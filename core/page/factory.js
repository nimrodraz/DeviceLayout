const page = require('./page');

function getPage(id){
    page = new page(id);
    return page;
}

module.exports.getPage = getPage;