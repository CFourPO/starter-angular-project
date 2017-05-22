import { Component, OnInit, Input, EventEmitter, Output, DoCheck } from '@angular/core';
import { BaseLoaderService } from "../base/base-loader.service";
import { HomeComponent } from "../home/home.component";
import { Base } from "../base/base";
import { IBase } from "../base/ibase";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit  {

  //@Input() data: any;

  constructor(private baseLoader: BaseLoaderService) { }

  ngOnInit() {
  }

  submitLogin() {
    this.baseLoader.loadBase(new Base(HomeComponent, {}));

    //this.submitted.emit(null);
  }
}
