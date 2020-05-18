import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopChatsUnoReportarComponent } from './pop-chats-uno-reportar.component';

describe('PopChatsUnoReportarComponent', () => {
  let component: PopChatsUnoReportarComponent;
  let fixture: ComponentFixture<PopChatsUnoReportarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopChatsUnoReportarComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PopChatsUnoReportarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
