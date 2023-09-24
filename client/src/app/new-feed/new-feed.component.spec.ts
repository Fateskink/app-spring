import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFeedComponent } from './new-feed.component';

describe('NewFeedComponent', () => {
  let component: NewFeedComponent;
  let fixture: ComponentFixture<NewFeedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewFeedComponent]
    });
    fixture = TestBed.createComponent(NewFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
