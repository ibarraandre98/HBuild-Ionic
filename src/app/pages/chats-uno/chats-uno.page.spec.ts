import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChatsUnoPage } from './chats-uno.page';

describe('ChatsUnoPage', () => {
  let component: ChatsUnoPage;
  let fixture: ComponentFixture<ChatsUnoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatsUnoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChatsUnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
