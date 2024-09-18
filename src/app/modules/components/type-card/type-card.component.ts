import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TypeResponse} from "../../../services/models/type-response";

@Component({
  selector: 'app-type-card',
  standalone: true,
  imports: [],
  templateUrl: './type-card.component.html',
  styleUrl: './type-card.component.scss'
})
export class TypeCardComponent {
  private _type: TypeResponse = {};
  private _typeCover: string | undefined;


  constructor() {

  }

  get type(): TypeResponse {
    return this._type
  }

  get typeCover(): string | undefined {
    if (this._type.activityImage) {
      return 'data:image/jpg;base64,' + this._type.activityImage;
    }
    return 'https://source.unsplash.com/user/c_v_r/1900x800';
  }

  @Output() private name: EventEmitter<TypeResponse> = new EventEmitter<TypeResponse>();
  @Output() private details: EventEmitter<TypeResponse> = new EventEmitter<TypeResponse>();

  onShowDetails() {
    this.details.emit(this._type);
  }

  @Input()
  set type
  (value: TypeResponse) {
    this._type = value;
  }

  movableCards() {
    let cards = document.querySelectorAll<HTMLElement>('.content');
    cards.forEach(
      card => {
        card.addEventListener('mousemove', (e: MouseEvent) => {
          let positionPx = e.x - card.getBoundingClientRect().left;
          let positionX = (positionPx / card.clientWidth) * 100;
          console.log(positionX, positionPx);

          let positionPy = e.y - card.getBoundingClientRect().top;
          let positionY = (positionPy / card.clientHeight) * 100;


          card.style.setProperty('--rX', (0.5) * (50 - positionY) + 'deg');
          card.style.setProperty('--rY', -(0.5) * (50 - positionX) + 'deg');
        })
        card.addEventListener('mouseout', () => {
          card.style.setProperty('--rX', '0deg');
          card.style.setProperty('--rY', '0deg');
        })
      })
  }

  // slider(){
  //   let cards = document.querySelectorAll<HTMLElement>('.content .card');
  //   let next = document.getElementById('next');
  //   let prev = document.getElementById('prev');
  //
  //   let active = 3;
  //   function loadShow(){
  //     let stt = 0;
  //     cards[active].style.transform = `none`;
  //     cards[active].style.zIndex = '1';
  //     cards[active].style.filter = 'none';
  //     cards[active].style.opacity = '1';
  //     for(let i = active + 1; i < cards.length; i++){
  //       stt++;
  //       cards[i].style.transform = `translateX(${120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`;
  //       cards[i].style.zIndex = String(-stt);
  //       cards[i].style.filter = 'blur(5px)';
  //       cards[i].style.opacity = stt > 2 ? '0' : '0.6';
  //     }
  //     stt = 0;
  //     for(let i = active - 1; i >= 0; i--){
  //       stt++;
  //       cards[i].style.transform = `translateX(${-120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(1deg)`;
  //       cards[i].style.zIndex = String(-stt);
  //       cards[i].style.filter = 'blur(5px)';
  //       cards[i].style.opacity = stt > 2 ? '0' : '0.6';
  //     }
  //   }
  //   loadShow();
  //   next.onclick = function(){
  //     active = active + 1 < cards.length ? active + 1 : active;
  //     loadShow();
  //   }
  //   prev.onclick = function(){
  //     active = active - 1 >= 0 ? active - 1 : active;
  //     loadShow();
  //   }
  // }
}
