import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from './user.model';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  title:string= "User Profile";

  userItem={
    UserName:'',
    UserID:'',
    UserEmail:'',
    UserQualification:'',
    UserPassOutYear:'',
    UserStatus:'',
    UserCourse:'',
    UserPlace:'',
    UserMark:'',
    UserPhoto:"https://image.flaticon.com/icons/png/512/145/145843.png"
    
  }

    
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  upload(){
    this.router.navigate(["updateuser"]);
  }

}
