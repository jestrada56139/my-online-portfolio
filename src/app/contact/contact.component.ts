import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm, NgModel } from '@angular/forms';

class NewForm {
  sealName: string;
  firstName: string;
  email: string;
  lastName: string;
  content: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public newForm: NewForm;

  constructor(private http: HttpClient) {
    this.newForm = new NewForm();
    this.newForm.sealName = 'Jonathan Estrada';
  }


  addContact() {
    console.log(this.newForm);
    // this.http.post('https://seals-server.herokuapp.com' + '/contact-seals', this.newForm)
    // .subscribe(
    //   result => {
    //     console.log(result);
    //   },
    //   err => {
    //     console.log('Error- something is wrong!');
    //   });
  }




  // GetContacts() {
  //   this.http.get('http://f97209a8.ngrok.io/seals').subscribe(response => console.log(response));
  // }

  // example() {
  //   this.http.get('http://f97209a8.ngrok.io/seals').subscribe(response => {
  //     console.log(response);
  // },
  // err => {
  //   console.log('err');
  // });

  // }


  ngOnInit() {
  }

}
