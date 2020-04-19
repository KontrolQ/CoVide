import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EulaModalPage } from './eula-modal.page';

describe('EulaModalPage', () => {
  let component: EulaModalPage;
  let fixture: ComponentFixture<EulaModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EulaModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EulaModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
