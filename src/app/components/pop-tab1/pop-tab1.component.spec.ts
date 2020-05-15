import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopTab1Component } from './pop-tab1.component';

describe('PopTab1Component', () => {
  let component: PopTab1Component;
  let fixture: ComponentFixture<PopTab1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopTab1Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PopTab1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
