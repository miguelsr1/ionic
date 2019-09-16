import { TestBed } from '@angular/core/testing';
import { AnhoService } from './anho.service';


describe('AnhoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnhoService = TestBed.get(AnhoService);
    expect(service).toBeTruthy();
  });
});