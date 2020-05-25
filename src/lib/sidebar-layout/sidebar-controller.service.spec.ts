import { TestBed } from '@angular/core/testing';

import { SidebarController } from './sidebar-controller.service';

describe('SidebarControllerService', () => {
	let service: SidebarController;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(SidebarController);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
