"use strict";
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var color_1 = require("color");
var user_service_1 = require("../../shared/user/user.service");
var user_1 = require("../../shared/user/user");
var LoginComponent = (function () {
    function LoginComponent(_page, _userService) {
        this._page = _page;
        this._userService = _userService;
        this.isTabbed = true;
        this.user = new user_1.User();
    }
    LoginComponent.prototype.signIn = function () {
        if (this.user.validateUser()) {
            this._userService.signIn(this.user);
        }
        else {
            alert("please provide valid details.");
        }
    };
    LoginComponent.prototype.toggelTab = function (btn) {
        this.newUser = new user_1.User();
        this.isTabbed = (btn === 0) ? true : false;
        var container = this.container.nativeElement;
        container.animate({
            backgroundColor: this.isTabbed ? new color_1.Color("#996666") : new color_1.Color("#854747"),
            duration: 200
        });
    };
    LoginComponent.prototype.submitUserInfo = function () {
        if (this.newUser.validateUser()) {
            this._userService.register(this.newUser).subscribe(function () {
                alert("Your account was successfully created.");
                // this.toggleDisplay();
            }, function () { return alert("Unfortunately we were unable to create your account."); });
        }
        else {
            alert("please provide valid details.");
        }
    };
    //  .subscribe(
    //       () => {
    //         alert("Your account was successfully created.");
    //         this.toggleDisplay();
    //       },
    //       () => alert("Unfortunately we were unable to create your account.")
    //     );
    LoginComponent.prototype.ngOnInit = function () {
        this._page.actionBarHidden = true;
        this._page.backgroundColor = new color_1.Color("#996666");
        //   this._page.backgroundImage = this._page.ios ? "res://bg_login.jpg" : "res://bg_login";
    };
    __decorate([
        core_1.ViewChild("container"), 
        __metadata('design:type', core_1.ElementRef)
    ], LoginComponent.prototype, "container", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            selector: "login",
            providers: [user_service_1.UserService],
            templateUrl: "./components/login/login.html",
            styleUrls: ["./components/login/login.css"]
        }), 
        __metadata('design:paramtypes', [page_1.Page, user_service_1.UserService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map