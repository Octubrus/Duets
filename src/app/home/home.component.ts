import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    /* Sample function that returns boolean in case the browser is Internet Explorer*/
    function isIE() {
      let ua = navigator.userAgent;
      /* MSIE used to detect old browsers and Trident used to newer ones*/
      var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;

      return is_ie;
    }
    /* Create an alert to show if the browser is IE or not */
    if (isIE()) {
      alert('Divertimento Duets is currently not compadible with Internet Explorer. Plese use any other browser such as Google Chrome or Safari.');
    } 
  }

}
