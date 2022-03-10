import { PartnersComponent } from './partners/partners.component';
import { CompaniesComponent } from './companies/companies.component';
import { BiographyComponent } from './biography/biography.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableHomeComponent } from './table-home/table-home.component';

const routes: Routes = [
  {path:'',component:TableHomeComponent,
  children:[
    {path:'',component:BiographyComponent},
    {path:'companies',component:CompaniesComponent},
    {path:'partners',component:PartnersComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesRoutingModule { }
