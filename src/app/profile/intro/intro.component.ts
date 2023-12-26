import { ProfileService } from '../profile.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent {
  cvUrl: any
  constructor(private profileService:ProfileService) { }

  ngOnInit() {
    this.cvUrl =  this.profileService.getResumeUrl();
  }
}
