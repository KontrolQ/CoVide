import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HelplineNumbersPage } from './helpline-numbers.page';

describe('HelplineNumbersPage', () => {
  let component: HelplineNumbersPage;
  let fixture: ComponentFixture<HelplineNumbersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelplineNumbersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HelplineNumbersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
