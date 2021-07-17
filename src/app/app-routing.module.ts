import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { UpdateUserComponent } from './update-user/update-user.component';


const routes: Routes = [{path:'',component:ProfileComponent},
                         {path:'userprofile',component:UserprofileComponent},
                         {path:'updatestud',component:UpdateStudentComponent},
                          {path:'updateuser',component:UpdateUserComponent}];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
