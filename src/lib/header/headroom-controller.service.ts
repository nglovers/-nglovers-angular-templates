import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class HeadroomController {
	public headroom: any;

	constructor() {}

	lockHeadroomPinned() {
		this.headroom.pin();
		this.headroom.freeze();
	}

	unlockHeadroom() {
		this.headroom.unfreeze();
	}
}

export interface HeadroomOptions {
	enable: boolean;
	/** vertical offset in px before element is first unpinned */
	offset?: number;
	/** scroll tolerance in px before state changes
	 * or you can specify tolerance individually for up/down scroll
	 */
	tolerance?: { up?: number; down?: number } | number;
	/** css classes to apply multiple classes are also supported with a space-separated list */
	classes?: {
		/** when element is initialised */
		initial?: string;
		/** when scrolling up */
		pinned?: string;
		/** when scrolling down */
		unpinned?: string;
		/** when above offset */
		top?: string;
		/** when below offset */
		notTop?: string;
		/** when at bottom of scoll area */
		bottom?: string;
		/** when not at bottom of scroll area */
		notBottom?: string;
		/** when frozen method has been called */
		frozen?: string;
	};
	/** element to listen to scroll events on, defaults to `window` */
	scroller?: HTMLElement;
	/** callback when pinned, `this` is headroom object */
	onPin?: () => void;
	/** callback when unpinned, `this` is headroom object */
	onUnpin?: () => void;
	/** callback when above offset, `this` is headroom object */
	onTop?: () => void;
	/** callback when below offset, `this` is headroom object */
	onNotTop?: () => void;
	/** callback when at bottom of page, `this` is headroom object */
	onBottom?: () => void;
	/** callback when moving away from bottom of page, `this` is headroom object */
	onNotBottom?: () => void;
}
