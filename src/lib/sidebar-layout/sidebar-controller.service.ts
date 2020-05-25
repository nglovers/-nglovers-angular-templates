import { Injectable } from '@angular/core';
import { HeadroomController } from '../header/headroom-controller.service';

@Injectable({
	providedIn: 'root',
})
export class SidebarController {
	public menuOpened: boolean;

	constructor(private headroomController: HeadroomController) {}

	openMenu() {
		this.menuOpened = true;
		if (this.headroomController.headroom) {
			this.headroomController.lockHeadroomPinned();
		}
	}

	closeMenu() {
		this.menuOpened = false;
		if (this.headroomController.headroom) {
			this.headroomController.unlockHeadroom();
		}
	}

	toggleMenu() {
		this.menuOpened = !this.menuOpened;
		if (this.headroomController.headroom) {
			this.menuOpened
				? this.headroomController.lockHeadroomPinned()
				: this.headroomController.unlockHeadroom();
		}
	}
}
