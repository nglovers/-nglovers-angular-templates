import {
	Component,
	ElementRef,
	EventEmitter,
	Input,
	Output,
} from '@angular/core';
import { OnInit } from '@angular/core';
import { HeadroomController } from '../headroom-controller.service';
import { HeadroomOptions } from '../headroom-controller.service';

@Component({
	selector: 'ngs2-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
	@Input() headroomOpt: HeadroomOptions;
	@Output() menuClick = new EventEmitter<void>();
	@Input() color = 'primary';

	constructor(
		private hostEl: ElementRef,
		private headroomController: HeadroomController
	) {}

	ngOnInit(): void {
		let Headroom;

		try {
			Headroom = require('headroom.js');
			// tslint:disable-next-line:no-unused-variable
			const headroomVersion = require('headroom.js/package.json').version;
			// TODO: if necessary, verify headroom version
		} catch (err) {
			Headroom = undefined;
		}

		if (this.headroomOpt && this.headroomOpt.enable) {
			if (Headroom) {
				if (this.headroomOpt.offset === undefined) {
					this.headroomOpt.offset = 64;
				}

				this.headroomController.headroom = new Headroom(
					this.hostEl.nativeElement,
					this.headroomOpt
				);
				this.headroomController.headroom.init();
			} else {
				console.error(
					`'headroom.js' package is required. Use 'npm i -S headroom.js' to fix this problem.`
				);
			}
		}
	}

	onClickToOpenMenu() {
		this.menuClick.emit();
	}
}
