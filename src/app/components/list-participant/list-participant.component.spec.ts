import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListParticipantComponent } from './list-participant.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { UserService } from '@app/services/user.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import MOCK_USERS from '@app/fixtures/users.json';

// Mock UserService
class MockUserService {
  getList() {
    // Mocking some user data
    return of(MOCK_USERS);
  }
}

describe('ListParticipantComponent', () => {
  let component: ListParticipantComponent;
  let fixture: ComponentFixture<ListParticipantComponent>;
  let userService: UserService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListParticipantComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: UserService, useClass: MockUserService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ListParticipantComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with participants list', () => {
    // After initialization, check if the participants list is populated correctly
    expect(component.participants.length).toBe(7);
    expect(component.participants[0].name).toBe(MOCK_USERS[3].name);
  });

  it('should open and close participant detail', () => {
    // Select a user and check if detail is opened
    component.handleSelectUser(1);
    expect(component.selectedParticipant).toBe(1);
    expect(component.isDetailParticipantOpen).toBe(true);

    // Close the detail and check if the state is reset
    component.handleCloseDetail();
    expect(component.selectedParticipant).toBeUndefined();
    expect(component.isDetailParticipantOpen).toBe(false);
  });

  it('should render participant list', () => {
    fixture.detectChanges(); // Ensure the component is fully initialized

    const participantElements = fixture.debugElement.queryAll(
      By.css('.participant')
    );
    expect(participantElements.length).toBe(7); // Based on mocked data, should be only one

    const firstParticipantName =
      participantElements[0].nativeElement.textContent;
    expect(firstParticipantName).toContain(MOCK_USERS[3].name);
  });
});
