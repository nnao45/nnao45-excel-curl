import { Component, Inject } from "@angular/core";
import HttpService from "./app.service";
import { HttpClient } from "@angular/common/http";

/* global console, Excel */

@Component({
  selector: "app-home",
  templateUrl: "./app.component.html",
})
export default class AppComponent {
  welcomeMessage = "Welcome";
  constructor(@Inject(HttpService) private httpService: HttpService){}

  async run() {
    try {
      await Excel.run(async (context) => {
        /**
         * Insert your Excel code here
         */
        const range = context.workbook.getSelectedRange();

        // Read the range address
        range.load("address");

        // Update the fill color
        range.format.fill.color = "blue";

        await context.sync();
        console.log(`The range address was ${range.address}.`);

        this.httpService.httpGet().unsubscribe();
      });
    } catch (error) {
      console.error(error);
    }
  }
}
