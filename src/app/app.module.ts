import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {CdkTableModule} from '@angular/cdk/table';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import {AgmCoreModule} from '@agm/core';
import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {SidebarModule} from 'ng-sidebar';
import {ToastrModule} from 'ngx-toastr';
import 'hammerjs';

import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AuthService} from './core/service/auth/auth.service';

import {RoutingModule} from "./app-routing.module";
import {MainComponent} from './main/main.component';
import {AuthComponent} from './auth/auth.component';
import {MenuToggleModule} from './core/menu/menu-toggle.module';
import {MenuItems} from './core/menu/menu-items/menu-items';
import {PageTitleService} from './core/page-title/page-title.service';
import {WidgetsComponentModule} from './widgets-component/widgets-component.module';
import {ResponseRequestInterceptor} from "./core/interceptors/response-request.interceptor";
import {AppComponent} from "./app.component";

/********** Custom option for ngx-translate ******/
export function createTranslateLoader(http: HttpClient) {
   return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export const firebase = {
	apiKey: "AIzaSyAYQ701NLzFMFFtx-A71OzNfORfJhR1RvI",
	authDomain: "sbm-e0e7a.firebaseapp.com",
	databaseURL: "https://sbm-e0e7a.firebaseio.com",
	projectId: "sbm-e0e7a",
	storageBucket: "sbm-e0e7a.appspot.com",
	messagingSenderId: "531424365001"
}

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
	suppressScrollX: true
};

const perfectScrollbarConfig: PerfectScrollbarConfigInterface = {
   suppressScrollX: true
};

@NgModule({
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
		CdkTableModule,
		SidebarModule.forRoot(),
		RoutingModule,
		RouterModule,
    // TourNgBootstrapModule.forRoot(),
		NgbModalModule.forRoot(),
		AgmCoreModule.forRoot({apiKey: 'AIzaSyBtdO5k6CRntAMJCF-H5uZjTCoSGX95cdk'}),
		PerfectScrollbarModule,
		MenuToggleModule,
		HttpClientModule,
		TranslateModule.forRoot({
		loader: {
			provide: TranslateLoader,
			useFactory: createTranslateLoader,
			deps: [HttpClient]
		}
		}),
		ToastrModule.forRoot({timeOut: 2000, preventDuplicates: true}),
		WidgetsComponentModule,
		AngularFireModule.initializeApp(firebase),
		AngularFireAuthModule
    ],
	declarations: [
		AppComponent,
		MainComponent,
		AuthComponent
	],
	bootstrap: [AppComponent],
	providers:[
		MenuItems,
		PageTitleService,
		AuthService,
		{
			provide: PERFECT_SCROLLBAR_CONFIG,
			useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
		},
    { provide: HTTP_INTERCEPTORS, useClass: ResponseRequestInterceptor, multi: true }
	]
})
export class ChankyaAppModule { }
