import { Component , OnInit} from '@angular/core';
import {faLinkedin, faYoutube, faGithub, faAngular} from '@fortawesome/free-brands-svg-icons';
import {faDownload} from '@fortawesome/free-solid-svg-icons';
import { init } from 'aos';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faLinkedin =faLinkedin
  faYoutube = faYoutube
  faGithub = faGithub
  faAngular = faAngular
  faDownload = faDownload

  constructor() { }


  ngOnInit() {
  }

}
