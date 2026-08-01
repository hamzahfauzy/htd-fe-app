import './core/directive.js'
import Router from "./core/router.js";
import routes from "./routes.js";
import Http from "./core/http.js";
import App from './core/app.js';
import menu from './config/menu.js';
import Input from './components/Input.js';
import Action from './components/Action.js';
import Breadcrumb from './components/Breadcrumb.js';
import view from './core/view.js';
import { doLogout, isRouteActive, setSideMenuActive, filterAction, isAllowed } from './libs/functions.js';
import { apiUrl } from './config/env.js';

Http.defaults.baseURL = apiUrl;

Http.defaults.timeout = 10000;

const app = new App;

app.on('.btn-logout', 'click', doLogout);

app.on('.vtp-side-menu', 'click', setSideMenuActive);

app.function('isRouteActive', isRouteActive)
app.function('filterAction', actions => {
    return filterAction(actions, app)
})

app.function('isAllowed', permissions => {
    return isAllowed(permissions, app)
})

app.provide('menus', menu)
app.component('vtp-input', Input)
app.component('vtp-action', Action)
app.component('breadcrumb', Breadcrumb)
app.component('vtp-notification', function(ctx){
    return view.render('components/notification')
})

app.component('vtp-account', function(ctx){
    return view.render('components/account')
})

const router = new Router(routes, app);

router.start();