import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseLoaderService } from "./base/base-loader.service";
import { Base } from "./base/base";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements  OnInit {

    base: Base;
    //= new Base(LoginComponent, {});

    constructor(private baseLoader: BaseLoaderService) {

    }

    ngOnInit() {
        this.baseLoader.loadedBase.subscribe(data => {
            this.base = data;
        });
        this.baseLoader.loadBase(new Base(LoginComponent, {}));
    }

}
