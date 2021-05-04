import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
   // this.logout()
  }
  title = 'my-app';
  url="//localhost:8000/"
  email:string = ""
  password:string = ""
  constructor(private http: HttpClient,private router: Router) { }

    login(){
      this.http.get(this.url+"sanctum/csrf-cookie",{
        withCredentials:true,
      }).subscribe(()=>{
        this.http.post<any>(this.url+'api/login', { 
          email:this.email,
          password:this.password
        },{
          withCredentials:true
        }).subscribe(data => {
          console.log(data)
          this.router.navigateByUrl('/dashboard');
        })

      });
    }

    logout(){
      this.http.get(this.url+"sanctum/csrf-cookie",{
        withCredentials:true,
      }).subscribe(()=>{
        this.http.post<any>(this.url+'api/logout', {
        },{
          withCredentials:true
        }).subscribe(data => {
          
        })
  
      });
    }

    

}
