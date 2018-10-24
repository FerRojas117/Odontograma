import { Component, OnInit, OnDestroy } from '@angular/core';
import { PageEvent } from '@angular/material';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { RevisarService } from './revisar.service';
import { Idents } from '../current-user.model';
@Component({
  selector: 'app-revisar',
  templateUrl: './revisar.component.html',
  styleUrls: ['./revisar.component.css']
})

export class RevisarComponent implements OnInit, OnDestroy {

  ids: Idents[] = [];
  isLoading = false;
  totalIds = 0;
  postsPerPage = 2;
  currentPage = 1;
  pageSizeOptions = [1, 2, 5, 10];
  userIsAuthenticated = false;
  userId: string;
  private revisarSub: Subscription;
  private authStatusSub: Subscription;

  constructor(
    public revisarService: RevisarService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.revisarService.getIds(this.postsPerPage, this.currentPage);
    this.userId = this.authService.getUserId();
    this.revisarSub = this.revisarService
      .getIdsUpdateListener()
      .subscribe((idsData: { ids: Idents[]; idsCount: number }) => {
        this.isLoading = false;
        this.totalIds = idsData.idsCount;
        this.ids = idsData.ids;
      });
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authStatusSub = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
        this.userId = this.authService.getUserId();
      });
  }

  onChangedPage(pageData: PageEvent) {
    this.isLoading = true;
    this.currentPage = pageData.pageIndex + 1;
    this.postsPerPage = pageData.pageSize;
    this.revisarService.getIds(this.postsPerPage, this.currentPage);
  }

  ngOnDestroy() {
    this.revisarSub.unsubscribe();
    this.authStatusSub.unsubscribe();
  }
}
