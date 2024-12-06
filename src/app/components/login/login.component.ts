import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { subscribe } from 'diagnostics_channel';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj: any = {

    "EmailId": "",
    "Password": ""
  };

  http = inject(HttpClient);

  constructor(private router: Router) { }

  onLogin() {
    console.log("Navegando al componente home");
    this.router.navigateByUrl("home");

    // this.http.post("https://freeapi.miniprojectideas.com/api/User/Login", this.loginObj).subscribe((res: any) => {
    //   if (res.result) {
    //     alert("Login Success");
    //   } else {
    //     alert("Check email or password");
    //   }
    // })
  }
}
