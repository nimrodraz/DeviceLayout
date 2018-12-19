const page = require('./page');

function getPage(id){
    _page = new page(id);
    _page.loadPage(id);
    return _page;
}

module.exports.getPage = getPage;