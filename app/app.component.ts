import {Component, View, OnInit} from 'angular2/core'
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router'
import {BackgroundInfoComponent} from './backgroundInfo.component.js'


// < a[routerLink]="['BackgroundInfo']" > Dashboard < /a>


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
<span id="overlay"><h2>Great, let's get started! First we need to know some of the basics.</h2><span id="overlayButton">Ok got it</span></span>
<router-outlet></router-outlet>
`
,
styleUrls:['app/style.css'],
directives: [ROUTER_DIRECTIVES],
providers: [ROUTER_PROVIDERS],
})

@RouteConfig([
	{
		path: '/',
		name: 'BackgroundInfo',
		component: BackgroundInfoComponent
	}	

])


export class AppComponent implements OnInit{
    title = "fuck off"

    ngOnInit(){
        document.getElementById("overlayButton").addEventListener('click',
            function() {
                document.getElementById('overlay').style.display = "none";
            });    
    }
}