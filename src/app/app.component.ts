import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import * as AOS from 'aos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ajprakash-portfolio';
  // constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  // ngOnInit() {
  //   if (isPlatformBrowser(this.platformId)) {
  //     this.loadScripts();
  //   }
  // }

  // loadScripts() {
  //   const scriptUrls = [
  //     "https://code.jquery.com/jquery-3.6.0.min.js",
  //     "https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js",
  //     "https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js",
  //     "https://cdn.jsdelivr.net/npm/now-ui-kit@1.1.0/assets/js/now-ui-kit.min.js"
  //   ];

  //   scriptUrls.forEach((scriptUrl, index) => {
  //     const script = document.createElement('script');
  //     script.src = scriptUrl;
  //     script.onload = () => {
  //       if (index === scriptUrls.length - 1) {
  //         // Initialize AOS once all scripts are loaded
  //         AOS.init();
  //       }
  //     };
  //     document.body.appendChild(script);
  //   });
  // }
}
