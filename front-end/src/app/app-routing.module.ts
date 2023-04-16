import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './components/test/test.component';
import { AuthenticationGuard } from "./service/authentication.guard";
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
//import { DenounceUpdateComponent } from './components/denounce-update/denounce-update.component';
import { DenounceDisableComponent } from './components/denounce-disable/denounce-disable.component';
import { AdministratorUpdateComponent } from './components/administrator-update/administrator-update.component';
import { AdministratorDisableComponent } from './components/administrator-disable/administrator-disable.component';
import { DenounceValidationComponent } from './components/denounce-validation/denounce-validation.component';
import { InstitutionFollowComponent } from './components/institution-follow/institution-follow.component';
import { DenounceMyComponent } from './components/denounce-my/denounce-my.component';
import { CampaignMyComponent } from './components/campaign-my/campaign-my.component';

const routes: Routes = [
  { path: 'test', component: TestComponent },
  {
    path: '', canActivate: [AuthenticationGuard], data: { isAccessible: true }, children: [
      { path: 'login', component: PageLoginComponent },
      { path: '', component: PageHomeComponent },
      { path: 'cadastro', component: PageRegisterFormComponent },
      { path: 'fale-consco', component: PageContactComponent },
      { path: 'quem-somos', component: PageAboutComponent },
      { path: 'politica-de-privacidade', component: PagePrivacyComponent },
      { path: 'termos-de-uso', component: PageTermsComponent },
      { path: 'importancia-de-doar', component: PageImportanceComponent },
    ]
  },
  {
    path: '', canActivate: [AuthenticationGuard], data: { isAccessible: true }, children: [
      { path: 'instituicoes', component: InstitutionListComponent },
      { path: 'instituicoes/cadastrar', component: InstitutionRegisterComponent },
      { path: 'instituicoes/visualizar/:id', component: InstitutionVisualizeComponent },
      { path: 'instituicoes/atualizar/:id', component: InstitutionUpdateComponent },
      { path: 'instituicoes/desativar/:id', component: InstitutionDisableComponent },
      { path: 'instituicoes/validar/:id', component: InstitutionValidationComponent },
      { path: 'campanhas', component: CampaignListComponent },
      { path: 'campanhas/cadastrar', component: CampaignRegisterComponent },
      { path: 'campanhas/visualizar/:id', component: CampaignVisualizeComponent },
      { path: 'campanhas/atualizar/:id', component: CampaignUpdateComponent },
      { path: 'campanhas/desativar/:id', component: CampaignDisableComponent },
      { path: 'campanhas/finalizar/:id', component: CampaignFinishComponent },
      { path: 'doadores/cadastrar', component: DonorRegisterComponent },
      { path: 'denuncias/cadastrar/:id', component: DenounceRegisterComponent },
    ]
  },
  {
    path: '', canActivate: [AuthenticationGuard], data: { isAccessible: false }, children: [
      { path: 'conta', component: UserProfileComponent },
    ]
  },
  {
    path: '', canActivate: [AuthenticationGuard], data: { isAccessible: false, roles: ['ROLE_INSTITUTION'] }, children: [
      { path: 'instituicoes/:id/campanhas', component: CampaignMyComponent },
    ]
  },
  {
    path: '', canActivate: [AuthenticationGuard], data: { isAccessible: false, roles: ['ROLE_DONOR'] }, children: [
      { path: 'instituicoes/seguidas', component: InstitutionFollowComponent },
      { path: 'denuncias/minhas', component: DenounceMyComponent },
    ]
  },
  {
    path: '', canActivate: [AuthenticationGuard], data: { isAccessible: false, roles: ['ROLE_DONOR', 'ROLE_ADMIN'] }, children: [
      { path: 'doadores/atualizar/:id', component: DonorUpdateComponent },
      { path: 'doadores/desativar/:id', component: DonorDisableComponent },
    ]
  },
  {
    path: '', canActivate: [AuthenticationGuard], data: { isAccessible: false, roles: ['ROLE_ADMIN', 'ROLE_DONOR'] }, children: [
      { path: 'denuncias/visualizar/:id', component: DenounceVisualizeComponent },
    ]
  },
  {
    path: '', canActivate: [AuthenticationGuard], data: { isAccessible: false, roles: ['ROLE_ADMIN'] }, children: [
      { path: 'administradores/gerenciar', component: AdministratorDashboardComponent },
      { path: 'administradores', component: AdministratorListComponent },
      { path: 'administradores/cadastrar', component: AdministratorRegisterComponent },
      { path: 'administradores/visualizar/:id', component: AdministratorVisualizeComponent },
      { path: 'administradores/atualizar/:id', component: AdministratorUpdateComponent },
      { path: 'administradores/desativar/:id', component: AdministratorDisableComponent },
      { path: 'denuncias', component: DenounceListComponent },
      { path: 'denuncias/desativar/:id', component: DenounceDisableComponent },
      { path: 'denuncias/validar/:id', component: DenounceValidationComponent },
      { path: 'doadores', component: DonorListComponent },
      { path: 'doadores/visualizar/:id', component: DonorVisualizeComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
