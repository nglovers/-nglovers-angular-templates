import { Component, OnInit, Input } from '@angular/core';
import { SidebarController } from '../sidebar-controller.service';
import { HeadroomOptions } from '../../header/headroom-controller.service';

@Component({
	selector: 'ngs2-sidebar-layout',
	templateUrl: './sidebar-layout.component.html',
	styleUrls: ['./sidebar-layout.component.scss'],
})
export class SidebarLayoutComponent implements OnInit {
	@Input() headroomOpt: HeadroomOptions;
	@Input() color = 'primary';

	constructor(public controller: SidebarController) {}

	ngOnInit(): void {}

	onClickToOpenMenu() {
		this.controller.toggleMenu();
	}
}
