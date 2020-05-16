import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetallerPage } from './detaller.page';

describe('DetallerPage', () => {
  let component: DetallerPage;
  let fixture: ComponentFixture<DetallerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetallerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
