import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoresComponent } from './stores/components/stores/stores.component';
import { AuthGuard } from './core/services/guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: StoresComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '**',
    component: StoresComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
