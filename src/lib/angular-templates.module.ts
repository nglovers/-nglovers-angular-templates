import { NgModule, Provider } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
import { SidebarLayoutModule } from './sidebar-layout/sidebar-layout.module';

const headerModule = HeaderModule.forRoot();

const providers: Provider[] = [];
providers.push(headerModule.providers);

@NgModule({
	declarations: [],
	imports: [SidebarLayoutModule, headerModule, FooterModule],
	exports: [],
})
export class AngularTemplatesModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: AngularTemplatesModule,
			providers,
		};
	}
}
