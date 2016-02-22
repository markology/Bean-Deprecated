System.register(['angular2/core', 'angular2/router', './backgroundInfo.component.js'], function(exports_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, backgroundInfo_component_js_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (backgroundInfo_component_js_1_1) {
                backgroundInfo_component_js_1 = backgroundInfo_component_js_1_1;
            }],
        execute: function() {
            // < a[routerLink]="['BackgroundInfo']" > Dashboard < /a>
            AppComponent = (function () {
                function AppComponent() {
                    this.title = "fuck off";
                }
                AppComponent.prototype.ngOnInit = function () {
                    document.getElementById("overlayButton").addEventListener('click', function () {
                        document.getElementById('overlay').style.display = "none";
                    });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: "my-app",
                        template: "<div id=\"topbar\">\n    <ul>\n        <li class=\"selected\">Basic Info\n            <div id=\"circle\" class=\"active\">\n                <h1>1</h1>\n            </div>\n        </li>\n        <li>Interested Activities\n            <div id=\"circle\">\n                <h1>2</h1>\n            </div>\n        </li>\n        <li>Passion and Needs\n            <div id=\"circle\">\n                <h1>3</h1>\n            </div>\n        </li>\n        <li>Summary\n            <div id=\"circle\" >\n                <h1>4</h1>\n            </div>\n        </li>\n        <hr>\n    </ul>\n</div>\n\n<div id=\"sidebar\">\n    <div id=\"logo\">\n        Tell Us Who\n    </div>\n    <ul>\n        <li class=\"selected\"><span>Background</span></li>\n        <li><span>School and Work</span></li>\n        <li><span>Meeting people</span></li>\n        <li><span>Sense of community</span></li>\n        <li><span>Wellbeing</span></li>\n    </ul>\n</div>\n<span id=\"overlay\"><h2>Great, let's get started! First we need to know some of the basics.</h2><span id=\"overlayButton\">Ok got it</span></span>\n<router-outlet></router-outlet>\n",
                        styleUrls: ['app/style.css'],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [router_1.ROUTER_PROVIDERS],
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/',
                            name: 'BackgroundInfo',
                            component: backgroundInfo_component_js_1.BackgroundInfoComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map