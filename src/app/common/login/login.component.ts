import { Component, OnInit } from '@angular/core';
import { LogstatusService } from 'src/app/services/logstatus.service';
import { Router } from '@angular/router';
interface tokenstring{
  access_token:string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logStatus:boolean;
  styleObj:{margin:"50px",padding:"50px",height:"300px",width:"300px",
  border:"3px solid darkred",boxShadow:"5px 5px 10px black"};
  username:string;
  password:string;
  constructor(private ls: LogstatusService,private router:Router) {
    this.logStatus=this.ls.getStatus();
   }

   logUser()
   {

     let userdetails="username=" +this.username+"&password="+this.password+"&grant_type=password";
     
     this.ls.login(userdetails).subscribe(

       (userdetails:tokenstring)=>{
        console.log(userdetails.access_token + "   " +this.username);
         localStorage.setItem("token",userdetails.access_token);
         localStorage.setItem("username",this.username);
         this.router.navigate(['/']);

       },
       ()=>{
         alert("Unable to login");
       }
     )
   }

  ngOnInit(): void {
  }

}
