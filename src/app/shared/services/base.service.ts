import { HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { throwError } from "rxjs";


export class BaseService {

    httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
    }

    handleError(error: HttpErrorResponse) {

        return throwError(() => error.message);
    }
}