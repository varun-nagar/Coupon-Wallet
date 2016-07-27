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
            { headers: headers }).catch(this.handleErrors);
    }

    handleErrors(error: Response) {
    console.log(JSON.stringify(error));
    return Observable.throw(error);
  }

    signIn(user: User) {
        if (!user) {
            return;
        }
        console.log("signing in the user.");
    }
}