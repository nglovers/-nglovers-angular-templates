import { Component, Input } from '@angular/core';

@Component({
	selector: 'ngs2-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
	@Input() color = 'primary';

	constructor() {}
}
