import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  Item= {
    UserName:'',
    UserID:'',
    UserEmail:'',
    UserQualification:'',
    UserPassOutYear:'',
    UserStatus:'',
    UserCourse:'',
    UserPlace:'',
    UserMark:'',
    UserPhoto:''
  }

  constructor(private http:HttpClient) { }

  save(user:any){
    console.log('client update');
    return this.http.put("http://localhost:3000/update",user)
    .subscribe(data=>{console.log(data)})
  }
}
