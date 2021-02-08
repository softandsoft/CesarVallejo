import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { PersonalComponent } from './components/personal/personal.component';
import { HijosComponent } from './components/hijos/hijos.component';
import { NuevoPersonalComponent } from './components/nuevo-personal/nuevo-personal.component';
import { PersonalService } from './services/Personal.Service';
import { HijosService } from './services/Hijos.Service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';
import { DialogComponent } from './components/dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    PersonalComponent,
    HijosComponent,
    NuevoPersonalComponent,
    DialogComponent
  ],
  entryComponents: [DialogComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'personal', component: PersonalComponent },
      { path: 'personal-nuevo', component: NuevoPersonalComponent },
      { path: 'personal-editar/:id', component: NuevoPersonalComponent },
      { path: 'personal-hijos/:id', component: HijosComponent },
    ]),
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [PersonalService, HijosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
