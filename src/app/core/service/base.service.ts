import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

export abstract class BaseService {

  protected constructor (public http: HttpClient) {}

  protected get(url: string, responseType?: any, params?: HttpParams): Observable<any> {
    return this.http.get(`${environment.apiUrl}/${url}`, {
      responseType: responseType,
      params
    }).map((res: any) => {
      try {
        return JSON.parse(res.toString());
      } catch (e) {
        return res;
      }
    })
  }

  protected post(url: string, payLoad?: any, responseType?: any, params?: HttpParams): Observable<any> {
    return this.http.post(`${environment.apiUrl}/${url}`, payLoad, {
      responseType: responseType,
      params
    }).map((res: any) => {
      try {
        return JSON.parse(res.toString());
      } catch (e) {
        return res;
      }
    });
  }

  protected delete(url: string): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/${url}`).map((res: any) => {
      try {
        return JSON.parse(res.toString());
      } catch (e) {
        return res;
      }
    });
  }

  protected put(url: string, payLoad: any, responseType?: any, params?: HttpParams): Observable<any> {
    return this.http.put(`${environment.apiUrl}/${url}`, payLoad, {
      responseType: responseType,
      params
    }).map((res: any) => {
      try {
        return JSON.parse(res.toString());
      } catch (e) {
        return res;
      }
    });
  }

  protected patch(url: string, payLoad: any, responseType?: any, params?: HttpParams): Observable<any> {
    return this.http.patch(`${environment.apiUrl}/${url}`, payLoad, {
      responseType: responseType,
      params
    }).map((res: any) => {
      try {
        return JSON.parse(res.toString());
      } catch (e) {
        return res;
      }
    });
  }

  public getPaginated(url: string, pageNumber: number, pageSize: number): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/${url}`, {
      params: new HttpParams()
        .set('first', pageNumber.toString())
        .set('pageSize', pageSize.toString())
    }).map((res: any) => {
      try {
        return JSON.parse(res.toString());
      } catch (e) {
        return res;
      }
    });
  }
}
