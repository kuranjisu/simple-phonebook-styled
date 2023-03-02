import { Component } from '@angular/core';
import { Contact } from 'src/app/interfaces/contact';
import { CONTACTS } from 'src/app/mock-data/mock-contacts';
import * as uuid from 'uuid';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {
  contacts = CONTACTS;
  newName = '';
  newEmail = '';
  newNumber = '';
  selectedContacts?: Contact;
  
  addContact(){
      const id = uuid.v4()
      this.contacts.push({name: this.newName, email: this.newEmail, number: this.newNumber, }) 
      console.log (id);
    };

  deleteContact(number: Contact){
    var index = this.contacts.indexOf(number) 
    if(index !== -1){
      this.contacts.splice(index, 1)
    }
  };

  updateContact(contact: Contact){
    this.selectedContacts = contact;
  }
}