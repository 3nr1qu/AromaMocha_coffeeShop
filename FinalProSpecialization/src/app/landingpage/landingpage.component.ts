import { Component, OnInit } from '@angular/core';
import {faLinkedin, faYoutube, faGithub, faAngular, } from '@fortawesome/free-brands-svg-icons';
import {faDownload, faMobile,faCoffee,faMapMarker,faClock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {
  faLinkedin =faLinkedin
  faYoutube = faYoutube
  faGithub = faGithub
  faAngular = faAngular
  faDownload = faDownload
  faMobile = faMobile
  faCoffee = faCoffee
  faMapMarker = faMapMarker
  faClock = faClock
  constructor() { }

  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1} ;
  ngOnInit(): void {
  }
}
