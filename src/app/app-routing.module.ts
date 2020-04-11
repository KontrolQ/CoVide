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
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
