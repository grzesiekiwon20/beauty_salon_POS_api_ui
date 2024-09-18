import {Component, OnInit} from '@angular/core';
import {TypeRequest} from "../../../../services/models/type-request";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {TypeService} from "../../../../services/services/type.service";
import {NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-manage-type',
  standalone: true,
  imports: [
    RouterLink,
    NgIf,
    NgForOf,
    FormsModule
  ],
  templateUrl: './manage-type.component.html',
  styleUrl: './manage-type.component.scss'
})
export class ManageTypeComponent implements OnInit{


  errorMsg: Array<string> = [];
  typeRequest: TypeRequest = {
    name: '',
    description: '',
    category: '',
    price: ''
  };
  selectedBookCover: any;
  selectedPicture: string | undefined;

  constructor(
    private typeService: TypeService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    const typeId = this.activatedRoute.snapshot.params['typeId'];
    if (typeId) {
      this.typeService.getTypeById({
        'id': typeId
      }).subscribe({
        next: (type) => {
          this.typeRequest = {
            id: type.id,
            name: type.name as string,
            description: type.description as string,
            category: type.category as string,
            price: type.price as string,
            duration: type.duration as string
          };

            this.selectedPicture = 'data:image/jpg;base64,' + type.activityImage;

        }
      });
    }
  }

  saveType() {
    this.typeService.createType({
      body: this.typeRequest
    }).subscribe({
      next: (typeId) => {
        this.typeService.uploadTypeCoverPicture({
          'type-id': typeId,
          body: {
            file: this.selectedBookCover
          }
        }).subscribe({
          next: () => {
            this.router.navigate(['/activities']);
          }
        });
      },
      error: (err) => {
        console.log(err.error);
        this.errorMsg = err.error.validationErrors;
      }
    });
  }
  onFileSelected(event: any) {
    this.selectedBookCover = event.target.files[0];
    console.log(this.selectedBookCover);

    if (this.selectedBookCover) {

      const reader = new FileReader();
      reader.onload = () => {
        this.selectedPicture = reader.result as string;
      };
      reader.readAsDataURL(this.selectedBookCover);
    }
  }
}
