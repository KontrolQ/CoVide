import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StateDataComponent } from './state-data.component';

describe('StateDataComponent', () => {
  let component: StateDataComponent;
  let fixture: ComponentFixture<StateDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateDataComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StateDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
