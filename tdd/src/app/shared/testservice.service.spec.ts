import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { IntercepterService } from './intercepter.service';
import { TestserviceService } from './testservice.service';
describe('TestserviceService', () => {
  let service: TestserviceService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
    });
    service = TestBed.inject(TestserviceService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
