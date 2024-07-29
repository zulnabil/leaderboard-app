import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import MOCK_USERS from '@app/fixtures/users.json';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch users', () => {
    service.getList().subscribe((users) => {
      expect(users.length).toBe(MOCK_USERS.length);
      expect(users).toEqual(MOCK_USERS);
    });

    const request = httpMock.expectOne(
      'https://jsonplaceholder.typicode.com/users'
    );
    expect(request.request.method).toBe('GET');
    request.flush(MOCK_USERS);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
