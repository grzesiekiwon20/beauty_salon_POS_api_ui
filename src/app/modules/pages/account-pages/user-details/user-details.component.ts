import {Component, OnInit} from '@angular/core';
import {UserResponse} from "../../../../services/models/user-response";
import {UserControllerService} from "../../../../services/services/user-controller.service";

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent  implements OnInit{

  private _user : UserResponse ={}

  constructor(
    private userService: UserControllerService
  ) {
  }

  get user(): UserResponse{
    return this._user
  }
  ngOnInit(): void {
    this.userService.getDetailsOfConnectedUser().subscribe(
      res =>
        this._user = res

    )
  }
  firstLetterUp(word:string): string{
    word = word.charAt(0).toUpperCase() + word.substring(1) ;
    return word
  }
}
