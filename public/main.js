(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<!-- <div style=\"text-align:center\">\r\n    <h1>\r\n        Welcome to {{ title }}!\r\n    </h1>\r\n    <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\r\n</div>\r\n<h2>Here are some links to help you start: </h2>\r\n<ul>\r\n    <li>\r\n        <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\r\n    </li>\r\n    <li>\r\n        <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\r\n    </li>\r\n    <li>\r\n        <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\r\n    </li>\r\n</ul>\r\n\r\n<button (click)=\"EnviarMensaje()\">Botoncito</button>\r\n<button (click)=\"Solicitar_api()\">Botoncito API</button> {{Texto}}\r\n<table>\r\n    <tr *ngFor=\"let usuario of usuarios\">\r\n        <td>Nombre del usuario:</td>\r\n        <td>{{usuario.nombre}}</td>\r\n        <td>{{usuario._id}}</td>\r\n        <td><button (click)=\"Borrar(usuario._id)\">Borrar</button></td>\r\n        <td><button (click)=\"Modificar(usuario._id)\">Borrar</button></td>\r\n    </tr>\r\n\r\n</table>\r\n\r\n{{textoApi}} -->\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_socket_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/socket-service.service */ "./src/app/services/socket-service.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { ApihttpService } from './services/apihttp.service';

// import { TipoUsuario } from './interfaces/usuario.interface';
var AppComponent = /** @class */ (function () {
    // title = 'ftsock';
    // private ioConnection: any;
    // texto: String = 'Inicialmente nada';
    // usuarios: TipoUsuario[];
    // textoApi: String = '';
    function AppComponent(socketService) {
        this.socketService = socketService;
        // this.socketService.onMensajes().subscribe((message: any) => {
        //   console.log('Mensaje A:', message);
        // });
        // }
        // this.socketService.onMessageCallback().subscribe((message: any) => {
        //     console.log('Mensaje del callback:', message);
        //   });
        // this.socketService.onMessageB().subscribe((message: any) => {
        //   console.log('Mensaje B:', message);
        // });
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_socket_service_service__WEBPACK_IMPORTED_MODULE_1__["SocketServiceService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _app_routes__WEBPACK_IMPORTED_MODULE_7__["app_routing"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: app_routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "app_routing", function() { return app_routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");



var app_routes = [
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: '**', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
];
var app_routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(app_routes);


/***/ }),

/***/ "./src/app/components/home/grid-layout.css":
/*!*************************************************!*\
  !*** ./src/app/components/home/grid-layout.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-container {\n    display: -ms-grid;\n    display: grid;\n    height: 100%;\n        -ms-grid-columns: 1fr;\n        grid-template-columns: 1fr;\n        -ms-grid-rows: 100px 1px 1fr;\n        grid-template-rows: 100px 1fr;\n    grid-gap: 1px 1px;\n        grid-template-areas: \"Titulo\" \"Cuerpo\";\n}\n\n.Titulo {\n    -ms-grid-row: 1;\n    -ms-grid-column: 1;\n    grid-area: Titulo;\n}\n\n.Cuerpo {\n    display: -ms-grid;\n    display: grid;\n    -ms-grid-row: 3;\n    -ms-grid-column: 1;\n    grid-area: Cuerpo;\n        -ms-grid-columns: 1fr 1px 1fr;\n        grid-template-columns: 1fr 1fr;\n        -ms-grid-rows: 1fr;\n        grid-template-rows: 1fr;\n    grid-gap: 1px 1px;\n        grid-template-areas: \"Lista Formulario entrada\";\n}\n\n.Lista {\n    -ms-grid-row: 1;\n    -ms-grid-column: 1;\n    grid-area: Lista;\n}\n\n.Formulario-entrada {\n    grid-area: Formulario entrada;\n}"

/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- /// -->\r\n\r\n<div class=\"grid-container\">\r\n    <div class=\"Titulo\">\r\n        <h3 class=\"text-center\">\r\n            {{titulo}}\r\n        </h3>\r\n    </div>\r\n    <div class=\"Cuerpo\">\r\n        <div class=\"area-overlap-Lista\">\r\n            <div class=\"container-fluid\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <table class=\"table\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>\r\n                                        #\r\n                                    </th>\r\n                                    <th>\r\n                                        Tarea\r\n                                    </th>\r\n                                    <th>\r\n                                        Realizada\r\n                                    </th>\r\n                                    <th>\r\n                                        Status\r\n                                    </th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let tarea of tareas; let i=index\">\r\n                                    <td>\r\n                                        {{i}}\r\n                                    </td>\r\n                                    <td>\r\n                                        {{tarea.textoTarea}}\r\n                                    </td>\r\n                                    <td *ngIf=\"!tarea.realizada\">\r\n                                        <button (click)=\"Rea_tarea(tarea._id)\">Realizar</button>\r\n                                    </td>\r\n                                    <td *ngIf=\"tarea.realizada\">\r\n                                        Tarea realizada\r\n                                    </td>\r\n                                    <td>\r\n                                        <button (click)=\"Eliminar_tarea(tarea._id)\">Eliminar tarea</button>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"Formulario-entrada\">\r\n            <div class=\"container-fluid\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <form role=\"form\">\r\n                            <div class=\"form-group\">\r\n\r\n                                <label for=\"tareaInput\">\r\n                          Tarea:\r\n                        </label>\r\n                                <input type=\"email\" class=\"form-control\" id=\"tareaInput\" [(ngModel)]=\"textoTarea\" name=\"textoTarea\" />\r\n                            </div>\r\n                            <button type=\"submit\" (click)=\"Crear_mensaje()\" class=\"btn btn-primary\">\r\n                        Submit\r\n                      </button>\r\n                        </form>\r\n                        <br>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_apihttp_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/apihttp.service */ "./src/app/services/apihttp.service.ts");
/* harmony import */ var _services_socket_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/socket-service.service */ "./src/app/services/socket-service.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, apihttp, socketService) {
        var _this = this;
        this.router = router;
        this.apihttp = apihttp;
        this.socketService = socketService;
        this.titulo = 'TodoList';
        this.usuarios = [];
        this.tareas = [];
        this.textoTarea = '';
        console.log('Pero que conste que el login ni ha empezado');
        if (!(apihttp.logueado)) {
            router.navigate(['login']);
        }
        socketService.onMensajes().subscribe(function (mensajes) {
            console.log('Mensajes:', mensajes);
            _this.tareas = mensajes;
        });
        socketService.Solicitar_mensajes();
        // socketService.onMensajes().subscribe((message: any) => {
        //   console.log('Mensajes:', message);
        // });
    }
    HomeComponent.prototype.Eliminar_tarea = function (_id) {
        this.socketService.Eliminar_mensaje(_id);
    };
    HomeComponent.prototype.Crear_mensaje = function () {
        this.socketService.Crear_mensaje(this.textoTarea);
        this.textoTarea = '';
    };
    HomeComponent.prototype.Rea_tarea = function (_id) {
        this.socketService.Realizar_mensaje(_id);
    };
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css"), __webpack_require__(/*! ./grid-layout.css */ "./src/app/components/home/grid-layout.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_apihttp_service__WEBPACK_IMPORTED_MODULE_2__["ApihttpService"], _services_socket_service_service__WEBPACK_IMPORTED_MODULE_3__["SocketServiceService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/grid-layout.css":
/*!**************************************************!*\
  !*** ./src/app/components/login/grid-layout.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-container {\n    display: -ms-grid;\n    display: grid;\n    height: 100%;\n        -ms-grid-columns: 1fr;\n        grid-template-columns: 1fr;\n        -ms-grid-rows: 100px 1px 1fr 1px 1fr;\n        grid-template-rows: 100px 1fr 1fr;\n    grid-gap: 1px 1px;\n        grid-template-areas: \"Titulo\" \".\" \".\";\n}\n\n.Titulo {\n    -ms-grid-row: 1;\n    -ms-grid-column: 1;\n    grid-area: Titulo;\n}\n\n.Segunda-fila {\n    display: -ms-grid;\n    display: grid;\n    -ms-grid-row: 2;\n    -ms-grid-row-span: 1;\n    -ms-grid-column: 1;\n    -ms-grid-column-span: 1;\n    grid-area: 2 / 1 / 3 / 2;\n        -ms-grid-columns: auto 1px 300px 1px auto;\n        grid-template-columns: auto 300px auto;\n        -ms-grid-rows: 1fr;\n        grid-template-rows: 1fr;\n    grid-gap: 1px 1px;\n        grid-template-areas: \". Formulario .\";\n}\n\n.Formulario {\n    -ms-grid-row: 1;\n    -ms-grid-column: 3;\n    grid-area: Formulario;\n}"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-container\">\n    <div class=\"Titulo\">\n        <h3 class=\"text-center\">\n            {{titulo}}\n        </h3>\n    </div>\n    <div class=\"Segunda-fila\">\n        <div class=\"Formulario\">\n            <div class=\"container-fluid\">\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <form role=\"form\">\n                            <div class=\"form-group\">\n\n                                <label for=\"exampleInputEmail1\">\n                        Usuario\n                      </label>\n                                <input type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\" [(ngModel)]=\"usuario\" name=\"usuario\" />\n                            </div>\n                            <div class=\"form-group\">\n\n                                <label for=\"exampleInputPassword1\">\n                        Password\n                      </label>\n                                <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" [(ngModel)]=\"clave\" name=\"clave\" />\n                            </div>\n                            <div class=\"text-center\">\n                                <button type=\"submit\" class=\"btn btn-primary\" (click)=\"Login()\">\n                              Aceptar\n                            </button>\n                            </div>\n                            <div class=\"text-center\">\n                                {{errorAcceso}}\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_apihttp_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/apihttp.service */ "./src/app/services/apihttp.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(apihttp, router) {
        this.apihttp = apihttp;
        this.router = router;
        this.usuario = '';
        this.clave = '';
        this.titulo = 'TodoList';
        this.errorAcceso = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.Login = function () {
        var _this = this;
        this.apihttp.solicitar_token(this.usuario, this.clave).subscribe(function (data) {
            if (data.json().ok === false) {
                if (data.json().errBaseDatos) {
                    _this.errorAcceso = 'Error accediendo a la base de datos';
                }
                else {
                    _this.errorAcceso = data.json().err;
                }
                return;
            }
            _this.apihttp.token = data.json().token;
            _this.apihttp.logueado = true;
            _this.router.navigate(['home']);
        }, function (err) {
            _this.errorAcceso = 'Error accediendo a la base de datos';
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./grid-layout.css */ "./src/app/components/login/grid-layout.css")]
        }),
        __metadata("design:paramtypes", [_services_apihttp_service__WEBPACK_IMPORTED_MODULE_1__["ApihttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/services/apihttp.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/apihttp.service.ts ***!
  \*********************************************/
/*! exports provided: ApihttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApihttpService", function() { return ApihttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApihttpService = /** @class */ (function () {
    function ApihttpService(http) {
        this.http = http;
        this.logueado = false;
    }
    ApihttpService.prototype.Solicitar_api = function () {
        console.log('Solicitando api en el servidcio');
        // return this.http.get('http://localhost:3000/api/hola');
        return this.http.get('/api/hola');
    };
    ApihttpService.prototype.solicitar_token = function (usuario, clave) {
        // return this.http.post('http://localhost:3000/api/usuarios/login', {nombre: usuario, clave});
        return this.http.post('/api/usuarios/login', { nombre: usuario, clave: clave });
    };
    ApihttpService.prototype.solicitar_usuarios = function () {
        var opciones = {
            headers: new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
                Authorization: this.token
            })
        };
        // return this.http.get(`http://localhost:3000/api/usuarios`, opciones);
        return this.http.get("/api/usuarios", opciones);
    };
    ApihttpService.prototype.eliminar_usuario = function (id) {
        var opciones = {
            headers: new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
                Authorization: this.token
            })
        };
        // return this.http.delete(`http://localhost:3000/api/usuarios/${id}`, opciones);
        return this.http.delete("/api/usuarios/" + id, opciones);
    };
    ApihttpService.prototype.modificar_usuario = function (id) {
        var opciones = {
            headers: new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
                Authorization: this.token
            })
        };
        // return this.http.put(`http://localhost:3000/api/usuarios/${id}`, {nombre: 'Nuevo nombre'}, opciones);
        return this.http.put("/api/usuarios/" + id, { nombre: 'Nuevo nombre' }, opciones);
    };
    ApihttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], ApihttpService);
    return ApihttpService;
}());



