import {Type} from "@angular/core";

/**
 * An Interface for dynamically loaded components
 */
export class Base {
    constructor(public component: Type<any>, public data: any) { }
}
