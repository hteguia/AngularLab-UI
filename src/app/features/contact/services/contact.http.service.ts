import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { map, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ContactHttpService {
    private readonly http = inject(HttpClient);
   
    
    getContacts() : Observable<any> {
        return this.http.get('http://localhost:3000/contacts');
    }

    getContact(id: string) : Observable<any> {
        return this.getContacts().pipe(
            map((contacts: any) => {
                return contacts.find((contact: any) => contact.id === id);
            })
        );
    }
}