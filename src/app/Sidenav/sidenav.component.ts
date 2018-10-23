import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidenav-fixed',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})

export class SidenavFixedComponent implements OnInit {
  private authStatusSub: Subscription;
  public id: string;
  create = true;
  constructor(
    private authService: AuthService,
    public route: ActivatedRoute,
  ) {}


  ngOnInit() {
    this.authStatusSub = this.authService
      .getAuthStatusListener()
      .subscribe(authStatus => {
      });
      this.route.paramMap.subscribe((paramMap: ParamMap) => {
        if (paramMap.has('idsId')) {
          this.create = false;
          this.id = paramMap.get('idsId');
        }
      });
  }
}

