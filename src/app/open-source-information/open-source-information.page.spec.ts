import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OpenSourceInformationPage } from './open-source-information.page';

describe('OpenSourceInformationPage', () => {
  let component: OpenSourceInformationPage;
  let fixture: ComponentFixture<OpenSourceInformationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenSourceInformationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OpenSourceInformationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
