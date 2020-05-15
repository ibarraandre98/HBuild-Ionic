import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PersonasPage } from './personas.page';

describe('PersonasPage', () => {
  let component: PersonasPage;
  let fixture: ComponentFixture<PersonasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PersonasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
