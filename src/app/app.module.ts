import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ConfigureEquipmentComponent } from './components/configure-equipment/configure-equipment.component';
import {ModalModule, BsModalService} from 'ngx-bootstrap/modal'

import { FormsModule } from '@angular/forms';
import { ConfiguratorConfigComponent } from './components/configurator-config/configurator-config.component';
import { SuiSelectModule } from '@richardlt/ng2-semantic-ui';
import { ConfigService } from './services/config.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConfigureEquipmentComponent,
    ConfiguratorConfigComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule,
    FormsModule,
    SuiSelectModule,
    HttpClientModule
  ],

  entryComponents:[
    ConfiguratorConfigComponent
  ],
  providers: [
    BsModalService,
    ConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
