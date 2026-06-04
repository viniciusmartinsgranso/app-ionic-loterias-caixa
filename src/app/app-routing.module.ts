import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'loterias',
    loadChildren: () => import('./pages/loterias/loterias-home/loterias-home.module').then(m => m.LoteriasHomePageModule)
  },
  {
    path: '',
    redirectTo: 'loterias',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
