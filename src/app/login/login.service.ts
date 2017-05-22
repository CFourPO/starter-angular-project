import { Injectable } from '@angular/core';
import { FacebookService, InitParams, LoginResponse } from "ngx-facebook";
import { Router } from "@angular/router";
import { BaseLoaderService } from "../base/base-loader.service";
import { LoginComponent } from "./login.component";
import { HomeComponent } from "../home/home.component";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { AboutComponent } from "../about/about.component";

@Injectable()
export class LoginService {

    accessToken: string;
    userId: string;

    constructor(private fb: FacebookService, private loaderService: BaseLoaderService, private router: Router) {
        let initParams: InitParams = {
            appId: '1685638165064749',
            xfbml: true,
            version: 'v2.8'
        };

        fb.init(initParams);
    }

    login() {
        this.fb.login()
            .then((response: LoginResponse) => console.log('Logged in', response))
            .catch(e => console.error('Error logging in'));
    }

    logout() {
        this.fb.logout()
            .then(() => {
                console.log('Logged out');
                this.loaderService.loadBase({component: LoginComponent, data: {}});
            })
            .catch(e => console.error('Error logging out'));
    }

    isLoggedIn() {
        this.fb.getLoginStatus()
            .then((response: LoginResponse) => {
                switch(response.status) {
                    case 'connected':
                        this.loaderService.loadBase({component: HomeComponent, data: {}});
                        break;
                    case 'not_authorized':
                    case 'unknown':
                    default:
                        this.loaderService.loadBase({component: LoginComponent, data: {}});
                        break;
                }
            }).catch(e => console.error('Error getting login status'));
    }
}
