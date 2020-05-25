import { NgModule, Provider, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidebarLayoutComponent } from './sidebar-layout/sidebar-layout.component';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { SidebarController } from './sidebar-controller.service';

const headerModule = HeaderModule.forRoot();

const providers: Provider[] = [];

providers.push(headerModule.providers);
providers.push(SidebarController);

@NgModule({
	declarations: [SidebarLayoutComponent],
	imports: [CommonModule, headerModule, FooterModule, MatSidenavModule],
	exports: [SidebarLayoutComponent],
	providers: [SidebarController],
})
export class SidebarLayoutModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: SidebarLayoutModule,
			providers,
		};
	}
}
