import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LivetreamPage } from './livetream.page';

describe('LivetreamPage', () => {
  let component: LivetreamPage;
  let fixture: ComponentFixture<LivetreamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivetreamPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LivetreamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
