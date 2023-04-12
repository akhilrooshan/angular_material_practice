import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntercepterService } from './shared/intercepter.service';
import { Test1Component } from './test1/test1.component';
@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [
    { provide:HTTP_INTERCEPTORS ,useClass:IntercepterService,multi:true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
