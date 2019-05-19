import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms'

import { UserCrudService } from '../services/user-crud.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

	userProfileForm = new FormGroup({
		firstName: new FormControl(''),
		lastName: new FormControl(''),
		username: new FormControl(''),
		password: new FormControl('')
	})

	constructor(private userService: UserCrudService, private router: Router) { }

	ngOnInit() {
	}

	onSubmit() {
		if (!this.userProfileForm.valid) {
			return;
		}
		// console.log(this.userProfileForm.value)
		this.userService.addUser(this.userProfileForm.value)
		.subscribe(data => {
			alert("User created..")
			this.router.navigate(['/login']);
		}, err => {
			alert("An error occured..")
		});
	}

}
