import { TestBed } from '@angular/core/testing';

import { HttpRegistroService } from './http-registro.service';

describe('HttpRegistroService', () => {
  let service: HttpRegistroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpRegistroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
