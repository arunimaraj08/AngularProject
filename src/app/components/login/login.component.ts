import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';
const _LOGIN_KEY = "_login_key"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  faLock = faLock;
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private auth: AuthService, private router: Router) { }
  

  ngOnInit(): void  {
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['admin']);
      // console.log("one")
    }
  }
  // ngOnChanges(): void  {
  //   if (this.auth.isLoggedIn()) {
  //     this.router.navigate(['admin']);
  //     console.log("two")
  //   }
  // }
  // onSubmit(): void {

  //   if (this.loginForm.valid) {
  //     this.auth.login(this.loginForm.value).subscribe(
  //       (result) => {
  //         console.log(result);
  //         this.auth._setLoginData(result)
  //         this.router.navigate(['/admin']);
  //       },
  //       (err: Error) => {
  //         alert(err.message);
  //       }
  //     );
  //   }
  // }
 
   onSubmit(): void {
    //  console.log(data.id)

    if (this.loginForm.valid) {
     
      this.auth.login(this.loginForm.value).subscribe(
        (result) => {
          console.log(result);
          this.auth._setLoginData(result)
          this.router.navigate(['/admin']);
        },
        (err: Error) => {
          alert(err.message);
        }
      );
    }
  }

}