/***/ }),

/***/ "./src/app/services/socket-service.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/socket-service.service.ts ***!
  \****************************************************/
/*! exports provided: SocketServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketServiceService", function() { return SocketServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// const SERVER_URL = 'http://localhost:3000';
var SERVER_URL = '/';
var SocketServiceService = /** @class */ (function () {
    function SocketServiceService() {
        console.log('Alguien ha llamado al socket');
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__(SERVER_URL);
    }
    SocketServiceService.prototype.onMensajes = function () {
        var _this = this;
        return new rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this.socket.on('Mensajes', function (data) { return observer.next(data); });
        });
    };
    SocketServiceService.prototype.sendMessage = function (mensaje, callback, atributos) {
        if (!atributos) {
            atributos = '';
        }
        this.socket.emit(mensaje, atributos, callback);
    };
    SocketServiceService.prototype.Solicitar_mensajes = function () {
        this.sendMessage('Sol_mensajes', null);
    };
    SocketServiceService.prototype.Eliminar_mensaje = function (_id) {
        this.sendMessage('Eli_mensaje', function (respuesta) {
            console.log('Respuesta:', respuesta);
            if (!respuesta.ok) {
                alert('No se ha podido borrar');
            }
        }, { _id: _id });
    };
    SocketServiceService.prototype.Crear_mensaje = function (textoTarea) {
        this.sendMessage('Cre_mensaje', function (respuesta) {
            console.log(respuesta);
        }, { textoTarea: textoTarea, realizada: false });
    };
    SocketServiceService.prototype.Realizar_mensaje = function (_id) {
        this.sendMessage('Rea_mensaje', null, { _id: _id });
    };
    SocketServiceService.prototype.onEvent = function (event) {
        var _this = this;
        return new rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this.socket.on(event, function () { return observer.next(); });
        });
    };
    SocketServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SocketServiceService);
    return SocketServiceService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Daniel\Downloads\cursoNode\Nueva carpeta\TodoList\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map