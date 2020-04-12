import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DistrictWisePage } from './district-wise.page';

describe('DistrictWisePage', () => {
  let component: DistrictWisePage;
  let fixture: ComponentFixture<DistrictWisePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistrictWisePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DistrictWisePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
