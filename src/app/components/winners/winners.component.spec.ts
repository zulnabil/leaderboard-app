import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinnersComponent } from './winners.component';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { UserService } from '@app/services/user.service';
import { By } from '@angular/platform-browser';
import MOCK_USERS from '@app/fixtures/users.json';

// Mock UserService
class MockUserService {
  getList() {
    // Mocking some user data
    return of(MOCK_USERS);
  }
}

describe('WinnersComponent', () => {
  let component: WinnersComponent;
  let fixture: ComponentFixture<WinnersComponent>;
  let userService: UserService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WinnersComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: UserService, useClass: MockUserService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(WinnersComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with winners list', () => {
    // Check if the winners list is populated correctly
    expect(component.winners.length).toBe(3);
    expect(component.winners[0].name).toBe(MOCK_USERS[0].name);
    expect(component.winners[1].name).toBe(MOCK_USERS[1].name);
    expect(component.winners[2].name).toBe(MOCK_USERS[2].name);
    expect(component.winners[0].index).toBe(2);
    expect(component.winners[1].index).toBe(1);
    expect(component.winners[2].index).toBe(3);
  });

  it('should open and close winner detail', () => {
    // Select a winner and check if detail is opened
    component.handleSelectUser(1);
    expect(component.selectedWinner).toBe(1);
    expect(component.isDetailWinnerOpen).toBe(true);

    // Close the detail and check if the state is reset
    component.handleCloseDetail();
    expect(component.selectedWinner).toBeUndefined();
    expect(component.isDetailWinnerOpen).toBe(false);
  });
});
