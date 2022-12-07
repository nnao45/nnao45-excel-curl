import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import AppComponent from "./app.component";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import HttpService from "./app.service";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  providers: [
    { provide: HttpService, useClass: HttpService, deps: [HttpClient] },
  ],
  imports: [BrowserModule, HttpClientModule],
})
export default class AppModule {}
