import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {authGuard} from "../../../../notopenaiservices/auth-guard/auth-guard.service";
import {TypeResponse} from "../../../../services/models/type-response";
import {TypeService} from "../../../../services/services/type.service";
import {TypeCardComponent} from "../../../components/type-card/type-card.component";


@Component({
  selector: 'app-services-list',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink,
    RouterOutlet,
    NgIf,
    TypeCardComponent
  ],
  templateUrl: './services-list.component.html',
  styleUrl: './services-list.component.scss'
})
export class ServicesListComponent implements OnInit{
  typeResponse : Array<TypeResponse> = [];

  message = '';
  level: 'success' |'error' = 'success';

  constructor(
    private typeService: TypeService,
    private router: Router
  ) {}

  protected readonly authGuard = authGuard;

  ngOnInit(): void {
    this.findAllTypes();
  }

  private findAllTypes(){
    this.typeService.getAllTypes()
      .subscribe({
        next: (value) => {
          this.typeResponse = value
        }
      })
  }

  displayBookDetails(type : TypeResponse){
    this.router.navigate(['types' , 'details', type.id])
  }

  allServices(){
    this.router.navigate(['activities']);
  }
  onSelectClick(){

  }
}
