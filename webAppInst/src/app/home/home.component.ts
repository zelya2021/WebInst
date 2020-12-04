import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onLogout(){
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);
  }
  
  onProfile(){
    this.router.navigate(['/profile']);
  }
  onChat(){
    this.router.navigate(['/chat']);
  }

  mainPage(){
    this.router.navigate(['/home']);
  }
}
