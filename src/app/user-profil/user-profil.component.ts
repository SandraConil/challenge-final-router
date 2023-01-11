import { Component } from '@angular/core';


@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.css']
})

  export class UserProfileComponent {
    user = {
      name : 'Sandra',
      firstName : 'Stitch',
      age : 25,
      photo : 'https://randomuser.me/api/portraits/lego/2.jpg' 
  
  
    }

  }


