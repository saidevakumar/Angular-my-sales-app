import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Supplier } from './supplier.dto';

@Injectable({
  providedIn: 'root'
})

export class SupplierService {
   
    environment:string="https://northwind.vercel.app/api/";

    constructor(private http: HttpClient) { }
  
    public getAll(): Observable<Supplier[]> {
      return this.http.get<Supplier[]>(this.environment + 'suppliers');
    }
  
    public getById(id: Number): Observable<Supplier> {
      return this.http.get<Supplier>(this.environment + 'suppliers/' + id);
    }
  
    public save(supplier: Supplier): Observable<Supplier> {
      if (supplier.id) return this.http.put<Supplier>(
          this.environment + 'suppliers/' + supplier.id, 
          supplier
          );
  
      return this.http.post<Supplier>(this.environment + 'suppliers', supplier);
    }
  
  public delete(id?: number): Observable<Supplier> {
      return this.http.delete<Supplier>(this.environment + 'suppliers/' + id);
    }
  
      public create(): Observable<Supplier> {
      return of<Supplier>({
        id: 0,
        companyName: '',
        contactName: '',
        contactTitle: '',
        address: {
          city: '',
          phone: '',
          country: '',
        postalCode: 0,
        region: '',
        street: ''
      }
    })
  }
}