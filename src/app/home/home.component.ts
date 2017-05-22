/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, Input, OnInit } from "@angular/core";
import { IBase } from "../base/ibase";
import { LoginService } from "../login/login.service";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { AboutComponent } from "../about/about.component";
import { Router } from "@angular/router";

@Component({
    styleUrls: ['./home.component.scss'],
    templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
    @Input() data: any;
    constructor(private loginService: LoginService) {}

    ngOnInit() {
    }

    logout() {
        this.loginService.logout();
    }
}
