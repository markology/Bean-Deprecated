import {Component, View, OnInit} from 'angular2/core';


@Component({
    selector: "background-info",
    template: `
<div class="barFix">    
	<div id="main">
	<div class="formBoxWrapper">
	    <div  class="formBox flexTopLeft">
	        <label for="DOB"> What's your date of birth?</label> <br>
	        <input type="text" id="DOB" />

	    </div>
	    <div class="formBox flexTopRight" >
	        <label for="DOB"> What gender do you identify with?</label> <br>
	        <select class="mySelect" id="gender" >
	       		<option disabled selected>MM/DD/YYY</option>
	        	<option>Male</option>
	        	<option>Female</option>
	        	<option>Rather not say</option>
	        	<option>Other</option>
	        </select>

	    </div>
		</div>
		<div class="formBoxWrapper">
	    <div  class="formBox">
	        <label for="DOB"> What is your nationality?</label> <br>
	        <select class="mySelect" id="gender" >
	        	<option>British</option>
	        	<option>Brazilian</option>
	        	<option>Bruneian</option>
	        	<option>Bulgarian</option>
	        </select>
	    </div>

	    <div class="formBox" >
	        <label for="DOB"> What gender do you identify with?</label> <br>
	        <select class="mySelect" id="gender" >
	        	<option>English</option>
	        	<option>Espanol</option>
	        	<option>Francois</option>
	        	<option>Abaza</option>
	        </select>
	    </div>     
	</div>	  

		<div class="formBoxWrapper">

	    <div class="formBox" >
	        <label for="DOB"> What gender do you identify with?</label> <br>
	        <select class="mySelect" id="gender" >
	        	<option>English</option>
	        	<option>Espanol</option>
	        	<option>Francois</option>
	        	<option>Abaza</option>
	        </select>
	    </div>     
	</div>	   


			<div class="formBoxWrapper">

	    <div class="formBox" >
	        <label for="DOB"> What gender do you identify with?</label> <br>
	        <select class="mySelect" id="gender" >
	        	<option>English</option>
	        	<option>Espanol</option>
	        	<option>Francois</option>
	        	<option>Abaza</option>
	        </select>
	    </div>     
	</div>	   


		<div class="formBoxWrapper ">
	    <div  class="formBox flexBottomLeft">
	        <label for="DOB"> What is your nationality?</label> <br>
	        <select class="mySelect" id="gender" >
	        	<option>British</option>
	        	<option>Brazilian</option>
	        	<option>Bruneian</option>
	        	<option>Bulgarian</option>
	        </select>
	    </div>

	    <div class="formBox flexBottomRight" >
	        <label for="DOB"> What gender do you identify with?</label> <br>
	        <select class="mySelect" id="gender" >
	        	<option>English</option>
	        	<option>Espanol</option>
	        	<option>Francois</option>
	        	<option>Abaza</option>
	        </select>
	    </div>     
	</div>	   



	</div>
</div>

<button>Things</button>`
})


export class BackgroundInfoComponent implements OnInit {
    title = "fuck off"

    ngOnInit() {
		var classname = document.getElementsByClassName("mySelect");

		for (var i = 0; i < classname.length; i++) {
			var options = classname[i].childNodes;


			for (var j = 0; j < options.length; j++)
				options[j].addEventListener('click', function() {
					this.parentElement.style.color = "#4A4A4A";

				}, false);

		}
	}
}