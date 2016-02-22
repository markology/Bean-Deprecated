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
    var BackgroundInfoComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            BackgroundInfoComponent = (function () {
                function BackgroundInfoComponent() {
                    this.title = "fuck off";
                }
                BackgroundInfoComponent.prototype.ngOnInit = function () {
                    var classname = document.getElementsByClassName("mySelect");
                    for (var i = 0; i < classname.length; i++) {
                        var options = classname[i].childNodes;
                        for (var j = 0; j < options.length; j++)
                            options[j].addEventListener('click', function () {
                                this.parentElement.style.color = "#4A4A4A";
                            }, false);
                    }
                };
                BackgroundInfoComponent = __decorate([
                    core_1.Component({
                        selector: "background-info",
                        template: "\n<div class=\"barFix\">    \n\t<div id=\"main\">\n\t<div class=\"formBoxWrapper\">\n\t    <div  class=\"formBox flexTopLeft\">\n\t        <label for=\"DOB\"> What's your date of birth?</label> <br>\n\t        <input type=\"text\" id=\"DOB\" />\n\n\t    </div>\n\t    <div class=\"formBox flexTopRight\" >\n\t        <label for=\"DOB\"> What gender do you identify with?</label> <br>\n\t        <select class=\"mySelect\" id=\"gender\" >\n\t       \t\t<option disabled selected>MM/DD/YYY</option>\n\t        \t<option>Male</option>\n\t        \t<option>Female</option>\n\t        \t<option>Rather not say</option>\n\t        \t<option>Other</option>\n\t        </select>\n\n\t    </div>\n\t\t</div>\n\t\t<div class=\"formBoxWrapper\">\n\t    <div  class=\"formBox\">\n\t        <label for=\"DOB\"> What is your nationality?</label> <br>\n\t        <select class=\"mySelect\" id=\"gender\" >\n\t        \t<option>British</option>\n\t        \t<option>Brazilian</option>\n\t        \t<option>Bruneian</option>\n\t        \t<option>Bulgarian</option>\n\t        </select>\n\t    </div>\n\n\t    <div class=\"formBox\" >\n\t        <label for=\"DOB\"> What gender do you identify with?</label> <br>\n\t        <select class=\"mySelect\" id=\"gender\" >\n\t        \t<option>English</option>\n\t        \t<option>Espanol</option>\n\t        \t<option>Francois</option>\n\t        \t<option>Abaza</option>\n\t        </select>\n\t    </div>     \n\t</div>\t  \n\n\t\t<div class=\"formBoxWrapper\">\n\n\t    <div class=\"formBox\" >\n\t        <label for=\"DOB\"> What gender do you identify with?</label> <br>\n\t        <select class=\"mySelect\" id=\"gender\" >\n\t        \t<option>English</option>\n\t        \t<option>Espanol</option>\n\t        \t<option>Francois</option>\n\t        \t<option>Abaza</option>\n\t        </select>\n\t    </div>     \n\t</div>\t   \n\n\n\t\t\t<div class=\"formBoxWrapper\">\n\n\t    <div class=\"formBox\" >\n\t        <label for=\"DOB\"> What gender do you identify with?</label> <br>\n\t        <select class=\"mySelect\" id=\"gender\" >\n\t        \t<option>English</option>\n\t        \t<option>Espanol</option>\n\t        \t<option>Francois</option>\n\t        \t<option>Abaza</option>\n\t        </select>\n\t    </div>     \n\t</div>\t   \n\n\n\t\t<div class=\"formBoxWrapper \">\n\t    <div  class=\"formBox flexBottomLeft\">\n\t        <label for=\"DOB\"> What is your nationality?</label> <br>\n\t        <select class=\"mySelect\" id=\"gender\" >\n\t        \t<option>British</option>\n\t        \t<option>Brazilian</option>\n\t        \t<option>Bruneian</option>\n\t        \t<option>Bulgarian</option>\n\t        </select>\n\t    </div>\n\n\t    <div class=\"formBox flexBottomRight\" >\n\t        <label for=\"DOB\"> What gender do you identify with?</label> <br>\n\t        <select class=\"mySelect\" id=\"gender\" >\n\t        \t<option>English</option>\n\t        \t<option>Espanol</option>\n\t        \t<option>Francois</option>\n\t        \t<option>Abaza</option>\n\t        </select>\n\t    </div>     \n\t</div>\t   \n\n\n\n\t</div>\n</div>\n\n<button>Things</button>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], BackgroundInfoComponent);
                return BackgroundInfoComponent;
            }());
            exports_1("BackgroundInfoComponent", BackgroundInfoComponent);
        }
    }
});
//# sourceMappingURL=backgroundInfo.component.js.map