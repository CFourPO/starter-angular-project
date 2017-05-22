import { Component, OnInit, Input, EventEmitter, Output, DoCheck } from '@angular/core';
import { BaseLoaderService } from "../base/base-loader.service";
import { HomeComponent } from "../home/home.component";
import { Base } from "../base/base";
import { IBase } from "../base/ibase";
import { Router } from "@angular/router";
import { AboutComponent } from "../about/about.component";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { LoginService } from "./login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit  {

  //@Input() data: any;

  constructor(private baseLoader: BaseLoaderService, private router: Router, private loginService: LoginService) { }

  ngOnInit() {
  }

  submitLogin() {
    this.loginService.login();
    this.loginService.isLoggedIn();
    this.baseLoader.loadBase(new Base(HomeComponent, {}));
    //this.submitted.emit(null);
  }
}
