import {HttpRequest, HttpHandler, HttpHeaders, HttpInterceptor, HttpEvent} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {TokenService} from "../token/token.service";
import {Observable} from "rxjs";

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor{
  constructor(
    private tokenService: TokenService
  ) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.tokenService.token;
    if (token) {
      const authReq = request.clone({
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token
        })
      });
      return next.handle(authReq);
    }
    return next.handle(request);
  }
}
