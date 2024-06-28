import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './componetes/formulario/formulario.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },

  {
    path: '',
    redirectTo: './home.component.html',
    pathMatch: 'full'
  },
  {
    path: './formulario.component.html',
    component: FormularioComponent,

  },
  ]

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
