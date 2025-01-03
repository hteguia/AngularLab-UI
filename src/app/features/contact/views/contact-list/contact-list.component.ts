import { Component, inject } from '@angular/core';
import { ContactHttpService } from '../../contact.http.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-list',
  imports: [CommonModule],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent {
  private readonly contactHttpService = inject(ContactHttpService);

  contacts$: Observable<any> = this.contactHttpService.getContacts();
  contactDetails: any;

  ngOnInit() {
    this.contactHttpService.getContacts().subscribe((contacts:any) => {
      console.log(contacts);
    });
  }

  showContactDetails(contact: any) {
    this.contactHttpService.getContact(contact.id).subscribe((contact: any) => {
      this.contactDetails = contact;
      console.log(contact);
    });
  }
}
