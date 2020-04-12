import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TipsToSafePage } from './tips-to-safe.page';

describe('TipsToSafePage', () => {
  let component: TipsToSafePage;
  let fixture: ComponentFixture<TipsToSafePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipsToSafePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TipsToSafePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
