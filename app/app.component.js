System.register(['angular2/core'], function(exports_1) {
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
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = "fuck off";
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: "my-app",
                        template: "<div id=\"topbar\">\n    <ul>\n        <li class=\"selected\">Basic Info\n            <div id=\"circle\" class=\"active\">\n                <h1>1</h1>\n            </div>\n        </li>\n        <li>Interested Activities\n            <div id=\"circle\">\n                <h1>2</h1>\n            </div>\n        </li>\n        <li>Passion and Needs\n            <div id=\"circle\">\n                <h1>3</h1>\n            </div>\n        </li>\n        <li>Summary\n            <div id=\"circle\" >\n                <h1>4</h1>\n            </div>\n        </li>\n        <hr>\n    </ul>\n</div>\n\n<div id=\"sidebar\">\n    <div id=\"logo\">\n        Tell Us Who\n    </div>\n    <ul>\n        <li class=\"selected\"><span>Background</span></li>\n        <li><span>School and Work</span></li>\n        <li><span>Meeting people</span></li>\n        <li><span>Sense of community</span></li>\n        <li><span>Wellbeing</span></li>\n    </ul>\n</div>\n\n<div id=\"main\">\n    <div >\n        <label for=\"DOB\"> Date of Birth:</label> <br>\n        <input id=\"DOB\" />\n\n    </div>\n</div>\n\n<button>Things</button>",
                        styleUrls: ['app/style.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map