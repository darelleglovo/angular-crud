import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms'

import { UserCrudService } from '../services/user-crud.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private userService: UserCrudService, private router: Router) { }

    loginForm = new FormGroup({
		username: new FormControl(''),
		password: new FormControl('')
	})

  ngOnInit() {
  }

  onLogin() {
		if (!this.loginForm.valid) {
			return;
		}
		this.userService.loginUser(this.loginForm.value)
		.subscribe(data => {
			console.log(data)
			alert("User logged in..")
			this.router.navigate(['/login']);
		}, err => {
			alert("An error occured..")
		});
	}

}
