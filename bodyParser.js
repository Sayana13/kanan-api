const bodyParserPackage = require('body-parser');

function bodyParser(app) {
    app.use(bodyParserPackage.urlencoded({extended: false}));
    app.use(bodyParserPackage.json());
}

module.exports = bodyParser;