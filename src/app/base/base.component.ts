import {
    Component, OnInit, ViewChild, Input, ComponentFactoryResolver, SimpleChanges, OnChanges,
    AfterViewInit, Output, EventEmitter, DoCheck
} from '@angular/core';
import { BaseDirective } from "./base.directive";
import { Base } from "./base";
import { IBase } from "./ibase";
import { BaseLoaderService } from "./base-loader.service";
import { LoginComponent } from "../login/login.component";

@Component({
    selector: 'app-base',
    templateUrl: './base.component.html',
    styleUrls: ['./base.component.scss']
})
export class BaseComponent implements  AfterViewInit, OnChanges {

    @Input() base: Base;
    @ViewChild(BaseDirective) baseHost: BaseDirective;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

    ngAfterViewInit() {
        this.loadComponent();
    }

    ngOnChanges(changes: SimpleChanges) {
        // let newBootItem = changes['base'].currentValue;
        this.loadComponent();
    }

    ngOnInit() {
        //this.baseLoader.loadedBase.subscribe(data => {
        //    this.base = data;
        //})
    }

    loadComponent() {
        let myBase: Base = this.base;
        console.log("Im in loadComponent: ", myBase);
        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(myBase.component);
        let viewContainerRef = this.baseHost.viewContainerRef;
        viewContainerRef.clear();

        let componentRef = viewContainerRef.createComponent(componentFactory);
        (<IBase>componentRef.instance).data = myBase.data;
    }

}
