import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private http: HttpClient,private router: Router) { }
  url="//localhost:8000/"

  ngOnInit(): void {
  }

  logout(){
    this.http.post<any>(this.url+'api/logout', {
    },{
      withCredentials:true
    }).subscribe(data => {
      
    });
  }
}
