import { Component, OnInit, OnDestroy,  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


import { Injectable } from '@angular/core';
@Component({
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
@Injectable()
export class SignupComponent implements OnInit, OnDestroy {
  messageRegistro: string;
  isLoading = false;
  private authStatusSub: Subscription;

  constructor(
    public authService: AuthService,
     ) {}

  ngOnInit() {
    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(
      authStatus => {
        this.isLoading = false;
      }
    );
  }

  onSignup(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    this.authService.createUser(form.value.email, form.value.password);
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }
}
