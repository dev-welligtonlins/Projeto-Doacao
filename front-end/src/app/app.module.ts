import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { SwiperModule } from 'swiper/angular';
import { NgbCarouselModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';
import {ErrorInterceptor} from "./interceptors/error.interceptor";
import {RequestInterceptor} from "./interceptors/request.interceptor";
import { InstitutionListComponent } from './components/institution-list/institution-list.component';
import { InstitutionRegisterComponent } from './components/institution-register/institution-register.component';
import { InstitutionDisableComponent } from './components/institution-disable/institution-disable.component';
import { InstitutionVisualizeComponent } from './components/institution-visualize/institution-visualize.component';
import { PageAboutComponent } from './components/page-about/page-about.component';
import { PageTermsComponent } from './components/page-terms/page-terms.component';
import { PageLoginComponent } from './components/page-login/page-login.component';
import { PagePrivacyComponent } from './components/page-privacy/page-privacy.component';
import { PageImportanceComponent } from './components/page-importance/page-importance.component';
import { PageHomeComponent } from './components/page-home/page-home.component';
import { PageContactComponent } from './components/page-contact/page-contact.component';
import { PageRegisterFormComponent } from './components/page-register/page-register.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { StructAlertComponent } from './components/struct-alert/struct-alert.component';
import { DonorRegisterComponent } from './components/donor-register/donor-register.component';
import { DenounceRegisterComponent } from './components/denounce-register/denounce-register.component';
import { DenounceListComponent } from './components/denounce-list/denounce-list.component';
import { AdministratorDashboardComponent } from './components/administrator-dashboard/administrator-dashboard.component';
import { DonorVisualizeComponent } from './components/donor-visualize/donor-visualize.component';
import { DonorListComponent } from './components/donor-list/donor-list.component';
import { DenounceVisualizeComponent } from './components/denounce-visualize/denounce-visualize.component';
import { InstitutionValidationComponent } from './components/institution-validation/institution-validation.component';
import { AdministratorRegisterComponent } from './components/administrator-register/administrator-register.component';
import { AdministratorVisualizeComponent } from './components/administrator-visualize/administrator-visualize.component';
import { AdministratorListComponent } from './components/administrator-list/administrator-list.component';
import { CampaignVisualizeComponent } from './components/campaign-visualize/campaign-visualize.component';
import { CampaignRegisterComponent } from './components/campaign-register/campaign-register.component';
import { CampaignUpdateComponent } from './components/campaign-update/campaign-update.component';
import { CampaignFinishComponent } from './components/campaign-finish/campaign-finish.component';
import { CampaignDisableComponent } from './components/campaign-disable/campaign-disable.component';
import { CampaignListComponent } from './components/campaign-list/campaign-list.component';
import { InstitutionUpdateComponent } from './components/institution-update/institution-update.component';
import { DonorUpdateComponent } from './components/donor-update/donor-update.component';
import { DonorDisableComponent } from './components/donor-disable/donor-disable.component';
import { DenounceUpdateComponent } from './components/denounce-update/denounce-update.component';
import { DenounceDisableComponent } from './components/denounce-disable/denounce-disable.component';
import { AdministratorUpdateComponent } from './components/administrator-update/administrator-update.component';
import { AdministratorDisableComponent } from './components/administrator-disable/administrator-disable.component';
import { InstitutionFollowComponent } from './components/institution-follow/institution-follow.component';
import { DenounceMyComponent } from './components/denounce-my/denounce-my.component';
import { CampaignMyComponent } from './components/campaign-my/campaign-my.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    AdministratorListComponent,
    PageRegisterFormComponent,
    PageHomeComponent,
    CampaignListComponent,
    StructAlertComponent,
    CampaignUpdateComponent,
    CampaignFinishComponent,
    CampaignVisualizeComponent,
    PageContactComponent,
    PageAboutComponent,
    PagePrivacyComponent,
    PageTermsComponent,
    PageImportanceComponent,
    CampaignRegisterComponent,
    InstitutionValidationComponent,
    PageLoginComponent,
    DenounceListComponent,
    InstitutionVisualizeComponent,
    AdministratorRegisterComponent,
    DonorListComponent,
    AdministratorDashboardComponent,
    DenounceVisualizeComponent,
    DonorVisualizeComponent,
    AdministratorVisualizeComponent,
    InstitutionRegisterComponent,
    DonorRegisterComponent,
    DenounceRegisterComponent,
    InstitutionDisableComponent,
    CampaignDisableComponent,
    UserProfileComponent,
    InstitutionListComponent,
    InstitutionUpdateComponent,
    DonorUpdateComponent,
    DonorDisableComponent,
    DenounceUpdateComponent,
    DenounceDisableComponent,
    AdministratorUpdateComponent,
    AdministratorDisableComponent,
    InstitutionFollowComponent,
    DenounceMyComponent,
    CampaignMyComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe,
    SwiperModule,
    NgbCarouselModule,
    NgIf,
    NgbPaginationModule
  ],
  providers: [
    provideNgxMask(),
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
