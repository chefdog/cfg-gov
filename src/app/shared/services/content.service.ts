import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { ContentModel } from '../models/content.model';
import { Observable, catchError, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseModel } from '../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class ContentService extends BaseService {
  apiUrl = `${environment.api}/content`;
  constructor(private readonly http: HttpClient) {
    super();    
  }

  create(content: ContentModel): Observable<ContentModel> {
    const url = `${this.apiUrl}`;

    return this.http.post<ResponseModel>(url, content).pipe(
      catchError(this.handleError),
      map((response: ResponseModel) => {
        return response.data as ContentModel;
      })
    );
  }

  getMany(): Observable<Array<ContentModel>> {
    const url = `${this.apiUrl}`;

    return this.http.get<ResponseModel>(url).pipe(
      catchError(this.handleError),
      map((response: ResponseModel) => {
        return response.data as Array<ContentModel>;
      })
    );
  }
}
