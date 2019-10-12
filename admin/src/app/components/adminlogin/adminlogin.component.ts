import { Component, OnInit } from '@angular/core';
import { AdminInterface } from '../../interfaces/admin';
import * as $ from 'jquery';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
declare var $: any;

// $(this).hide() - hides the current element.

// $("p").hide() - hides all <p> elements.

// $(".test").hide() - hides all elements with class="test".

// $("#test").hide() - hides the element with id="test".

//read jquery selectors w3school
// Mouse Events	Keyboard Events	Form Events	Document/Window Events
// click	keypress	submit	load
// dblclick	keydown	change	resize
// mouseenter	keyup	focus	scroll
// mouseleave	 	blur	unload

//$(selector).post(URL,data,callback);
//$(selector).get(URL,callback);

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  data: AdminInterface;
  options: any;
  constructor(private router: Router) { }

  ngOnInit() {
    $(document).ready(function () {
      $("#login-button").click(function (e) {
        e.preventDefault();
      })
    })
  }

  onLogin() {
      this.data = {
        email: $('#userEmail').val(),
        password: $('#userPassword').val()
      }
      this.options = {
        data: this.data,
        purpose: 'adminLogin'
      }
      $.post(environment.baseUrl + this.options.purpose, this.options.data, (response, error) => {
        if (response) {
          console.log(response);
          this.router.navigate(["/getUsers"]);        
        }
        else
          console.log(error);
      });
  }
}
