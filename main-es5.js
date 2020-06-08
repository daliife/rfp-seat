function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _car_scroller_car_scroller_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./car-scroller/car-scroller.component */
    "./src/app/car-scroller/car-scroller.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _start_scene_start_scene_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./start-scene/start-scene.component */
    "./src/app/start-scene/start-scene.component.ts");
    /* harmony import */


    var _video_wrapper_video_wrapper_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./video-wrapper/video-wrapper.component */
    "./src/app/video-wrapper/video-wrapper.component.ts");
    /* harmony import */


    var _first_scene_first_scene_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./first-scene/first-scene.component */
    "./src/app/first-scene/first-scene.component.ts");
    /* harmony import */


    var _second_scene_second_scene_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./second-scene/second-scene.component */
    "./src/app/second-scene/second-scene.component.ts");
    /* harmony import */


    var _third_scene_third_scene_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./third-scene/third-scene.component */
    "./src/app/third-scene/third-scene.component.ts");
    /* harmony import */


    var _closing_scene_closing_scene_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./closing-scene/closing-scene.component */
    "./src/app/closing-scene/closing-scene.component.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.discoveringPathSuccess = true;
        this.dragAndDropSuccess = false;
      }

      _createClass(AppComponent, [{
        key: "discoverPath",
        value: function discoverPath() {
          this.discoveringPathSuccess = true;
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      inputs: {
        discoveringPathSuccess: "discoveringPathSuccess",
        dragAndDropSuccess: "dragAndDropSuccess"
      },
      decls: 10,
      vars: 0,
      consts: [["youtubeUrl", "https://www.youtube.com/embed/zpOULjyy-n8?rel=0"], [3, "discoverPath"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-car-scroller");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-start-scene");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-video-wrapper", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-first-scene");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-second-scene", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("discoverPath", function AppComponent_Template_app_second_scene_discoverPath_5_listener() {
            return ctx.discoverPath();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-third-scene");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-closing-scene");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "router-outlet");
        }
      },
      directives: [_car_scroller_car_scroller_component__WEBPACK_IMPORTED_MODULE_1__["CarScrollerComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], _start_scene_start_scene_component__WEBPACK_IMPORTED_MODULE_3__["StartSceneComponent"], _video_wrapper_video_wrapper_component__WEBPACK_IMPORTED_MODULE_4__["VideoWrapperComponent"], _first_scene_first_scene_component__WEBPACK_IMPORTED_MODULE_5__["FirstSceneComponent"], _second_scene_second_scene_component__WEBPACK_IMPORTED_MODULE_6__["SecondSceneComponent"], _third_scene_third_scene_component__WEBPACK_IMPORTED_MODULE_7__["ThirdSceneComponent"], _closing_scene_closing_scene_component__WEBPACK_IMPORTED_MODULE_8__["ClosingSceneComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, {
        discoveringPathSuccess: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        dragAndDropSuccess: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _car_scroller_car_scroller_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./car-scroller/car-scroller.component */
    "./src/app/car-scroller/car-scroller.component.ts");
    /* harmony import */


    var _video_wrapper_video_wrapper_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./video-wrapper/video-wrapper.component */
    "./src/app/video-wrapper/video-wrapper.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _first_scene_first_scene_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./first-scene/first-scene.component */
    "./src/app/first-scene/first-scene.component.ts");
    /* harmony import */


    var _second_scene_second_scene_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./second-scene/second-scene.component */
    "./src/app/second-scene/second-scene.component.ts");
    /* harmony import */


    var _third_scene_third_scene_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./third-scene/third-scene.component */
    "./src/app/third-scene/third-scene.component.ts");
    /* harmony import */


    var _closing_scene_closing_scene_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./closing-scene/closing-scene.component */
    "./src/app/closing-scene/closing-scene.component.ts");
    /* harmony import */


    var _start_scene_start_scene_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./start-scene/start-scene.component */
    "./src/app/start-scene/start-scene.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [HTMLCanvasElement],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _car_scroller_car_scroller_component__WEBPACK_IMPORTED_MODULE_5__["CarScrollerComponent"], _video_wrapper_video_wrapper_component__WEBPACK_IMPORTED_MODULE_6__["VideoWrapperComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _first_scene_first_scene_component__WEBPACK_IMPORTED_MODULE_8__["FirstSceneComponent"], _second_scene_second_scene_component__WEBPACK_IMPORTED_MODULE_9__["SecondSceneComponent"], _third_scene_third_scene_component__WEBPACK_IMPORTED_MODULE_10__["ThirdSceneComponent"], _closing_scene_closing_scene_component__WEBPACK_IMPORTED_MODULE_11__["ClosingSceneComponent"], _start_scene_start_scene_component__WEBPACK_IMPORTED_MODULE_12__["StartSceneComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _car_scroller_car_scroller_component__WEBPACK_IMPORTED_MODULE_5__["CarScrollerComponent"], _video_wrapper_video_wrapper_component__WEBPACK_IMPORTED_MODULE_6__["VideoWrapperComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _first_scene_first_scene_component__WEBPACK_IMPORTED_MODULE_8__["FirstSceneComponent"], _second_scene_second_scene_component__WEBPACK_IMPORTED_MODULE_9__["SecondSceneComponent"], _third_scene_third_scene_component__WEBPACK_IMPORTED_MODULE_10__["ThirdSceneComponent"], _closing_scene_closing_scene_component__WEBPACK_IMPORTED_MODULE_11__["ClosingSceneComponent"], _start_scene_start_scene_component__WEBPACK_IMPORTED_MODULE_12__["StartSceneComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
          providers: [HTMLCanvasElement],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/car-scroller/car-scroller.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/car-scroller/car-scroller.component.ts ***!
    \********************************************************/

  /*! exports provided: CarScrollerComponent */

  /***/
  function srcAppCarScrollerCarScrollerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarScrollerComponent", function () {
      return CarScrollerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__); // tslint:disable-next-line: quotemark


    var CarScrollerComponent =
    /*#__PURE__*/
    function () {
      function CarScrollerComponent() {
        _classCallCheck(this, CarScrollerComponent);

        this.scrollPercentage = 0;
      }

      _createClass(CarScrollerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.updateMovable();
        }
      }, {
        key: "onResize",
        value: function onResize(event) {
          this.scrollPercentage = this.refreshPercentage();
        }
      }, {
        key: "doSomethingOnWindowsScroll",
        value: function doSomethingOnWindowsScroll($event) {
          this.scrollPercentage = this.refreshPercentage();
          this.updateAnimation();
          this.updateMovable();
        }
      }, {
        key: "refreshPercentage",
        value: function refreshPercentage() {
          var viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
          var scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
          var documentHeight = jquery__WEBPACK_IMPORTED_MODULE_1__(document).height();
          var homeHeight = jquery__WEBPACK_IMPORTED_MODULE_1__('#home-container').height() + jquery__WEBPACK_IMPORTED_MODULE_1__('#start-scene-container').height();
          var scrollPositionRelative = (scrollPosition - homeHeight) / (documentHeight - viewportHeight - homeHeight);
          var percentageResult = scrollPosition - homeHeight < 0 ? 0 : scrollPositionRelative;
          return percentageResult;
        }
      }, {
        key: "updateMovable",
        value: function updateMovable() {
          var fittingFactor = 1 - (jquery__WEBPACK_IMPORTED_MODULE_1__('.movable').width() + 80) / jquery__WEBPACK_IMPORTED_MODULE_1__('#car').width();
          var percentage = this.scrollPercentage * 100 * fittingFactor + '%';
          jquery__WEBPACK_IMPORTED_MODULE_1__('.movable').css({
            left: percentage
          });
        }
      }, {
        key: "updateAnimation",
        value: function updateAnimation() {
          if (this.scrollPercentage > 0) {
            jquery__WEBPACK_IMPORTED_MODULE_1__('#navigation-bar').addClass('animate__slideInDown');
            jquery__WEBPACK_IMPORTED_MODULE_1__('#navigation-bar').removeClass('animate__slideOutUp');
          } else {
            jquery__WEBPACK_IMPORTED_MODULE_1__('#navigation-bar').addClass('animate__slideOutUp');
            jquery__WEBPACK_IMPORTED_MODULE_1__('#navigation-bar').removeClass('animate__slideInDown');
          }
        }
      }]);

      return CarScrollerComponent;
    }();

    CarScrollerComponent.ɵfac = function CarScrollerComponent_Factory(t) {
      return new (t || CarScrollerComponent)();
    };

    CarScrollerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CarScrollerComponent,
      selectors: [["app-car-scroller"]],
      hostBindings: function CarScrollerComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function CarScrollerComponent_resize_HostBindingHandler($event) {
            return ctx.onResize($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("scroll", function CarScrollerComponent_scroll_HostBindingHandler($event) {
            return ctx.doSomethingOnWindowsScroll($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      decls: 4,
      vars: 0,
      consts: [["id", "navigation-bar", 1, "navbar", "fixed-top", "navbar-light", "bg-light", "animate__animated", "animate__faster", "animate__slideOutUp"], ["id", "car"], ["src", "../../assets/navigation-bar/stepper.svg", 1, "stepper"], ["src", "../../assets/navigation-bar/car.svg", 1, "fixed-position", "movable"]],
      template: function CarScrollerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".fixed-position[_ngcontent-%COMP%]{\r\n  display: inline-flex;\r\n  top: 30%;\r\n  position: absolute;\r\n}\r\n\r\n.movable[_ngcontent-%COMP%]{\r\n  z-index: 4;\r\n  margin: 0px 30px;\r\n}\r\n\r\n#navigation-bar[_ngcontent-%COMP%]{\r\n  height: 110px;\r\n  padding: 0px!important;\r\n}\r\n\r\n#car[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  background-color: white;\r\n}\r\n\r\n.stepper[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  height: 110px;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyLXNjcm9sbGVyL2Nhci1zY3JvbGxlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQW9CO0VBQ3BCLFFBQVE7RUFDUixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLG9CQUFpQjtLQUFqQixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jYXItc2Nyb2xsZXIvY2FyLXNjcm9sbGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZml4ZWQtcG9zaXRpb257XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgdG9wOiAzMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4ubW92YWJsZXtcclxuICB6LWluZGV4OiA0O1xyXG4gIG1hcmdpbjogMHB4IDMwcHg7XHJcbn1cclxuXHJcbiNuYXZpZ2F0aW9uLWJhcntcclxuICBoZWlnaHQ6IDExMHB4O1xyXG4gIHBhZGRpbmc6IDBweCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiNjYXJ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5zdGVwcGVye1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTEwcHg7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarScrollerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-car-scroller',
          templateUrl: './car-scroller.component.html',
          styleUrls: ['./car-scroller.component.css']
        }]
      }], function () {
        return [];
      }, {
        onResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:resize', ['$event']]
        }],
        doSomethingOnWindowsScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:scroll', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/closing-scene/closing-scene.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/closing-scene/closing-scene.component.ts ***!
    \**********************************************************/

  /*! exports provided: ClosingSceneComponent */

  /***/
  function srcAppClosingSceneClosingSceneComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClosingSceneComponent", function () {
      return ClosingSceneComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ClosingSceneComponent =
    /*#__PURE__*/
    function () {
      function ClosingSceneComponent() {
        _classCallCheck(this, ClosingSceneComponent);
      }

      _createClass(ClosingSceneComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ClosingSceneComponent;
    }();

    ClosingSceneComponent.ɵfac = function ClosingSceneComponent_Factory(t) {
      return new (t || ClosingSceneComponent)();
    };

    ClosingSceneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ClosingSceneComponent,
      selectors: [["app-closing-scene"]],
      decls: 20,
      vars: 0,
      consts: [["id", "closing-container", 1, "container-fluid", "px-0"], [1, "row", "mx-0"], [1, "col-12", "px-0"], ["src", "../../assets/finals/closing-scene.png", 1, "img-fluid", "w-100"], [1, "row", "mx-0", "relative-row"], [1, "floating-buttons-selection"], ["id", "download-button", "href", "../../assets/demo.png", "download", "test", 1, "floating-effect"], ["src", "../../assets/buttons/drone.png", 1, "floating-button"], ["id", "email-button", "href", "mailto:some@email.com", "target", "_blank", 1, "vibrate-effect"], ["src", "../../assets/buttons/movil.png", 1, "floating-button"], ["id", "video-button", "data-toggle", "modal", "data-target", "#videoModal", 1, "sound-effect"], ["src", "../../assets/buttons/pantalla.png", 1, "floating-button"], ["src", "../../assets/finals/closing-scene-minigame.png", 1, "img-fluid", "w-100"], ["id", "videoModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "videoModalTitle", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-body"], [1, "embed-responsive", "embed-responsive-16by9"], ["src", "https://www.youtube.com/embed/x4X1sAy2sqs?controls=0", "frameborder", "0", "allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", 1, "embed-responsive-item"]],
      template: function ClosingSceneComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "iframe", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".modal-dialog[_ngcontent-%COMP%] {\r\n  max-width: 80%;\r\n}\r\n.modal-content[_ngcontent-%COMP%] {\r\n  background-color: black;\r\n  border-radius: 15px;\r\n}\r\n#videoModal[_ngcontent-%COMP%]{\r\n  background-color:rgba(0, 0, 0, 0.7);\r\n}\r\n.close-section-button[_ngcontent-%COMP%]{\r\n  margin: 30px;\r\n}\r\n.add-inferior-space[_ngcontent-%COMP%]{\r\n  margin-bottom: 40px;\r\n}\r\n.relative-row[_ngcontent-%COMP%]{\r\n  position: relative;\r\n}\r\n#download-button[_ngcontent-%COMP%]{\r\n  left: 17%;\r\n  top: 27%;\r\n  position: inherit;\r\n}\r\n#email-button[_ngcontent-%COMP%]{\r\n  left: 42%;\r\n  top: 68%;\r\n  position: inherit;\r\n}\r\n#video-button[_ngcontent-%COMP%]{\r\n  left: 39%;\r\n  top: 81%;\r\n  position: inherit;\r\n}\r\n.title-download[_ngcontent-%COMP%]{\r\n  margin-bottom: 40px;\r\n  margin-top: 80px;\r\n}\r\n.download-button[_ngcontent-%COMP%] {\r\n  border-radius: 4px;\r\n  background-color: #ea5d1a;\r\n  margin-right: 40px;\r\n  color: #ffffff;\r\n}\r\n.contact-button[_ngcontent-%COMP%] {\r\n  border-radius: 4px;\r\n  border: solid 1px #ea5d1a;\r\n  color: #ea5d1a;\r\n}\r\n.text-buttons[_ngcontent-%COMP%]{\r\n  padding: 12px 35px;\r\n  font-weight: bold;\r\n  font-stretch: normal;\r\n  font-style: normal;\r\n  line-height: normal;\r\n  letter-spacing: normal;\r\n  text-align: center;\r\n  font-size: 18px;\r\n  font-family: \"SeatBcn-Regular\";\r\n}\r\n.floating-buttons-selection[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 5;\r\n  background-color: transparent;\r\n}\r\n.floating-button[_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n\toverflow: hidden;\r\n  transition: all 0.2s ease-in-out;\r\n}\r\n.floating-button[_ngcontent-%COMP%]:hover{\r\n  transform: scale(1.1);\r\n}\r\n.image-button[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n.floating-effect[_ngcontent-%COMP%]{\r\n  transform: translatey(0px);\r\n  -webkit-animation: float 3s ease-in-out infinite;\r\n          animation: float 3s ease-in-out infinite;\r\n}\r\n@-webkit-keyframes float {\r\n\t0% {\r\n\t\ttransform: translatey(0px);\r\n\t}\r\n\t50% {\r\n\t\ttransform: translatey(-40px);\r\n\t}\r\n\t100% {\r\n\t\ttransform: translatey(0px);\r\n\t}\r\n}\r\n@keyframes float {\r\n\t0% {\r\n\t\ttransform: translatey(0px);\r\n\t}\r\n\t50% {\r\n\t\ttransform: translatey(-40px);\r\n\t}\r\n\t100% {\r\n\t\ttransform: translatey(0px);\r\n\t}\r\n}\r\n.vibrate-effect[_ngcontent-%COMP%]{\r\n  transform: translatex(0px);\r\n  -webkit-animation: vibrate 2s ease-in-out infinite;\r\n          animation: vibrate 2s ease-in-out infinite;\r\n}\r\n@-webkit-keyframes vibrate {\r\n\t0% {\r\n\t\ttransform: translatex(0px);\r\n\t}\r\n\t10% {\r\n\t\ttransform: translatex(5px);\r\n  }\r\n  20% {\r\n\t\ttransform: translatex(0px);\r\n\t}\r\n\t100% {\r\n\t\ttransform: translatex(0px);\r\n\t}\r\n}\r\n@keyframes vibrate {\r\n\t0% {\r\n\t\ttransform: translatex(0px);\r\n\t}\r\n\t10% {\r\n\t\ttransform: translatex(5px);\r\n  }\r\n  20% {\r\n\t\ttransform: translatex(0px);\r\n\t}\r\n\t100% {\r\n\t\ttransform: translatex(0px);\r\n\t}\r\n}\r\n.rotate-effect[_ngcontent-%COMP%]{\r\n  transform: rotate(0deg);\r\n  -webkit-animation: rotate 2s ease-in-out infinite;\r\n          animation: rotate 2s ease-in-out infinite;\r\n}\r\n@-webkit-keyframes rotate {\r\n\t0% {\r\n\t\ttransform: rotate(0deg);\r\n\t}\r\n\t25% {\r\n\t\ttransform: rotate(5deg);\r\n  }\r\n  50% {\r\n\t\ttransform: rotate(0deg);\r\n\t}\r\n\t75% {\r\n\t\ttransform: rotate(-5deg);\r\n  }\r\n  100% {\r\n\t\ttransform: rotate(0deg);\r\n\t}\r\n}\r\n@keyframes rotate {\r\n\t0% {\r\n\t\ttransform: rotate(0deg);\r\n\t}\r\n\t25% {\r\n\t\ttransform: rotate(5deg);\r\n  }\r\n  50% {\r\n\t\ttransform: rotate(0deg);\r\n\t}\r\n\t75% {\r\n\t\ttransform: rotate(-5deg);\r\n  }\r\n  100% {\r\n\t\ttransform: rotate(0deg);\r\n\t}\r\n}\r\n.sound-effect[_ngcontent-%COMP%]{\r\n  transform: scale(1);\r\n  -webkit-animation: sound 0.5s ease-in-out infinite;\r\n          animation: sound 0.5s ease-in-out infinite;\r\n}\r\n@-webkit-keyframes sound {\r\n\t0% {\r\n\t\ttransform: scale(1);\r\n\t}\r\n\t5% {\r\n\t\ttransform: scale(1.1);\r\n  }\r\n  10% {\r\n\t\ttransform: scale(1);\r\n\t}\r\n  100% {\r\n\t\ttransform: scale(1);\r\n\t}\r\n}\r\n@keyframes sound {\r\n\t0% {\r\n\t\ttransform: scale(1);\r\n\t}\r\n\t5% {\r\n\t\ttransform: scale(1.1);\r\n  }\r\n  10% {\r\n\t\ttransform: scale(1);\r\n\t}\r\n  100% {\r\n\t\ttransform: scale(1);\r\n\t}\r\n}\r\n.floating-effect[_ngcontent-%COMP%]:hover, .vibrate-effect[_ngcontent-%COMP%]:hover, .rotate-effect[_ngcontent-%COMP%]:hover, .sound-effect[_ngcontent-%COMP%]:hover{\r\n  -webkit-animation-play-state: paused;\r\n          animation-play-state: paused;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xvc2luZy1zY2VuZS9jbG9zaW5nLXNjZW5lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxtQ0FBbUM7QUFDckM7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFNBQVM7RUFDVCxRQUFRO0VBQ1IsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsUUFBUTtFQUNSLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsU0FBUztFQUNULFFBQVE7RUFDUixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsY0FBYztBQUNoQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFVBQVU7RUFDViw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLHNCQUFzQjtDQUN2QixnQkFBZ0I7RUFDZixnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0UsMEJBQTBCO0VBQzFCLGdEQUF3QztVQUF4Qyx3Q0FBd0M7QUFDMUM7QUFDQTtDQUNDO0VBQ0MsMEJBQTBCO0NBQzNCO0NBQ0E7RUFDQyw0QkFBNEI7Q0FDN0I7Q0FDQTtFQUNDLDBCQUEwQjtDQUMzQjtBQUNEO0FBVkE7Q0FDQztFQUNDLDBCQUEwQjtDQUMzQjtDQUNBO0VBQ0MsNEJBQTRCO0NBQzdCO0NBQ0E7RUFDQywwQkFBMEI7Q0FDM0I7QUFDRDtBQUNBO0VBQ0UsMEJBQTBCO0VBQzFCLGtEQUEwQztVQUExQywwQ0FBMEM7QUFDNUM7QUFDQTtDQUNDO0VBQ0MsMEJBQTBCO0NBQzNCO0NBQ0E7RUFDQywwQkFBMEI7RUFDMUI7RUFDQTtFQUNBLDBCQUEwQjtDQUMzQjtDQUNBO0VBQ0MsMEJBQTBCO0NBQzNCO0FBQ0Q7QUFiQTtDQUNDO0VBQ0MsMEJBQTBCO0NBQzNCO0NBQ0E7RUFDQywwQkFBMEI7RUFDMUI7RUFDQTtFQUNBLDBCQUEwQjtDQUMzQjtDQUNBO0VBQ0MsMEJBQTBCO0NBQzNCO0FBQ0Q7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixpREFBeUM7VUFBekMseUNBQXlDO0FBQzNDO0FBQ0E7Q0FDQztFQUNDLHVCQUF1QjtDQUN4QjtDQUNBO0VBQ0MsdUJBQXVCO0VBQ3ZCO0VBQ0E7RUFDQSx1QkFBdUI7Q0FDeEI7Q0FDQTtFQUNDLHdCQUF3QjtFQUN4QjtFQUNBO0VBQ0EsdUJBQXVCO0NBQ3hCO0FBQ0Q7QUFoQkE7Q0FDQztFQUNDLHVCQUF1QjtDQUN4QjtDQUNBO0VBQ0MsdUJBQXVCO0VBQ3ZCO0VBQ0E7RUFDQSx1QkFBdUI7Q0FDeEI7Q0FDQTtFQUNDLHdCQUF3QjtFQUN4QjtFQUNBO0VBQ0EsdUJBQXVCO0NBQ3hCO0FBQ0Q7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrREFBMEM7VUFBMUMsMENBQTBDO0FBQzVDO0FBQ0E7Q0FDQztFQUNDLG1CQUFtQjtDQUNwQjtDQUNBO0VBQ0MscUJBQXFCO0VBQ3JCO0VBQ0E7RUFDQSxtQkFBbUI7Q0FDcEI7RUFDQztFQUNBLG1CQUFtQjtDQUNwQjtBQUNEO0FBYkE7Q0FDQztFQUNDLG1CQUFtQjtDQUNwQjtDQUNBO0VBQ0MscUJBQXFCO0VBQ3JCO0VBQ0E7RUFDQSxtQkFBbUI7Q0FDcEI7RUFDQztFQUNBLG1CQUFtQjtDQUNwQjtBQUNEO0FBQ0E7Ozs7RUFJRSxvQ0FBNEI7VUFBNUIsNEJBQTRCO0FBQzlCIiwiZmlsZSI6InNyYy9hcHAvY2xvc2luZy1zY2VuZS9jbG9zaW5nLXNjZW5lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwtZGlhbG9nIHtcclxuICBtYXgtd2lkdGg6IDgwJTtcclxufVxyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG4jdmlkZW9Nb2RhbHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwgMCwgMCwgMC43KTtcclxufVxyXG4uY2xvc2Utc2VjdGlvbi1idXR0b257XHJcbiAgbWFyZ2luOiAzMHB4O1xyXG59XHJcbi5hZGQtaW5mZXJpb3Itc3BhY2V7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG4ucmVsYXRpdmUtcm93e1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4jZG93bmxvYWQtYnV0dG9ue1xyXG4gIGxlZnQ6IDE3JTtcclxuICB0b3A6IDI3JTtcclxuICBwb3NpdGlvbjogaW5oZXJpdDtcclxufVxyXG4jZW1haWwtYnV0dG9ue1xyXG4gIGxlZnQ6IDQyJTtcclxuICB0b3A6IDY4JTtcclxuICBwb3NpdGlvbjogaW5oZXJpdDtcclxufVxyXG4jdmlkZW8tYnV0dG9ue1xyXG4gIGxlZnQ6IDM5JTtcclxuICB0b3A6IDgxJTtcclxuICBwb3NpdGlvbjogaW5oZXJpdDtcclxufVxyXG4udGl0bGUtZG93bmxvYWR7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICBtYXJnaW4tdG9wOiA4MHB4O1xyXG59XHJcbi5kb3dubG9hZC1idXR0b24ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWE1ZDFhO1xyXG4gIG1hcmdpbi1yaWdodDogNDBweDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG4uY29udGFjdC1idXR0b24ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3JkZXI6IHNvbGlkIDFweCAjZWE1ZDFhO1xyXG4gIGNvbG9yOiAjZWE1ZDFhO1xyXG59XHJcbi50ZXh0LWJ1dHRvbnN7XHJcbiAgcGFkZGluZzogMTJweCAzNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LWZhbWlseTogXCJTZWF0QmNuLVJlZ3VsYXJcIjtcclxufVxyXG4uZmxvYXRpbmctYnV0dG9ucy1zZWxlY3Rpb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgei1pbmRleDogNTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG4uZmxvYXRpbmctYnV0dG9uIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLmZsb2F0aW5nLWJ1dHRvbjpob3ZlcntcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbn1cclxuLmltYWdlLWJ1dHRvbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcbi5mbG9hdGluZy1lZmZlY3R7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDBweCk7XHJcbiAgYW5pbWF0aW9uOiBmbG9hdCAzcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxufVxyXG5Aa2V5ZnJhbWVzIGZsb2F0IHtcclxuXHQwJSB7XHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMHB4KTtcclxuXHR9XHJcblx0NTAlIHtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRleSgtNDBweCk7XHJcblx0fVxyXG5cdDEwMCUge1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGV5KDBweCk7XHJcblx0fVxyXG59XHJcbi52aWJyYXRlLWVmZmVjdHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXgoMHB4KTtcclxuICBhbmltYXRpb246IHZpYnJhdGUgMnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbn1cclxuQGtleWZyYW1lcyB2aWJyYXRlIHtcclxuXHQwJSB7XHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZXgoMHB4KTtcclxuXHR9XHJcblx0MTAlIHtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRleCg1cHgpO1xyXG4gIH1cclxuICAyMCUge1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGV4KDBweCk7XHJcblx0fVxyXG5cdDEwMCUge1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGV4KDBweCk7XHJcblx0fVxyXG59XHJcblxyXG4ucm90YXRlLWVmZmVjdHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICBhbmltYXRpb246IHJvdGF0ZSAycyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxufVxyXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XHJcblx0MCUge1xyXG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcblx0fVxyXG5cdDI1JSB7XHJcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSg1ZGVnKTtcclxuICB9XHJcbiAgNTAlIHtcclxuXHRcdHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG5cdH1cclxuXHQ3NSUge1xyXG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuXHRcdHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG5cdH1cclxufVxyXG5cclxuLnNvdW5kLWVmZmVjdHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIGFuaW1hdGlvbjogc291bmQgMC41cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxufVxyXG5Aa2V5ZnJhbWVzIHNvdW5kIHtcclxuXHQwJSB7XHJcblx0XHR0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG5cdH1cclxuXHQ1JSB7XHJcblx0XHR0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgfVxyXG4gIDEwJSB7XHJcblx0XHR0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG5cdH1cclxuICAxMDAlIHtcclxuXHRcdHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcblx0fVxyXG59XHJcbi5mbG9hdGluZy1lZmZlY3Q6aG92ZXIsXHJcbi52aWJyYXRlLWVmZmVjdDpob3ZlcixcclxuLnJvdGF0ZS1lZmZlY3Q6aG92ZXIsXHJcbi5zb3VuZC1lZmZlY3Q6aG92ZXJ7XHJcbiAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHBhdXNlZDtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClosingSceneComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-closing-scene',
          templateUrl: './closing-scene.component.html',
          styleUrls: ['./closing-scene.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/first-scene/dragObject.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/first-scene/dragObject.component.ts ***!
    \*****************************************************/

  /*! exports provided: DragObject */

  /***/
  function srcAppFirstSceneDragObjectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DragObject", function () {
      return DragObject;
    });

    var DragObject =
    /*#__PURE__*/
    function () {
      function DragObject(x, y, w, h) {
        var _this = this;

        _classCallCheck(this, DragObject);

        this.contains = function (x, y) {
          return _this.x <= x && x <= _this.x + _this.width && _this.y <= y && y <= _this.y + _this.height;
        };

        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.dragging = false;
        this.dropped = false;
      }

      _createClass(DragObject, [{
        key: "getCoordinates",
        value: function getCoordinates() {
          return {
            x: this.x,
            y: this.y
          };
        }
      }, {
        key: "setCoordinates",
        value: function setCoordinates(x, y) {
          this.x = x;
          this.y = y;
        }
      }, {
        key: "getWidthAndHeight",
        value: function getWidthAndHeight() {
          return {
            width: this.width,
            height: this.height
          };
        }
      }, {
        key: "isDragging",
        value: function isDragging() {
          return this.dragging;
        }
      }, {
        key: "drag",
        value: function drag() {
          this.dragging = true;
        }
      }, {
        key: "stopDragging",
        value: function stopDragging() {
          this.dragging = false;
        }
      }, {
        key: "isDropped",
        value: function isDropped() {
          return this.dropped;
        }
      }, {
        key: "drop",
        value: function drop() {
          this.dropped = true;
        }
      }]);

      return DragObject;
    }();
    /***/

  },

  /***/
  "./src/app/first-scene/dropZone.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/first-scene/dropZone.component.ts ***!
    \***************************************************/

  /*! exports provided: DropZone */

  /***/
  function srcAppFirstSceneDropZoneComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DropZone", function () {
      return DropZone;
    });

    var DropZone =
    /*#__PURE__*/
    function () {
      function DropZone(x, y, w, h) {
        var _this2 = this;

        _classCallCheck(this, DropZone);

        this.contains = function (x, y) {
          return _this2.x <= x && x <= _this2.x + _this2.width && _this2.y <= y && y <= _this2.y + _this2.height;
        };

        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.full = false;
      }

      _createClass(DropZone, [{
        key: "getCoordinates",
        value: function getCoordinates() {
          return {
            x: this.x,
            y: this.y
          };
        }
      }, {
        key: "getWidthAndHeight",
        value: function getWidthAndHeight() {
          return {
            width: this.width,
            height: this.height
          };
        }
      }, {
        key: "isFull",
        value: function isFull() {
          return this.full;
        }
      }, {
        key: "fill",
        value: function fill() {
          this.full = true;
        }
      }, {
        key: "empty",
        value: function empty() {
          this.full = false;
        }
      }]);

      return DropZone;
    }();
    /***/

  },

  /***/
  "./src/app/first-scene/first-scene.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/first-scene/first-scene.component.ts ***!
    \******************************************************/

  /*! exports provided: FirstSceneComponent */

  /***/
  function srcAppFirstSceneFirstSceneComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FirstSceneComponent", function () {
      return FirstSceneComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _dropZone_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./dropZone.component */
    "./src/app/first-scene/dropZone.component.ts");
    /* harmony import */


    var _dragObject_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./dragObject.component */
    "./src/app/first-scene/dragObject.component.ts");

    var _c0 = ["canvas"];

    var FirstSceneComponent =
    /*#__PURE__*/
    function () {
      function FirstSceneComponent() {
        _classCallCheck(this, FirstSceneComponent);

        this.finishLoadSuitcase = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dropZones = [];
        this.dragObjects = [];
        this.isDragging = false;
        this.suitcases = [];
        this.counterSuitcase = 0;
      }

      _createClass(FirstSceneComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this3 = this;

          this.canvasEl = this.canvas.nativeElement;
          this.cx = this.canvasEl.getContext('2d');

          document.getElementById('imatge').onload = function () {
            var width = document.getElementById('canvas').offsetWidth;
            var height = document.getElementById('canvas').offsetHeight;
            height = document.getElementById('imatge').offsetHeight; // set the width and height

            _this3.canvasEl.width = width;
            _this3.canvasEl.height = height;
            var rect = new _dropZone_component__WEBPACK_IMPORTED_MODULE_1__["DropZone"](_this3.canvasEl.width / 2 + _this3.canvasEl.width / 4.31, _this3.canvasEl.height / 2 + _this3.canvasEl.height / 9.3, _this3.canvasEl.width / 21.9, _this3.canvasEl.height / 10);
            var rect1 = new _dropZone_component__WEBPACK_IMPORTED_MODULE_1__["DropZone"](_this3.canvasEl.width / 2 + _this3.canvasEl.width / 3.5, _this3.canvasEl.height / 2 + _this3.canvasEl.height / 9.3, _this3.canvasEl.width / 21.9, _this3.canvasEl.height / 10);
            var rect2 = new _dropZone_component__WEBPACK_IMPORTED_MODULE_1__["DropZone"](_this3.canvasEl.width / 2 + _this3.canvasEl.width / 4.31, _this3.canvasEl.height / 2 + _this3.canvasEl.height / 4.6, _this3.canvasEl.width / 21.9, _this3.canvasEl.height / 10);
            var rect3 = new _dropZone_component__WEBPACK_IMPORTED_MODULE_1__["DropZone"](_this3.canvasEl.width / 2 + _this3.canvasEl.width / 3.5, _this3.canvasEl.height / 2 + _this3.canvasEl.height / 4.6, _this3.canvasEl.width / 21.9, _this3.canvasEl.height / 10);

            _this3.dropZones.push(rect);

            _this3.dropZones.push(rect1);

            _this3.dropZones.push(rect2);

            _this3.dropZones.push(rect3);

            var drag1 = new _dragObject_component__WEBPACK_IMPORTED_MODULE_2__["DragObject"](_this3.canvasEl.width / 2.302, _this3.canvasEl.height / 3.01, _this3.canvasEl.width / 21.9, _this3.canvasEl.height / 10);
            var drag2 = new _dragObject_component__WEBPACK_IMPORTED_MODULE_2__["DragObject"](_this3.canvasEl.width / 2.302, _this3.canvasEl.height / 2.1, _this3.canvasEl.width / 21.9, _this3.canvasEl.height / 10);
            var drag3 = new _dragObject_component__WEBPACK_IMPORTED_MODULE_2__["DragObject"](_this3.canvasEl.width / 2.302, _this3.canvasEl.height / 2 + _this3.canvasEl.height / 8.3, _this3.canvasEl.width / 21.9, _this3.canvasEl.height / 10);
            var drag4 = new _dragObject_component__WEBPACK_IMPORTED_MODULE_2__["DragObject"](_this3.canvasEl.width / 2.302, _this3.canvasEl.height / 2 + _this3.canvasEl.height / 3.73, _this3.canvasEl.width / 21.9, _this3.canvasEl.height / 10);

            _this3.dragObjects.push(drag1);

            _this3.dragObjects.push(drag2);

            _this3.dragObjects.push(drag3);

            _this3.dragObjects.push(drag4);

            _this3.draw();
          };

          for (var i = 0; i < 4; i++) {
            this.suitcases[i] = new Image();
            this.suitcases[i].src = '../../assets/suitcases/maleta' + (i + 1).toString() + '.png'; // this.suitcases[i].onload = () => { console.log('loaded' + i); };
          } // get the context


          var cx = this.cx; // set some default properties about the line

          this.cx.lineWidth = 3;
          this.cx.lineCap = 'round';
          this.cx.strokeStyle = '#000'; // we'll implement this method to start capturing mouse events

          this.captureEvents(this.canvasEl);
        }
      }, {
        key: "draw",
        value: function draw() {
          this.cx.clearRect(0, 0, this.canvasEl.width, this.canvasEl.height);

          for (var i = 0; i < this.dropZones.length; i++) {
            this.cx.fillStyle = '#ffffff00'; //this.cx.fillStyle = '#ff0000';

            this.cx.fillRect(this.dropZones[i].getCoordinates().x, this.dropZones[i].getCoordinates().y, this.dropZones[i].getWidthAndHeight().width, this.dropZones[i].getWidthAndHeight().height);
          }

          var colors = ['#8ececf', '#b7d8aa', '#ffde4a', '#d1b8c7'];

          for (var _i = 0; _i < this.dragObjects.length; _i++) {
            if (this.suitcases != null && this.suitcases[_i] != null) {
              this.cx.drawImage(this.suitcases[_i], this.dragObjects[_i].getCoordinates().x, this.dragObjects[_i].getCoordinates().y, this.dragObjects[_i].getWidthAndHeight().width, this.dragObjects[_i].getWidthAndHeight().height);
            }
          }
        }
      }, {
        key: "captureEvents",
        value: function captureEvents(canvasEl) {
          // this will capture all mousedown events from the canvas element
          // listen for mouse events
          this.canvasEl.onmousedown = this.myDown.bind(this);
          this.canvasEl.onmouseup = this.myUp.bind(this);
          this.canvasEl.onmousemove = this.myMove.bind(this);
        }
      }, {
        key: "myDown",
        value: function myDown(e) {
          // incase the context is not set
          e.preventDefault();
          e.stopPropagation();

          if (!this.cx) {
            return;
          }

          var rect = this.canvasEl.getBoundingClientRect();
          var currentPos = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
          };
          this.isDragging = false;

          for (var i = 0; i < this.dragObjects.length; i++) {
            if (this.dragObjects[i].isDropped()) {
              continue;
            }

            if (this.dragObjects[i].contains(currentPos.x, currentPos.y)) {
              this.isDragging = true;
              this.dragObjects[i].drag();
            }
          }

          this.position = currentPos;
        }
      }, {
        key: "myUp",
        value: function myUp(e) {
          e.preventDefault();
          e.stopPropagation(); // clear all the dragging flags

          for (var i = 0; i < this.dropZones.length; i++) {
            if (this.dropZones[i].isFull()) {
              continue;
            }

            if (this.dropZones[i].contains(this.position.x, this.position.y)) {
              this.dropZones[i].fill();

              for (var j = 0; j < this.dragObjects.length; j++) {
                if (this.dragObjects[j].isDragging()) {
                  this.dragObjects[j].drop();
                  this.drop(this.dragObjects[j], this.dropZones[i]);
                  this.counterSuitcase++;

                  if (this.counterSuitcase >= 4) {
                    $('#imatge').attr('src', '../../assets/finals/first-scene-minigame_on.png');
                    this.finishLoadSuitcase.emit();
                  }
                }
              }
            }
          }

          this.isDragging = false;

          for (var _i2 = 0; _i2 < this.dragObjects.length; _i2++) {
            this.dragObjects[_i2].stopDragging();
          }
        }
      }, {
        key: "myMove",
        value: function myMove(e) {
          // if we're dragging anything...
          if (this.isDragging) {
            // tell the browser we're handling this mouse event
            e.preventDefault();
            e.stopPropagation(); // get the current mouse position

            var rect = this.canvasEl.getBoundingClientRect();
            var currentPos = {
              x: e.clientX - rect.left,
              y: e.clientY - rect.top
            }; // calculate the distance the mouse has moved
            // since the last mousemove

            var dx = currentPos.x - this.position.x;
            var dy = currentPos.y - this.position.y; // move each rect that isDragging
            // by the distance the mouse has moved
            // since the last mousemove

            for (var i = 0; i < this.dragObjects.length; i++) {
              var r = this.dragObjects[i];

              if (r.isDragging()) {
                r.setCoordinates(r.getCoordinates().x + dx, r.getCoordinates().y + dy);
              }
            } // redraw the scene with the new rect positions


            this.draw(); // reset the starting mouse position for the next mousemove

            this.position = currentPos;
          }
        }
      }, {
        key: "drop",
        value: function drop(draggedObject, dropZone) {
          // console.log(draggedObject.isDropped());
          draggedObject.setCoordinates(dropZone.getCoordinates().x, dropZone.getCoordinates().y);
          this.draw(); // this.animate(draggedObject, dropZone);
        }
      }, {
        key: "animate",
        value: function animate(draggedObject, dropZone) {
          if (!draggedObject.getCoordinates().x === dropZone.getCoordinates().x || !draggedObject.getCoordinates().y === dropZone.getCoordinates().y) {
            var mx = dropZone.getCoordinates().x - draggedObject.getCoordinates().x;
            var my = dropZone.getCoordinates().y - draggedObject.getCoordinates().y;
            console.log(mx, my);

            if (mx < 0 && my < 0) {
              draggedObject.setCoordinates(draggedObject.getCoordinates().x + mx / -mx, draggedObject.getCoordinates().y + my / -my);
            } else if (mx > 0 && my < 0) {
              draggedObject.setCoordinates(draggedObject.getCoordinates().x + mx / mx, draggedObject.getCoordinates().y + my / -my);
            } else if (mx < 0 && my > 0) {
              draggedObject.setCoordinates(draggedObject.getCoordinates().x + mx / -mx, draggedObject.getCoordinates().y + my / my);
            } else if (mx > 0 && my > 0) {
              draggedObject.setCoordinates(draggedObject.getCoordinates().x + mx / mx, draggedObject.getCoordinates().y + my / my);
            } else if (mx === 0 && my < 0) {
              draggedObject.setCoordinates(draggedObject.getCoordinates().x, draggedObject.getCoordinates().y + my / -my);
            } else if (mx === 0 && my > 0) {
              draggedObject.setCoordinates(draggedObject.getCoordinates().x, draggedObject.getCoordinates().y + my / my);
            } else if (mx < 0 && my === 0) {
              draggedObject.setCoordinates(draggedObject.getCoordinates().x + mx / -mx, draggedObject.getCoordinates().y);
            } else if (mx > 0 && my === 0) {
              draggedObject.setCoordinates(draggedObject.getCoordinates().x + mx / mx, draggedObject.getCoordinates().y);
            }

            this.draw();
            this.loop = requestAnimationFrame(this.animate.bind(this)(draggedObject, dropZone));
          } else {
            cancelAnimationFrame(this.loop);
          }
        }
      }]);

      return FirstSceneComponent;
    }();

    FirstSceneComponent.ɵfac = function FirstSceneComponent_Factory(t) {
      return new (t || FirstSceneComponent)();
    };

    FirstSceneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FirstSceneComponent,
      selectors: [["app-first-scene"]],
      viewQuery: function FirstSceneComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
        }
      },
      inputs: {
        width: "width",
        height: "height"
      },
      outputs: {
        finishLoadSuitcase: "finishLoadSuitcase"
      },
      decls: 10,
      vars: 0,
      consts: [["id", "first-scene-container", 1, "container-fluid", "px-0"], [1, "row", "mx-0"], [1, "col-12", "px-0"], ["src", "../../assets/finals/first-scene.png", 1, "img-fluid", "w-100"], ["id", "box"], ["src", "../../assets/finals/first-scene-minigame.png", "id", "imatge", 1, "img-fluid", "w-100"], ["id", "canvas"], ["canvas", ""]],
      template: function FirstSceneComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "canvas", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["#box[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  background-size: cover;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\ncanvas[_ngcontent-%COMP%] {\r\n  background: transparent;\r\n  width: inherit;\r\n  opacity: 1;\r\n  visibility: visible;\r\n  position: absolute;\r\n  left: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlyc3Qtc2NlbmUvZmlyc3Qtc2NlbmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsT0FBTztBQUNUIiwiZmlsZSI6InNyYy9hcHAvZmlyc3Qtc2NlbmUvZmlyc3Qtc2NlbmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNib3gge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuY2FudmFzIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB3aWR0aDogaW5oZXJpdDtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FirstSceneComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-first-scene',
          templateUrl: './first-scene.component.html',
          styleUrls: ['./first-scene.component.css']
        }]
      }], null, {
        canvas: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['canvas']
        }],
        width: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        height: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        finishLoadSuitcase: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var parallax_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! parallax-js */
    "./node_modules/parallax-js/dist/parallax.js");
    /* harmony import */


    var parallax_js__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(parallax_js__WEBPACK_IMPORTED_MODULE_1__);

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var scene = document.getElementById('scene');
          var parallaxInstance = new parallax_js__WEBPACK_IMPORTED_MODULE_1___default.a(scene, {
            relativeInput: true,
            hoverOnly: true,
            frictionY: 0.15,
            frictionX: 0.15,
            limitY: false,
            limitX: 0
          });
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 23,
      vars: 0,
      consts: [["id", "home-container", 1, "container-fluid", "px-0"], ["id", "scene"], ["data-depth", "0.10", 1, "parallax-layer"], [1, "background", "layer"], ["data-depth", "0.20", 1, "parallax-layer"], [1, "mountains-3", "layer"], ["data-depth", "0.30", 1, "parallax-layer"], [1, "mountains-2", "layer"], ["data-depth", "0.50", 1, "parallax-layer"], [1, "mountains-1", "layer"], ["data-depth", "0.85", 1, "parallax-layer"], [1, "car", "layer"], [1, "grass", "layer"], ["id", "text-home-layer", "data-depth", "0.0", 1, "parallax-layer"], [1, "title-parallax"], [1, "subtitle-parallax"], [1, "logo-parallax"], ["src", "../../assets/logos/black.svg", "width", "129", "height", "auto", "alt", "everis-logo", 1, "logo-home"], ["src", "../../assets/logos/seat.svg", "width", "auto", "height", "72", "alt", "seat-logo", 1, "logo-home"], ["src", "../../assets/logos/cupra.svg", "width", "auto", "height", "72", "alt", "seat-logo", 1, "logo-home"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h1", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Hello, driver!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Let's consolidate the journey to the next era together");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["#scene[_ngcontent-%COMP%]{\r\n  height: 960px;\r\n  background-color: white;\r\n}\r\n\r\n.parallax-layer[_ngcontent-%COMP%]{\r\n  height: 960px;\r\n  width: 100%;\r\n  align-items: center;\r\n}\r\n\r\n.layer[_ngcontent-%COMP%]{\r\n  background-repeat: no-repeat;\r\n  display: block;\r\n  height: 100%;\r\n  width: 100%;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.background[_ngcontent-%COMP%]{\r\n  background: url('PLANO6.png') no-repeat 50% 100%;\r\n  background-size: cover;\r\n  position: absolute;\r\n  width: 100%;\r\n  top: -5%;\r\n}\r\n\r\n.mountains-3[_ngcontent-%COMP%] {\r\n  background: url('PLANO5.png') no-repeat 50% 100%;\r\n  background-size: cover;\r\n  position: absolute;\r\n  width: 100%;\r\n}\r\n\r\n.mountains-2[_ngcontent-%COMP%] {\r\n  background: url('PLANO4.png') no-repeat 50% 100%;\r\n  background-size: cover;\r\n  position: absolute;\r\n  width: 100%;\r\n}\r\n\r\n.mountains-1[_ngcontent-%COMP%] {\r\n  background: url('PLANO3.png') no-repeat 50% 100%;\r\n  background-size: cover;\r\n  position: absolute;\r\n  width: 100%;\r\n}\r\n\r\n.car[_ngcontent-%COMP%] {\r\n  background: url('PLANO2.png') no-repeat 50% 100%;\r\n  background-size: cover;\r\n  position: absolute;\r\n  width: 100%;\r\n}\r\n\r\n.grass[_ngcontent-%COMP%] {\r\n  background: url('PLANO1.png') no-repeat 50% 100%;\r\n  background-size: cover;\r\n  position: absolute;\r\n  width: 100%;\r\n}\r\n\r\n.filter[_ngcontent-%COMP%] {\r\n  background: url('CAPA_FILTRO.png') no-repeat 50% 100%;\r\n  background-size: cover;\r\n  position: absolute;\r\n  width: 100%;\r\n}\r\n\r\n.title-parallax[_ngcontent-%COMP%]{\r\n  color: #0f0f0f;\r\n  text-align: center;\r\n  font-size: 68px;\r\n}\r\n\r\n.subtitle-parallax[_ngcontent-%COMP%]{\r\n  color: #0f0f0f;\r\n  text-align: center;\r\n  font-size: 37px;\r\n  margin: 40px 0px;\r\n}\r\n\r\n.logo-parallax[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  padding-top: 50px;\r\n}\r\n\r\n.logo-home[_ngcontent-%COMP%]{\r\n  margin: 0px 20px;\r\n}\r\n\r\n#text-home-layer[_ngcontent-%COMP%]{\r\n  top: 10%!important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsY0FBYztFQUNkLFlBQVk7RUFDWixXQUFXO0VBQ1gsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGdEQUFvRTtFQUNwRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxRQUFRO0FBQ1Y7O0FBQ0E7RUFDRSxnREFBb0U7RUFDcEUsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxnREFBb0U7RUFDcEUsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxnREFBb0U7RUFDcEUsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxnREFBb0U7RUFDcEUsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxnREFBb0U7RUFDcEUsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxxREFBeUU7RUFDekUsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc2NlbmV7XHJcbiAgaGVpZ2h0OiA5NjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnBhcmFsbGF4LWxheWVye1xyXG4gIGhlaWdodDogOTYwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmxheWVye1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uYmFja2dyb3VuZHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL3BhcmFsbGF4L1BMQU5PNi5wbmcpIG5vLXJlcGVhdCA1MCUgMTAwJTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICB0b3A6IC01JTtcclxufVxyXG4ubW91bnRhaW5zLTMge1xyXG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvcGFyYWxsYXgvUExBTk81LnBuZykgbm8tcmVwZWF0IDUwJSAxMDAlO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5tb3VudGFpbnMtMiB7XHJcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9wYXJhbGxheC9QTEFOTzQucG5nKSBuby1yZXBlYXQgNTAlIDEwMCU7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLm1vdW50YWlucy0xIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL3BhcmFsbGF4L1BMQU5PMy5wbmcpIG5vLXJlcGVhdCA1MCUgMTAwJTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uY2FyIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL3BhcmFsbGF4L1BMQU5PMi5wbmcpIG5vLXJlcGVhdCA1MCUgMTAwJTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uZ3Jhc3Mge1xyXG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvcGFyYWxsYXgvUExBTk8xLnBuZykgbm8tcmVwZWF0IDUwJSAxMDAlO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5maWx0ZXIge1xyXG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvcGFyYWxsYXgvQ0FQQV9GSUxUUk8ucG5nKSBuby1yZXBlYXQgNTAlIDEwMCU7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi50aXRsZS1wYXJhbGxheHtcclxuICBjb2xvcjogIzBmMGYwZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiA2OHB4O1xyXG59XHJcblxyXG4uc3VidGl0bGUtcGFyYWxsYXh7XHJcbiAgY29sb3I6ICMwZjBmMGY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMzdweDtcclxuICBtYXJnaW46IDQwcHggMHB4O1xyXG59XHJcblxyXG4ubG9nby1wYXJhbGxheHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDUwcHg7XHJcbn1cclxuXHJcbi5sb2dvLWhvbWV7XHJcbiAgbWFyZ2luOiAwcHggMjBweDtcclxufVxyXG5cclxuI3RleHQtaG9tZS1sYXllcntcclxuICB0b3A6IDEwJSFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/navbar/navbar.component.ts":
  /*!********************************************!*\
    !*** ./src/app/navbar/navbar.component.ts ***!
    \********************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NavbarComponent =
    /*#__PURE__*/
    function () {
      function NavbarComponent() {
        _classCallCheck(this, NavbarComponent);
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)();
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      decls: 4,
      vars: 0,
      consts: [[1, "navbar", "navbar-light", "justify-end"], ["src", "../../assets/logos/black.svg", "width", "106", "height", "auto", "alt", "everis-logo", 1, "navbar-logo"], ["src", "../../assets/logos/seat.svg", "width", "auto", "height", "52", "alt", "seat-logo", 1, "navbar-logo"], ["src", "../../assets/logos/cupra.svg", "width", "auto", "height", "52", "alt", "seat-logo", 1, "navbar-logo"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".logo[_ngcontent-%COMP%]{\r\n  margin: 0px 24px;\r\n}\r\n.justify-end[_ngcontent-%COMP%]{\r\n  justify-content: center;\r\n}\r\n.navbar-logo[_ngcontent-%COMP%]{\r\n  margin: 1.5rem 3rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dve1xyXG4gIG1hcmdpbjogMHB4IDI0cHg7XHJcbn1cclxuLmp1c3RpZnktZW5ke1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5uYXZiYXItbG9nb3tcclxuICBtYXJnaW46IDEuNXJlbSAzcmVtO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/second-scene/rectangle.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/second-scene/rectangle.component.ts ***!
    \*****************************************************/

  /*! exports provided: MyRect */

  /***/
  function srcAppSecondSceneRectangleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyRect", function () {
      return MyRect;
    });

    var MyRect = function MyRect(x, y, w, h) {
      var _this4 = this;

      _classCallCheck(this, MyRect);

      this.contains = function (x, y) {
        return _this4.x <= x && x <= _this4.x + _this4.width && _this4.y <= y && y <= _this4.y + _this4.height;
      };

      this.x = x;
      this.y = y;
      this.width = w;
      this.height = h;
    };
    /***/

  },

  /***/
  "./src/app/second-scene/second-scene.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/second-scene/second-scene.component.ts ***!
    \********************************************************/

  /*! exports provided: SecondSceneComponent */

  /***/
  function srcAppSecondSceneSecondSceneComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SecondSceneComponent", function () {
      return SecondSceneComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _rectangle_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./rectangle.component */
    "./src/app/second-scene/rectangle.component.ts");

    var _c0 = ["canvas"];

    var SecondSceneComponent =
    /*#__PURE__*/
    function () {
      function SecondSceneComponent() {
        _classCallCheck(this, SecondSceneComponent);

        this.discoverPath = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.currentFrame = 0;
        this.updateInterval = 100; // in ms

        this.deltaFrame = 5;
        this.showingSpeedometer = true;
      }

      _createClass(SecondSceneComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this5 = this;

          this.canvasEl = this.canvas.nativeElement;
          this.cx = this.canvasEl.getContext('2d');

          document.getElementById('imatge2').onload = function () {
            var width = document.getElementById('canvas').offsetWidth;
            var height = document.getElementById('canvas').offsetHeight;
            height = document.getElementById('imatge2').offsetHeight;
            _this5.canvasEl.width = width;
            _this5.canvasEl.height = height;
            var cx = _this5.cx; // set some default properties about the line

            _this5.cx.lineWidth = 3;
            _this5.cx.lineCap = 'round';
            _this5.cx.strokeStyle = '#000';
            var url = '../../assets/forest/borrable.png';
            var img = new Image();
            img.src = url;

            img.onload = function () {
              cx.drawImage(img, 0, 0, _this5.canvasEl.width, _this5.canvasEl.height);
            }; // we'll implement this method to start capturing mouse events


            _this5.captureEvents(_this5.canvasEl);
          };
        }
      }, {
        key: "captureEvents",
        value: function captureEvents(canvasEl) {
          var _this6 = this;

          // this will capture all mousedown events from the canvas element
          Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(canvasEl, 'mousedown').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (e) {
            // after a mouse down, we'll record all mouse moves
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(canvasEl, 'mousemove').pipe( // we'll stop (and unsubscribe) once the user releases the mouse
            // this will trigger a 'mouseup' event
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(canvasEl, 'mouseup')), // we'll also stop (and unsubscribe) once the mouse leaves the canvas (mouseleave event)
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(canvasEl, 'mouseleave')), // pairwise lets us get the previous value to draw a line from
            // the previous point to the current point
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pairwise"])());
          })).subscribe(function (res) {
            var rect = canvasEl.getBoundingClientRect(); // previous and current position with the offset

            var prevPos = {
              x: res[0].clientX - rect.left,
              y: res[0].clientY - rect.top
            };
            var currentPos = {
              x: res[1].clientX - rect.left,
              y: res[1].clientY - rect.top
            }; // this method we'll implement soon to do the actual drawing

            _this6.drawOnCanvas(prevPos, currentPos);
          });
        }
      }, {
        key: "drawOnCanvas",
        value: function drawOnCanvas(prevPos, currentPos) {
          var rect = new _rectangle_component__WEBPACK_IMPORTED_MODULE_3__["MyRect"](this.canvasEl.width / 2 + this.canvasEl.width / 9, this.canvasEl.height - 150, this.canvasEl.width / 9, 150); // incase the context is not set

          if (!this.cx) {
            return;
          }

          this.cx.globalCompositeOperation = 'destination-out'; // start our drawing path

          this.cx.beginPath(); // we're drawing lines so we need a previous position

          if (prevPos) {
            this.cx.arc(currentPos.x, currentPos.y, 10, 0, 2 * Math.PI);
            this.cx.fill();
            this.cx.lineWidth = 100;
            this.cx.beginPath();
            this.cx.moveTo(prevPos.x, prevPos.y);
            this.cx.lineTo(currentPos.x, currentPos.y);
            this.cx.stroke();

            if (rect.contains(currentPos.x, currentPos.y)) {
              this.discoverPath.emit();
              this.canvas.nativeElement.classList.add('slow-hide');
              $('#speedometer').addClass('slow-hide');
              this.showingSpeedometer = false;
            }
          }
        }
      }, {
        key: "mouseup",
        value: function mouseup() {
          var _this7 = this;

          if (this.timeoutHandler) {
            clearInterval(this.timeoutHandler);
            this.timeoutHandler = setInterval(function () {
              if (_this7.currentFrame - _this7.deltaFrame >= 0) {
                _this7.currentFrame = _this7.currentFrame - _this7.deltaFrame;
              }

              var newPath = '../../assets/speedometer/' + (Math.floor(_this7.currentFrame / 10) + 1) + '.png';
              $('#speedometer').attr('src', newPath);
            }, this.updateInterval);
          }
        }
      }, {
        key: "mousedown",
        value: function mousedown() {
          var _this8 = this;

          clearInterval(this.timeoutHandler);
          this.timeoutHandler = setInterval(function () {
            if (_this8.currentFrame + _this8.deltaFrame < 100) {
              _this8.currentFrame = _this8.currentFrame + _this8.deltaFrame;
            }

            var newPath = '../../assets/speedometer/' + (Math.floor(_this8.currentFrame / 10) + 1) + '.png';
            $('#speedometer').attr('src', newPath);
          }, this.updateInterval);
        }
      }, {
        key: "mousemove",
        value: function mousemove(e) {
          if (this.showingSpeedometer) {
            var x = e.clientX - this.canvasEl.getBoundingClientRect().left;
            var y = e.clientY - this.canvasEl.getBoundingClientRect().top;
            $('#speedometer').css({
              left: x + 30,
              top: y - 60
            });
          }
        }
      }]);

      return SecondSceneComponent;
    }();

    SecondSceneComponent.ɵfac = function SecondSceneComponent_Factory(t) {
      return new (t || SecondSceneComponent)();
    };

    SecondSceneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SecondSceneComponent,
      selectors: [["app-second-scene"]],
      viewQuery: function SecondSceneComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
        }
      },
      inputs: {
        width: "width",
        height: "height"
      },
      outputs: {
        discoverPath: "discoverPath"
      },
      decls: 10,
      vars: 0,
      consts: [["id", "second-scene-container", 1, "container-fluid", "px-0"], [1, "row", "mx-0"], [1, "col-12", "px-0"], ["src", "../../assets/finals/second-scene.png", 1, "img-fluid", "w-100"], ["id", "second-scene-minigame"], ["id", "box"], ["id", "speedometer", "src", "../../assets/speedometer/1.png"], ["src", "../../assets/forest/fondo.png", "id", "imatge2", 1, "img-fluid", "w-100"], ["id", "canvas", 3, "mousedown", "mouseup", "mousemove"], ["canvas", ""]],
      template: function SecondSceneComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "canvas", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function SecondSceneComponent_Template_canvas_mousedown_8_listener() {
            return ctx.mousedown();
          })("mouseup", function SecondSceneComponent_Template_canvas_mouseup_8_listener() {
            return ctx.mouseup();
          })("mousemove", function SecondSceneComponent_Template_canvas_mousemove_8_listener($event) {
            return ctx.mousemove($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["#box[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  background-size: cover;\r\n  width: 100%;\r\n  height: 100%;\r\n  position: relative;\r\n}\r\n\r\ncanvas[_ngcontent-%COMP%] {\r\n  background: transparent;\r\n  width: inherit;\r\n  opacity: 1;\r\n  visibility: visible;\r\n  position: absolute;\r\n  left: 0;\r\n}\r\n\r\ncanvas.slow-hide[_ngcontent-%COMP%], #speedometer.slow-hide[_ngcontent-%COMP%] {\r\n  opacity: 0;\r\n  transition: opacity 1s;\r\n}\r\n\r\n#speedometer[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  width: 100px;\r\n  height: 100px;\r\n  pointer-events: none;\r\n  z-index: 20;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Vjb25kLXNjZW5lL3NlY29uZC1zY2VuZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsT0FBTztBQUNUOztBQUVBO0VBQ0UsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9zZWNvbmQtc2NlbmUvc2Vjb25kLXNjZW5lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYm94IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5jYW52YXMge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIHdpZHRoOiBpbmhlcml0O1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxufVxyXG5cclxuY2FudmFzLnNsb3ctaGlkZSwgI3NwZWVkb21ldGVyLnNsb3ctaGlkZSB7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzO1xyXG59XHJcblxyXG4jc3BlZWRvbWV0ZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB6LWluZGV4OiAyMDtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SecondSceneComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-second-scene',
          templateUrl: './second-scene.component.html',
          styleUrls: ['./second-scene.component.css']
        }]
      }], null, {
        canvas: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['canvas']
        }],
        width: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        height: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        discoverPath: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/start-scene/start-scene.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/start-scene/start-scene.component.ts ***!
    \******************************************************/

  /*! exports provided: StartSceneComponent */

  /***/
  function srcAppStartSceneStartSceneComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StartSceneComponent", function () {
      return StartSceneComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var StartSceneComponent =
    /*#__PURE__*/
    function () {
      function StartSceneComponent() {
        _classCallCheck(this, StartSceneComponent);
      }

      _createClass(StartSceneComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return StartSceneComponent;
    }();

    StartSceneComponent.ɵfac = function StartSceneComponent_Factory(t) {
      return new (t || StartSceneComponent)();
    };

    StartSceneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StartSceneComponent,
      selectors: [["app-start-scene"]],
      decls: 4,
      vars: 0,
      consts: [["id", "start-scene-container", 1, "container-fluid", "px-0"], [1, "row", "mx-0"], [1, "col-12", "px-0"], ["src", "../../assets/finals/start-scene.png", 1, "img-fluid", "w-100"]],
      template: function StartSceneComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXJ0LXNjZW5lL3N0YXJ0LXNjZW5lLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StartSceneComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-start-scene',
          templateUrl: './start-scene.component.html',
          styleUrls: ['./start-scene.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/third-scene/third-scene.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/third-scene/third-scene.component.ts ***!
    \******************************************************/

  /*! exports provided: ThirdSceneComponent */

  /***/
  function srcAppThirdSceneThirdSceneComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ThirdSceneComponent", function () {
      return ThirdSceneComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ThirdSceneComponent =
    /*#__PURE__*/
    function () {
      function ThirdSceneComponent() {
        _classCallCheck(this, ThirdSceneComponent);

        this.flag = false;
        this.currentImage = 0;
      }

      _createClass(ThirdSceneComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "selectOption",
        value: function selectOption(option) {
          if (this.currentImage !== option) {
            var newPath = '../../assets/roads/camino' + option + '.png';
            var element = document.querySelector('.floating-img');

            if (!this.flag) {
              $('.floating-img').attr('src', newPath);
              element.classList.add('animate__fadeIn');
              this.flag = true;
            } else {
              element.classList.remove('animate__fadeIn');
              element.classList.add('animate__fadeOut');
              element.addEventListener('animationend', function () {
                $('.floating-img').attr('src', newPath);
                element.classList.remove('animate__fadeOut');
              });
            }

            this.currentImage = option;
          }
        }
      }, {
        key: "fadeIn",
        value: function fadeIn() {
          if (this.flag) {
            var element = document.querySelector('.floating-img');
            element.classList.add('animate__fadeIn');
          }
        }
      }]);

      return ThirdSceneComponent;
    }();

    ThirdSceneComponent.ɵfac = function ThirdSceneComponent_Factory(t) {
      return new (t || ThirdSceneComponent)();
    };

    ThirdSceneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ThirdSceneComponent,
      selectors: [["app-third-scene"]],
      decls: 34,
      vars: 0,
      consts: [["id", "third-scene-container", 1, "container-fluid", "px-0"], [1, "row", "mx-0"], [1, "col-12", "px-0"], ["src", "../../assets/finals/third-scene.png", 1, "img-fluid", "w-100"], ["id", "third-container-minigame", 1, "container-fluid", "px-0"], [1, "row", "mx-0", "relative-row"], [1, "floating-buttons-selection"], ["id", "button-road-1", "for", "rdo-1", 1, "btn-radio"], ["type", "radio", "id", "rdo-1", "name", "radio-grp", 3, "click"], ["width", "2rem", "height", "2rem", "viewBox", "0 0 20 20"], ["cx", "10", "cy", "10", "r", "9"], ["d", "M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z", 1, "inner"], ["d", "M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z", 1, "outer"], [1, "span-separation"], ["id", "button-road-2", "for", "rdo-2", 1, "btn-radio"], ["type", "radio", "id", "rdo-2", "name", "radio-grp", 3, "click"], ["id", "button-road-3", "for", "rdo-3", 1, "btn-radio"], ["type", "radio", "id", "rdo-3", "name", "radio-grp", 3, "click"], ["src", "../../assets/roads/general.png", 1, "img-fluid", "w-100"], ["src", "../../assets/roads/camino A.png", 1, "img-fluid", "w-100", "floating-img", "animate__animated", "animate__faster", 3, "load"]],
      template: function ThirdSceneComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ThirdSceneComponent_Template_input_click_8_listener() {
            return ctx.selectOption(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "svg", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "circle", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ThirdSceneComponent_Template_input_click_16_listener() {
            return ctx.selectOption(2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "svg", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "circle", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "path", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ThirdSceneComponent_Template_input_click_24_listener() {
            return ctx.selectOption(3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "svg", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "circle", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "path", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "path", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function ThirdSceneComponent_Template_img_load_33_listener() {
            return ctx.fadeIn();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".floating-img[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  float: left;\r\n  left: 0;\r\n  top: 0;\r\n  height: 100%;\r\n  opacity: 0%;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.floating-buttons-selection[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 5;\r\n  text-align: right;\r\n}\r\n\r\n\r\n.span-separation[_ngcontent-%COMP%]{\r\n  margin-left: 1rem;\r\n}\r\n\r\n\r\n.relative-row[_ngcontent-%COMP%]{\r\n  position: relative;\r\n}\r\n\r\n\r\n#button-road-1[_ngcontent-%COMP%]{\r\n  top: 10%;\r\n  right: 30%;\r\n  position: inherit;\r\n}\r\n\r\n\r\n#button-road-2[_ngcontent-%COMP%]{\r\n  top: 10%;\r\n  right: 20%;\r\n  position: inherit;\r\n}\r\n\r\n\r\n#button-road-3[_ngcontent-%COMP%]{\r\n  top: 10%;\r\n  right: 10%;\r\n  position: inherit;\r\n}\r\n\r\n\r\n.btn-radio[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n   -ms-user-select: none;\r\n       user-select: none;\r\n  font-size: 2rem;\r\n}\r\n\r\n\r\n.btn-radio[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n  fill: none;\r\n  vertical-align: middle;\r\n}\r\n\r\n\r\n.btn-radio[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\r\n  stroke-width: 2;\r\n  \r\n  stroke: black;\r\n}\r\n\r\n\r\n.btn-radio[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\r\n  \r\n  stroke: #eb71a3\r\n}\r\n\r\n\r\n.btn-radio[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path.inner[_ngcontent-%COMP%] {\r\n  stroke-width: 6;\r\n  stroke-dasharray: 19;\r\n  stroke-dashoffset: 19;\r\n}\r\n\r\n\r\n.btn-radio[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path.outer[_ngcontent-%COMP%] {\r\n  stroke-width: 2;\r\n  stroke-dasharray: 57;\r\n  stroke-dashoffset: 57;\r\n}\r\n\r\n\r\n.btn-radio[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n\r\n.btn-radio[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\r\n  transition: all 0.4s ease;\r\n}\r\n\r\n\r\n.btn-radio[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + svg[_ngcontent-%COMP%]   path.inner[_ngcontent-%COMP%] {\r\n  stroke-dashoffset: 38;\r\n  transition-delay: 0.3s;\r\n}\r\n\r\n\r\n.btn-radio[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + svg[_ngcontent-%COMP%]   path.outer[_ngcontent-%COMP%] {\r\n  stroke-dashoffset: 0;\r\n}\r\n\r\n\r\n.btn-radio[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhpcmQtc2NlbmUvdGhpcmQtc2NlbmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsT0FBTztFQUNQLE1BQU07RUFDTixZQUFZO0VBQ1osV0FBVztBQUNiOzs7QUFHQSx3Q0FBd0M7OztBQUN4QztFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFVBQVU7RUFDVixpQkFBaUI7QUFDbkI7OztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COzs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7O0FBRUE7RUFDRSxRQUFRO0VBQ1IsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7O0FBRUE7RUFDRSxRQUFRO0VBQ1IsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7O0FBRUE7RUFDRSxRQUFRO0VBQ1IsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7O0FBRUE7RUFDRSxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixzQkFBaUI7R0FBakIscUJBQWlCO09BQWpCLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOzs7QUFFQTtFQUNFLFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7OztBQUNBO0VBQ0UsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixhQUFhO0FBQ2Y7OztBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCO0FBQ0Y7OztBQUNBO0VBQ0UsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixxQkFBcUI7QUFDdkI7OztBQUNBO0VBQ0UsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixxQkFBcUI7QUFDdkI7OztBQUNBO0VBQ0UsYUFBYTtBQUNmOzs7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjs7O0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsc0JBQXNCO0FBQ3hCOzs7QUFDQTtFQUNFLG9CQUFvQjtBQUN0Qjs7O0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsc0JBQXNCO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvdGhpcmQtc2NlbmUvdGhpcmQtc2NlbmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbG9hdGluZy1pbWcge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBmbG9hdDogbGVmdDtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3BhY2l0eTogMCU7XHJcbn1cclxuXHJcblxyXG4vKmh0dHBzOi8vY29kZXBlbi5pby9hdnN0b3JtL3Blbi9Od3lRRVgqL1xyXG4uZmxvYXRpbmctYnV0dG9ucy1zZWxlY3Rpb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgei1pbmRleDogNTtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLnNwYW4tc2VwYXJhdGlvbntcclxuICBtYXJnaW4tbGVmdDogMXJlbTtcclxufVxyXG5cclxuLnJlbGF0aXZlLXJvd3tcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbiNidXR0b24tcm9hZC0xe1xyXG4gIHRvcDogMTAlO1xyXG4gIHJpZ2h0OiAzMCU7XHJcbiAgcG9zaXRpb246IGluaGVyaXQ7XHJcbn1cclxuXHJcbiNidXR0b24tcm9hZC0ye1xyXG4gIHRvcDogMTAlO1xyXG4gIHJpZ2h0OiAyMCU7XHJcbiAgcG9zaXRpb246IGluaGVyaXQ7XHJcbn1cclxuXHJcbiNidXR0b24tcm9hZC0ze1xyXG4gIHRvcDogMTAlO1xyXG4gIHJpZ2h0OiAxMCU7XHJcbiAgcG9zaXRpb246IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5idG4tcmFkaW8ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBmb250LXNpemU6IDJyZW07XHJcbn1cclxuXHJcbi5idG4tcmFkaW8gc3ZnIHtcclxuICBmaWxsOiBub25lO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuLmJ0bi1yYWRpbyBzdmcgY2lyY2xlIHtcclxuICBzdHJva2Utd2lkdGg6IDI7XHJcbiAgLyogc3Ryb2tlOiAjQzhDQ0Q0OyAqL1xyXG4gIHN0cm9rZTogYmxhY2s7XHJcbn1cclxuLmJ0bi1yYWRpbyBzdmcgcGF0aCB7XHJcbiAgLyogc3Ryb2tlOiAgI2VhNWQxYTsgKi9cclxuICBzdHJva2U6ICNlYjcxYTNcclxufVxyXG4uYnRuLXJhZGlvIHN2ZyBwYXRoLmlubmVyIHtcclxuICBzdHJva2Utd2lkdGg6IDY7XHJcbiAgc3Ryb2tlLWRhc2hhcnJheTogMTk7XHJcbiAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDE5O1xyXG59XHJcbi5idG4tcmFkaW8gc3ZnIHBhdGgub3V0ZXIge1xyXG4gIHN0cm9rZS13aWR0aDogMjtcclxuICBzdHJva2UtZGFzaGFycmF5OiA1NztcclxuICBzdHJva2UtZGFzaG9mZnNldDogNTc7XHJcbn1cclxuLmJ0bi1yYWRpbyBpbnB1dCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uYnRuLXJhZGlvIGlucHV0OmNoZWNrZWQgKyBzdmcgcGF0aCB7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxufVxyXG4uYnRuLXJhZGlvIGlucHV0OmNoZWNrZWQgKyBzdmcgcGF0aC5pbm5lciB7XHJcbiAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDM4O1xyXG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuM3M7XHJcbn1cclxuLmJ0bi1yYWRpbyBpbnB1dDpjaGVja2VkICsgc3ZnIHBhdGgub3V0ZXIge1xyXG4gIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xyXG59XHJcbi5idG4tcmFkaW8gc3BhbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThirdSceneComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-third-scene',
          templateUrl: './third-scene.component.html',
          styleUrls: ['./third-scene.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/video-wrapper/video-wrapper.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/video-wrapper/video-wrapper.component.ts ***!
    \**********************************************************/

  /*! exports provided: VideoWrapperComponent */

  /***/
  function srcAppVideoWrapperVideoWrapperComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VideoWrapperComponent", function () {
      return VideoWrapperComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var VideoWrapperComponent =
    /*#__PURE__*/
    function () {
      function VideoWrapperComponent() {
        _classCallCheck(this, VideoWrapperComponent);
      }

      _createClass(VideoWrapperComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return VideoWrapperComponent;
    }();

    VideoWrapperComponent.ɵfac = function VideoWrapperComponent_Factory(t) {
      return new (t || VideoWrapperComponent)();
    };

    VideoWrapperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: VideoWrapperComponent,
      selectors: [["app-video-wrapper"]],
      inputs: {
        youtubeUrl: "youtubeUrl"
      },
      decls: 2,
      vars: 0,
      consts: [[1, "embed-responsive", "embed-responsive-16by9", "full-video"], ["src", "https://www.youtube.com/embed/x4X1sAy2sqs?controls=0", "frameborder", "0", "allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", 1, "embed-responsive-item"]],
      template: function VideoWrapperComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "iframe", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".full-video[_ngcontent-%COMP%] {\r\n  height: 768px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW8td3JhcHBlci92aWRlby13cmFwcGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC92aWRlby13cmFwcGVyL3ZpZGVvLXdyYXBwZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLXZpZGVvIHtcclxuICBoZWlnaHQ6IDc2OHB4O1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoWrapperComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-video-wrapper',
          templateUrl: './video-wrapper.component.html',
          styleUrls: ['./video-wrapper.component.css']
        }]
      }], function () {
        return [];
      }, {
        youtubeUrl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Dev\rfp-seat\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map