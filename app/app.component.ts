//<reference path="../typings/main.d.ts"/>   /*With this typing errors without $ error */

import {Component} from '@angular/core';
import {Observable} from 'rxjs/Rx'

@Component({
    selector: 'my-app',
    template: `
        <input id="search" type="text" class="form-control" placeholder="Search song ..." />  
    `
})
export class AppComponent {

    constructor() {
        var keyups = Observable.fromEvent($('#search'), "keyup");
        keyups.subscribe(data => console.log(data));
    }
}


