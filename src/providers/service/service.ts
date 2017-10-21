import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceProvider {
    url : any;
    constructor(public http: Http) {
    }

    public getCategory(){
        this.url = 'assets/json/data.json';
        return this.getData();
    }


    public getData(){
        return new Promise((resolve, reject) => {
            this.http.get(this.url)
                .map(
                (res) => res.json()
                )
                .subscribe(
                (data) => {
                    resolve(data);
                },
                (err) => {
                    let r: any = err;
                    let parse = JSON.parse(r._body);
                    reject(parse.msg);
                }
                );
        });
    }
}
