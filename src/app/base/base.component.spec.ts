import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseComponent } from './base.component';
import { BaseLoaderService } from "./base-loader.service";

describe('BaseComponent', () => {
  let component: BaseComponent;
  let fixture: ComponentFixture<BaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseComponent ],
      providers: [BaseLoaderService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
