import { NgModule } from '@angular/core';

import { NbLayoutModule, 
         NbSidebarModule, 
         NbButtonModule, 
         NbListModule, 
         NbInputModule, 
         NbCardModule} from '@nebular/theme';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryComponent } from './category/category.component';
import { PagesRoutingModule } from './page-routing.module';
import { FormsComponent } from './forms/forms.component';
import { HearderComponent } from './hearder/hearder.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [PagesComponent, DashboardComponent, CategoryComponent, FormsComponent, HearderComponent, FooterComponent],
  imports: [
    NbLayoutModule,
    PagesRoutingModule,
    NbSidebarModule,
    NbButtonModule,
    NbListModule,
    NbInputModule,
    NbCardModule,
  ]
})
export class PagesModule { }
