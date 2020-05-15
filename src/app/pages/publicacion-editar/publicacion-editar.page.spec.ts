import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PublicacionEditarPage } from './publicacion-editar.page';

describe('PublicacionEditarPage', () => {
  let component: PublicacionEditarPage;
  let fixture: ComponentFixture<PublicacionEditarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicacionEditarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PublicacionEditarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
