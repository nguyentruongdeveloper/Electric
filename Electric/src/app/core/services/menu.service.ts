import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from '../../../../node_modules/rxjs';
import { environment } from '../../../environments/environment';
import { IMenu } from '../models';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private httpClient: HttpClient) { }
  getAllMenu(): Observable<IMenu[]> {

    return this.httpClient.get<IMenu[]>(`${environment.WebAdmin_API}/menu`);
  }
}
