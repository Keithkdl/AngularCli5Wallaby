import { Component } from '@angular/core';
import { environment } from '@env/environment';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';

    constructor() {

        if (environment.production) {
            console.log('im in production mode');
        }
    }
}
