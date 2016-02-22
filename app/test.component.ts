import {Component, View} from 'angular2/core';


@Component({
    selector: "my-app",
    template: `
<div id="main">
    <div >
        <label for="DOB"> Date of Birth:</label> <br>
        <input id="DOB" />

    </div>
</div>

<button>Things</button>`,
    styleUrls: ['app/style.css']
})


export class AppComponent {
    title = "fuck off"
}