var contactManager;
(function (contactManager) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController() {
                this.contacts = [];
                this.showEdit = false;
                var ss = sessionStorage.getItem('key');
                if (ss == null) {
                    this.contacts = [];
                }
                else {
                    this.contacts = JSON.parse(ss);
                }
            }
            HomeController.prototype.addContact = function (contact) {
                if (this.contacts.length == 0) {
                    contact.id = 1;
                }
                else {
                    contact.id = this.contacts[this.contacts.length - 1].id + 1;
                }
                this.contacts.push(contact);
                var change = JSON.stringify(this.contacts);
                var myStorage = sessionStorage.setItem('key', change);
                window.location.reload();
            };
            HomeController.prototype.deleteContact = function (id) {
                for (var i = 0; i < this.contacts.length; i++) {
                    if (this.contacts[i].id == id) {
                        this.contacts.splice(i, 1);
                        var change = JSON.stringify(this.contacts);
                        var myStorage = sessionStorage.setItem('key', change);
                        window.location.reload();
                    }
                }
            };
            HomeController.prototype.showEditButton = function (id) {
                for (var i = 0; i < this.contacts.length; i++) {
                    if (this.contacts[i].id == id) {
                        this.contactToEdit = this.contacts[i];
                        console.log(this.contactToEdit);
                    }
                }
                this.showEdit = !this.showEdit;
            };
            HomeController.prototype.editContact = function () {
                for (var i = 0; i < this.contacts.length; i++) {
                    if (this.contacts[i].id == this.contactToEdit.id) {
                        this.contacts[i] = this.contactToEdit;
                        var change = JSON.stringify(this.contacts);
                        var myStorage = sessionStorage.setItem('key', change);
                        window.location.reload();
                    }
                }
            };
            HomeController.prototype.removeAllContacts = function () {
                this.contacts = [];
                var change = JSON.stringify(this.contacts);
                var myStorage = sessionStorage.setItem('key', change);
                window.location.reload();
            };
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        angular.module('contactManager').controller('HomeController', HomeController);
    })(Controllers = contactManager.Controllers || (contactManager.Controllers = {}));
})(contactManager || (contactManager = {}));
