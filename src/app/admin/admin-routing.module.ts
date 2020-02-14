import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieFormComponent } from './components/movie-form/movie-form.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';


const routes: Routes = [
  
  {
    path:'',
    component:SidenavComponent,
    children:[
      {
        path:'create',
        component:MovieFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
