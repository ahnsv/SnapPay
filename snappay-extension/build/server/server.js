"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path = __importStar(require("path"));
var morgan_1 = __importDefault(require("morgan"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var bodyParser = __importStar(require("body-parser"));
var hbs = __importStar(require("hbs"));
var express_session_1 = __importDefault(require("express-session"));
var index_1 = __importDefault(require("../routes/index"));
var app = express_1.default();
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(morgan_1.default('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookie_parser_1.default());
app.use(express_session_1.default({
    secret: 'secret',
    resave: false,
    saveUninitialized: true
}));
app.use(express_1.default.static(path.join(__dirname, 'public')));
app.use(function (req, res, next) {
    res.locals.session = req.session;
    next();
});
app.use('/', index_1.default);
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    next(err);
});
app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.render('error');
});
exports = app;
