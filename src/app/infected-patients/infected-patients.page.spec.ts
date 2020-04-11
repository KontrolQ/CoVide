import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfectedPatientsPage } from './infected-patients.page';

describe('InfectedPatientsPage', () => {
  let component: InfectedPatientsPage;
  let fixture: ComponentFixture<InfectedPatientsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfectedPatientsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfectedPatientsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
