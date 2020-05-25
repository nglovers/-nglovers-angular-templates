import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';
import { HeadroomController } from './headroom-controller.service';

@NgModule({
	declarations: [HeaderComponent],
	imports: [CommonModule, MatToolbarModule, MatIconModule],
	exports: [HeaderComponent],
	providers: [HeadroomController],
})
export class HeaderModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: HeaderModule,
			providers: [HeadroomController],
		};
	}
}
