import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mergeMap, Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpProductService {

  constructor(private _http: HttpClient) { }
  //** Products */
  public products$: Observable<any> = this._http.get<any>('assets/data/product-data.json').pipe(mergeMap(({ vB20Item, ...rest }) => {
    return of(vB20Item);
  }))
  private selectedProductSubject = new Subject<any>();
  public selectedProductAction$ = this.selectedProductSubject.asObservable();
  public selectedProductChange(id: number): void {
    this.selectedProductSubject.next(id);
  }
  //** Tab Products*/
  private selectedTabSubject = new Subject<any>();
  public selectedTabAction$ = this.selectedTabSubject.asObservable();
  public selectedTabChange(tabSelected: any): void {
    this.selectedTabSubject.next(tabSelected);
  }


}
