import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SymptomsPage } from './symptoms.page';

describe('SymptomsPage', () => {
  let component: SymptomsPage;
  let fixture: ComponentFixture<SymptomsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymptomsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SymptomsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
