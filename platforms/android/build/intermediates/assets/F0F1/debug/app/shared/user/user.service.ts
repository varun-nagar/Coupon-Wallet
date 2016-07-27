import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import {Observable} from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

import {User} from "./user";
import {Config} from "../config";

@Injectable()
export class UserService {

    constructor(private _http: Http) {

    }

    register(user: User) {
        if (!user) {
            return;
        }

        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        return this._http.post(
            Config.apiUrl + "registerUser",
            JSON.stringify(user),
            { headers: headers }).subscribe(function (response: any) {
                console.log("About to register: " + user.email);
                console.log("with details: " + user.email + user.password + user.phone);
                return JSON.stringify(response.message);
            }, function (error: any) {
                console.log("error occured in registering user.");
                return JSON.stringify(error.message);
            });
    }

    handleErrors(error: Response) {
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
  }

    signIn(user: User) {
        if (!user) {
            return;
        }
        console.log("signing in the user.");
    }
}