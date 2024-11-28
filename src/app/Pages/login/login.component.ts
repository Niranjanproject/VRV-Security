import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
     

  loginObj: any ={
     Username: '',
     Password: ''
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }
  onlogin(){
    if(this.loginObj.Username == 'admin' && this.loginObj.Password == 'admin@1234'){
       localStorage.setItem('role','admin');
        this.router.navigateByUrl('admin-dashboard')
    }else if (this.loginObj.Username == 'user' && this.loginObj.Password == 'user@1234'){
      localStorage.setItem('role','user')
      this.router.navigateByUrl('user-dashboard')
    }
  }
}
