import {Component, View} from 'angular2/core';

@Component({
	selector: "my-app",
	template: `<div id="topbar">
    <ul>
        <li class="selected">Basic Info
            <div id="circle" class="active">
                <h1>1</h1>
            </div>
        </li>
        <li>Interested Activities
            <div id="circle">
                <h1>2</h1>
            </div>
        </li>
        <li>Passion and Needs
            <div id="circle">
                <h1>3</h1>
            </div>
        </li>
        <li>Summary
            <div id="circle" >
                <h1>4</h1>
            </div>
        </li>
        <hr>
    </ul>
</div>

<div id="sidebar">
    <div id="logo">
        Tell Us Who
    </div>
    <ul>
        <li class="selected"><span>Background</span></li>
        <li><span>School and Work</span></li>
        <li><span>Meeting people</span></li>
        <li><span>Sense of community</span></li>
        <li><span>Wellbeing</span></li>
    </ul>
</div>

<div id="main">
    <div >
        <label for="DOB"> Date of Birth:</label> <br>
        <input id="DOB" />

    </div>
</div>

<button>Things</button>`,
styleUrls:['app/style.css']
})


export class AppComponent{
	title = "fuck off"
}