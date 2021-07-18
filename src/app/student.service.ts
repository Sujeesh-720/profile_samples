import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  Items={
    StudentName:"",
    StudentID:"",
    StudentEmail:"",
    StudentPhone:"",
    StudentAddress:"",
    StudentHighestQualification:"",
    StudentPassOutYear:"",
    StudentSkill:"",
    StudentStatus:"",
    StudentTech:"",
    StudentYear:"",
    StudentCourse:"",
    StudentAmount:"",
    StudentPhoto:''
  }

  constructor(private http:HttpClient) { }

  updateStudent(student:any){
   console.log('client update');
   return this.http.put("http://localhost:3000/up",student)
   .subscribe(data=>{console.log(data)})
  }
}
