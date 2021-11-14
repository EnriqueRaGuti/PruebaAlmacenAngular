import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresarnuevoComponent } from './Components/ingresarnuevo/ingresarnuevo.component';
import { PanelinicioComponent } from './Components/panelinicio/panelinicio.component';

const routes: Routes = [
  { path: '',   redirectTo: '/panel', pathMatch: 'full' },
  { path:'panel', component: PanelinicioComponent},
  { path: 'ingresar', component: IngresarnuevoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
