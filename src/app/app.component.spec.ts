/* tslint:disable:no-unused-variable */

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ClarityModule } from "clarity-angular";
import { ROUTING } from "./app.routing";
import { APP_BASE_HREF } from "@angular/common";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LoginComponent } from "./login/login.component";
import { Base } from "./base/base";
import { BaseLoaderService } from "./base/base-loader.service";
import { BaseDirective } from "./base/base.directive";

describe('AppComponent', () => {

    let fixture: ComponentFixture<any>;
    let compiled: any;
    let component: AppComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                AboutComponent,
                HomeComponent,
                DashboardComponent,
                BaseDirective
            ],
            imports: [
                ClarityModule.forRoot(),
                BaseDirective,

                ROUTING
            ],
            providers: [{provide: APP_BASE_HREF, useValue: '/'}, BaseLoaderService]
        });

        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        compiled = fixture.nativeElement;


    });

    beforeEach(() => {
        component = fixture.componentInstance;
        component.base = new Base(LoginComponent, {});
        fixture.detectChanges();
    });

    afterEach(() => {
        fixture.destroy();
    });

    it('should create the app', async(() => {
        expect(compiled).toBeTruthy();
    }));


});
