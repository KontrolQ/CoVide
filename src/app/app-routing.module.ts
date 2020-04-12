import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'eula',
    loadChildren: () => import('./eula/eula.module').then( m => m.EulaPageModule)
  },
  {
    path: 'about-app',
    loadChildren: () => import('./about-app/about-app.module').then( m => m.AboutAppPageModule)
  },
  {
    path: 'open-source-information',
    loadChildren: () => import('./open-source-information/open-source-information.module').then( m => m.OpenSourceInformationPageModule)
  },
  {
    path: 'helpline-numbers',
    loadChildren: () => import('./helpline-numbers/helpline-numbers.module').then( m => m.HelplineNumbersPageModule)
  },
  {
    path: 'infected-patients',
    loadChildren: () => import('./infected-patients/infected-patients.module').then( m => m.InfectedPatientsPageModule)
  },
  {
    path: 'travel-history',
    loadChildren: () => import('./travel-history/travel-history.module').then( m => m.TravelHistoryPageModule)
  },
  {
    path: 'app-feedback',
    loadChildren: () => import('./app-feedback/app-feedback.module').then( m => m.AppFeedbackPageModule)
  },
  {
    path: 'frequently-ask-questions',
    loadChildren: () => import('./frequently-ask-questions/frequently-ask-questions.module').then( m => m.FrequentlyAskQuestionsPageModule)
  },
  {
    path: 'symptoms',
    loadChildren: () => import('./symptoms/symptoms.module').then( m => m.SymptomsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
