import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Contact} from './contacts/contact';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }

  getContacts():Observable<Contact[]>{
    return this.http.get<Contact[]>('http://localhost:3000/api/contacts');

  }

  addContact(newContact):Observable<Contact>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    }
    return this.http.post<Contact>('http://localhost:3000/api/contact',newContact,httpOptions);
  }

  deleteContact(id){
    return this.http.delete('http://localhost:3000/api/contact/'+id);
  }
}
