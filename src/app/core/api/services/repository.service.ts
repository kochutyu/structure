import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Config } from 'src/app/core/configs/config';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  constructor(private httpClient: HttpClient) {
  }

  public get(route: string, params?: HttpParams): Observable<any> {
    const url = this.createUrl(route);
    return this.httpClient.get(url, { params });
  }

  public post(route: string, body?: any, headers?: any): Observable<any> {
    const url = this.createUrl(route);
    return this.httpClient.post(url, body, headers ? headers : this.generateHeaders());
  }

  public update(route: string, body?: any): Observable<any> {
    const url = this.createUrl(route);
    return this.httpClient.put(url, body, this.generateHeaders());
  }

  public delete(route: string): Observable<any> {
    const url = this.createUrl(route);
    return this.httpClient.delete(url);
  }

  private createUrl(route: string): any {
    return `${Config.apiUrl}/${route}`;
  }

  private generateHeaders(): any {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  }

}
