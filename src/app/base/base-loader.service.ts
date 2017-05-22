import { Injectable } from '@angular/core';
import { Base } from "./base";
import { BehaviorSubject, Observable } from "rxjs";
import { LoginComponent } from "../login/login.component";

@Injectable()
export class BaseLoaderService {

  private _loadedBase: BehaviorSubject<Base> = new BehaviorSubject<Base>(null);
  public loadedBase: Observable<Base> = this._loadedBase.asObservable();

  loadBase(base: Base) {
    this._loadedBase.next(base);
  }

}
