import {Component, ElementRef, ViewChild} from "@angular/core";
import {Page} from "ui/page";
import {View} from "ui/core/view";
import {Color} from "color";
import {UserService} from "../../shared/user/user.service";
import {User} from "../../shared/user/user";

@Component({
    selector: "login",
    providers: [UserService],
    templateUrl: "./components/login/login.html",
    styleUrls: ["./components/login/login.css"]
})

export class LoginComponent {
    public isTabbed: boolean;
    public newUser: User;
    public user: User;

    @ViewChild("container") container: ElementRef;
    constructor(private _page: Page, private _userService: UserService) {
        this.isTabbed = true;
        this.user = new User();
    }

    signIn() {
        if (this.user.validateUser()) {
            this._userService.signIn(this.user);
        } else {
            alert("please provide valid details.");
        }
    }

    toggelTab(btn: any) {
        this.newUser = new User();
        this.isTabbed = (btn === 0) ? true : false;
        let container = <View>this.container.nativeElement;
        container.animate({
            backgroundColor: this.isTabbed ? new Color("#996666") : new Color("#854747"),
            duration: 200
        });
    }

    submitUserInfo() {
        if (this.newUser.validateUser()) {
            this._userService.register(this.newUser).subscribe(
                () => {
                    alert("Your account was successfully created.");
                    // this.toggleDisplay();
                },
                () => alert("Unfortunately we were unable to create your account.")
                );
        } else {
            alert("please provide valid details.");
        }
    }

    //  .subscribe(
    //       () => {
    //         alert("Your account was successfully created.");
    //         this.toggleDisplay();
    //       },
    //       () => alert("Unfortunately we were unable to create your account.")
    //     );

    ngOnInit() {
        this._page.actionBarHidden = true;
        this._page.backgroundColor = new Color("#996666");
        //   this._page.backgroundImage = this._page.ios ? "res://bg_login.jpg" : "res://bg_login";
    }
}
