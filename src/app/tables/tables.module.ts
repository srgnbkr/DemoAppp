import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from './tables-routing.module';
import { TableHomeComponent } from './table-home/table-home.component';
import { TableComponent } from './table/table.component';
import { SharedModule } from '../shared/shared.module';
import { BiographyComponent } from './biography/biography.component';
import { CompaniesComponent } from './companies/companies.component';
import { PartnersComponent } from './partners/partners.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  declarations: [
    TableHomeComponent,
    TableComponent,
    BiographyComponent,
    CompaniesComponent,
    PartnersComponent,
    TabsComponent,
  ],
  imports: [CommonModule, TablesRoutingModule, SharedModule],
})
export class TablesModule {}
