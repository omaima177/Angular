import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
// import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-forum',
  imports: [ReactiveFormsModule],
  templateUrl: './user-forum.html',
  styleUrl: './user-forum.css'
})
export class UserForum {

  // Méthode 1 : FormGroup / FormControl (en commentaire)
  // userForm = new FormGroup({
  //   username: new FormControl(''),
  //   email: new FormControl(''),
  //   password: new FormControl(''),
  //   adresse: new FormControl('Ariana')
  // });

  // Méthode 2 : FormBuilder (active)
  private fb = inject(FormBuilder);

  userForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required,Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    adresse: ['Ariana']
  });

  onSubmit() {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }
    console.log(this.userForm.value);
  }
}