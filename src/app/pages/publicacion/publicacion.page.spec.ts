import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PublicacionPage } from './publicacion.page';

describe('PublicacionPage', () => {
  let component: PublicacionPage;
  let fixture: ComponentFixture<PublicacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicacionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PublicacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
