import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

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
  constructor(private router:Router,private userService:UserService) { }

  ngOnInit(): void {
  }
 editUser(){
   this.router.navigate(['userprofile']);
 }
}
