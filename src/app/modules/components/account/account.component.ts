import {Component, OnInit} from '@angular/core';
import {TokenService} from "../../../notopenaiservices/token/token.service";
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {NgForOf, NgIf} from "@angular/common";
import {authGuard} from "../../../notopenaiservices/auth-guard/auth-guard.service";


@Component({
  selector: 'app-account',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink,
    RouterOutlet,
    NgIf
  ],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent implements OnInit{
  roles: Array<string> = ['']
  constructor(
     private tokenService : TokenService,
     private router: Router,
  ) {

  }

  ngOnInit(): void {
    const token = this.tokenService.token
    if(!token){
      this.router.navigate(['login'])
    }
  }

  protected readonly authGuard = authGuard;
}
