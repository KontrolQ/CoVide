import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SeekHelpResultModalPage } from './seek-help-result-modal.page';

describe('SeekHelpResultModalPage', () => {
  let component: SeekHelpResultModalPage;
  let fixture: ComponentFixture<SeekHelpResultModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeekHelpResultModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SeekHelpResultModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
