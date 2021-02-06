import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';

// Registrar el componente creado
import { ButtonAgregar } from './components/button/Button.component'; 
import { DiasSemana } from './components/DiasSemana/diasSemana.component';

import { Button } from 'protractor';
import { PersonalComponent } from './components/personal/personal.component';

import { PersonalService } from './services/Personal.Service';

import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    ButtonAgregar,
    DiasSemana,
    PersonalComponent
  ],
  imports: [
    HttpModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'personal', component: PersonalComponent }
    ])
  ],
  providers: [PersonalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
