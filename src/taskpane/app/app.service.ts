import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";


export interface Data {
  key1: string;
  key2: string;
}
@Injectable({
  providedIn: "root",
})
export default class HttpService {

  constructor(@Inject(HttpClient) private http: HttpClient) { }

  private httpOptions: any = {
    // ヘッダ情報
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
    //
    // レスポンスにヘッダ情報を入れるための設定
    // https://angular.io/guide/http#reading-the-full-response
    //
    observe: "response", // ⇐ これを追加
    //
    // DELETE 実行時に `body` が必要になるケースがあるのでプロパティとして用意しておく
    // ( ここで用意しなくても追加できるけど... )
    body: null,
  };

  private host: string = "http://localhost:13000/";
  data: Data;

  httpGet() {
    return this.http.get<Data>(this.host + "/api/photo/list", this.httpOptions).subscribe({
      next: (response: HttpResponse<Data>) => {
        this.data = response.body;
      },
      error: (e) => {
        switch (e.status) {
          default:
            break;
        }
      },
    });
  }
}