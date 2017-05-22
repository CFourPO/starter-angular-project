import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseLoaderService } from "./base/base-loader.service";
import { Base } from "./base/base";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { LoginService } from "./login/login.service";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements  OnInit, AfterViewInit {
    base: Base;

    constructor(private baseLoader: BaseLoaderService, private router: ActivatedRoute, private loginService: LoginService) {

    }

    ngOnInit() {
        this.loginService.isLoggedIn();
        this.base = {component: HomeComponent, data: {}};

        this.baseLoader.loadedBase.subscribe(data => {
            this.base = data;
        });
        this.baseLoader.loadBase(new Base(LoginComponent, {}));
    }

    //= new Base(LoginComponent, {});
    ngAfterViewInit(): void {
        this.router.params.subscribe(data => {
            console.log(data);
        })
    }



}
