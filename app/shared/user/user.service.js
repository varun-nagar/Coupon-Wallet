"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var config_1 = require("../config");
var UserService = (function () {
    function UserService(_http) {
        this._http = _http;
    }
    UserService.prototype.register = function (user) {
        if (!user) {
            return;
        }
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        return this._http.post(config_1.Config.apiUrl + "registerUser", JSON.stringify(user), { headers: headers }).catch(this.handleErrors);
    };
    UserService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error));
        return Rx_1.Observable.throw(error);
    };
    UserService.prototype.signIn = function (user) {
        if (!user) {
            return;
        }
        console.log("signing in the user.");
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map