import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ServerComponent} from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import {WarnAlertComponent} from './WaringAlert/warningalert.component';
import { SuccessesComponent } from './successes/successes.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarnAlertComponent,
    SuccessesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
