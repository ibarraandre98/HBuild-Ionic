import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopChatsUnoComponent } from './pop-chats-uno.component';

describe('PopChatsUnoComponent', () => {
  let component: PopChatsUnoComponent;
  let fixture: ComponentFixture<PopChatsUnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopChatsUnoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PopChatsUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
