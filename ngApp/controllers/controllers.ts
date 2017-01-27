namespace contactManager.Controllers {

    export class HomeController {
        public contacts = [];
        public showEdit = false;
        public contactToEdit;
        constructor() {

            let ss = sessionStorage.getItem('key')
            if (ss == null) {
                this.contacts = []
            } else {
                this.contacts = JSON.parse(ss)
            }

        }

        public addContact(contact) {
            if (this.contacts.length == 0) {
                contact.id = 1;
            } else {
                contact.id = this.contacts[this.contacts.length - 1].id + 1;
            }

            this.contacts.push(contact);
            let change = JSON.stringify(this.contacts);
            let myStorage = sessionStorage.setItem('key', change)
            window.location.reload();
        }

        public deleteContact(id) {
            for (var i = 0; i < this.contacts.length; i++) {
                if (this.contacts[i].id == id) {
                    this.contacts.splice(i, 1);
                    let change = JSON.stringify(this.contacts);
                    let myStorage = sessionStorage.setItem('key', change)
                    window.location.reload();
                }
            }
        }

        public showEditButton(id) {

            for (var i = 0; i < this.contacts.length; i++) {
                if (this.contacts[i].id == id) {
                    this.contactToEdit = this.contacts[i];
                    console.log(this.contactToEdit)
                }
            }
            this.showEdit = !this.showEdit;
        }

        public editContact() {
            for (var i = 0; i < this.contacts.length; i++) {
                if (this.contacts[i].id == this.contactToEdit.id) {
                    this.contacts[i] = this.contactToEdit;
                    let change = JSON.stringify(this.contacts);
                    let myStorage = sessionStorage.setItem('key', change)
                    window.location.reload();
                }
            }

        }

        public removeAllContacts() {
            this.contacts = [];
            let change = JSON.stringify(this.contacts);
            let myStorage = sessionStorage.setItem('key', change)
            window.location.reload();
        }

    }
    angular.module('contactManager').controller('HomeController', HomeController)


}
