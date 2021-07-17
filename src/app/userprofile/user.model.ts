export class UserModel{
    constructor(
        public UserId: number,
        public UserName: string,
        public UserEmail : string,
        public UserQualification: string,
        public UserPassOutYear: number,
        public UserCourse : string,
        public UserStatus: string,
        public UserPlace: string,
        public UserMark: number ){} 
    
}