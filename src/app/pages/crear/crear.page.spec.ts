import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrearPage } from './crear.page';

describe('CrearPage', () => {
  let component: CrearPage;
  let fixture: ComponentFixture<CrearPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrearPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
