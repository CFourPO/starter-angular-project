import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from 'clarity-angular';
import { AppComponent } from './app.component';
import { ROUTING } from "./app.routing";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { LoginComponent } from './login/login.component';
import { BaseComponent } from './base/base.component';
import { BaseDirective } from './base/base.directive';
import { BaseLoaderService } from "./base/base-loader.service";
import { DashboardComponent } from './dashboard/dashboard.component';
import { FacebookModule, FacebookService } from "ngx-facebook";
import { LoginService } from "./login/login.service";

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        HomeComponent,
        LoginComponent,
        BaseComponent,
        BaseDirective,
        DashboardComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        FacebookModule.forRoot(),
        ClarityModule.forRoot(),
        ROUTING
    ],
    providers: [BaseLoaderService, FacebookService, LoginService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [AppComponent],
    entryComponents: [ LoginComponent, HomeComponent, DashboardComponent, AboutComponent]
})
export class AppModule {
}
