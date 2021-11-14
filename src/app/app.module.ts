import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { dataService } from './Servicios/data.service';

import { IngresarnuevoComponent } from './Components/ingresarnuevo/ingresarnuevo.component';
import { PanelinicioComponent } from './Components/panelinicio/panelinicio.component'; 

import {ButtonModule} from 'primeng/button';
import {AccordionModule} from 'primeng/accordion';
import {ToolbarModule} from 'primeng/toolbar';
import {SplitButtonModule} from 'primeng/splitbutton';
import {MenubarModule} from 'primeng/menubar';
import {PanelMenuModule} from 'primeng/panelmenu';
import {DataViewModule} from 'primeng/dataview';
import {PaginatorModule} from 'primeng/paginator';
import {TableModule} from 'primeng/table';
import {PanelModule} from 'primeng/panel';
import {InputTextModule} from 'primeng/inputtext';
import {RatingModule} from 'primeng/rating';
import {DropdownModule} from 'primeng/dropdown';
import {TabViewModule} from 'primeng/tabview';
import {CheckboxModule} from 'primeng/checkbox';
import {DialogModule} from 'primeng/dialog';
// import {AppCodeModule} from '../../app.code.component';
// import {AppDemoActionsModule} from '../../app.demoactions.component';

@NgModule({
  declarations: [
    AppComponent,
    IngresarnuevoComponent,
    PanelinicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AccordionModule,
    ButtonModule,
    ToolbarModule,
    SplitButtonModule,
    MenubarModule,
    PanelMenuModule,
    DataViewModule,
    PaginatorModule,
    TableModule,
    PanelModule,
    InputTextModule,
    RatingModule,
    DropdownModule,
    TabViewModule,
    CheckboxModule,
    DialogModule,
    BrowserAnimationsModule
    
  ],
  providers: [dataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
