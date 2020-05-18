import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CuentaCorreoPage } from './cuenta-correo.page';

describe('CuentaCorreoPage', () => {
  let component: CuentaCorreoPage;
  let fixture: ComponentFixture<CuentaCorreoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuentaCorreoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CuentaCorreoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
