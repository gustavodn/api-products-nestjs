import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { ProductInterface } from '../interfaces/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
    BASE_URL = 'http://localhost:3000';

    constructor( private http: HttpClient ) { }

    getProducts(): Observable <ProductInterface[]> {
        return this.http.get<ProductInterface[]>(`${this.BASE_URL}/product`);
    }
    getProduct(id: string): Observable <ProductInterface> {
        return this.http.get<ProductInterface>(`${this.BASE_URL}/product/${id}`);
    }
    createProduct(product: ProductInterface): Observable<ProductInterface>  {
        return this.http.post<ProductInterface>(`${this.BASE_URL}/product/create`, product);
    }
    updateProduct(id: string, product: ProductInterface): Observable<ProductInterface> {
        return this.http.put<ProductInterface>(`${this.BASE_URL}/product/update?productID=${id}`, product);
    }

    deleteProduct(id: string): Observable<ProductInterface> {
        return this.http.delete<ProductInterface>(`${this.BASE_URL}/product/delete?productID=${id}`);
    }




}
