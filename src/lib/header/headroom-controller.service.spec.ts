import { TestBed } from '@angular/core/testing';

import { HeadroomController } from './headroom-controller.service';

describe('HeadroomControllerService', () => {
	let service: HeadroomController;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(HeadroomController);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
