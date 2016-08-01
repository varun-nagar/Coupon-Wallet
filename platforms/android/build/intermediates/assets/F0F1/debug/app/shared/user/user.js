"use strict";
var validator = require("email-validator");
var User = (function () {
    function User() {
    }
    User.prototype.validateUser = function (processType) {
        var phoneRegex = /^[0-9]{10}$/;
        if (!validator.validate(this.email)) {
            return false;
        }
        else if (!this.password) {
            return false;
        }
        else if (processType && processType === "signUp" && (!phoneRegex.test(this.phone) || !this.name)) {
            return false;
        }
        else {
            return true;
        }
    };
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map