
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaDashboardComponent } from './agenda-dashboard.component';

describe('AgendaDashboardComponent', () => {
  let component: AgendaDashboardComponent;
  let fixture: ComponentFixture<AgendaDashboardComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendaDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgendaDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
