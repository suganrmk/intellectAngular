import { BrowserModule } from '@angular/platform-browser';
import { NgModule , ModuleWithProviders  } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule } from "clarity-angular";
import {userCardComponent} from './usercard/usercard.component'
import {commonAPIservice} from './providers/common.services'
import { RouterModule, Routes } from '@angular/router';
import {usertodoComponent} from './usertodo/usertodo.component'


export const router: Routes = [
  { path: '', component: userCardComponent,  pathMatch: 'full' },
  {path:'usertodo/:id', component: usertodoComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);




@NgModule({
  declarations: [
    AppComponent,
    userCardComponent,
    usertodoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    ClarityModule.forRoot(),
    RouterModule.forRoot(router, { useHash: false })
  ],
  providers: [commonAPIservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
