import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { PaymentModel } from '../models/payment';

@Injectable({
    providedIn: 'root'
})
export class Payment {

    private apiUrl = 'https://insurance-api-dea5f4chd9cxdqa4.westus2-01.azurewebsites.net/api/Payments';

    constructor(private http: HttpClient) {
    }

    getPayments(): Observable<PaymentModel[]> {

        return this.http.get<PaymentModel[]>(
            this.apiUrl
        );
    }
}