import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TravelHistoryPage } from './travel-history.page';

describe('TravelHistoryPage', () => {
  let component: TravelHistoryPage;
  let fixture: ComponentFixture<TravelHistoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelHistoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TravelHistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
