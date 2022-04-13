import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Api } from 'src/app/services/api.service';
import { PagesService } from 'src/app/services/pages.service';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers: [PagesService, Api, ContactService]
})
export class ContactComponent implements OnInit {

  public page: any = {
    title: '',
    picture: {lg: ''},
    content: ''
  };

  public contact: {
    name: string,
    phone: number|null,
    consult: string
  };

  public error: boolean = false;
  public success: boolean = false;

  constructor(
    private _pages: PagesService,
    private _contact: ContactService,
    private _router: Router
  ) {
    this.contact = {name: '', phone: null, consult: ''};
  }

  ngOnInit(): void {
    this.getPage('contacto');
  }

  getPage(slug: string|number){
    this._pages.getPage(slug).subscribe(
      response => {
        this.page = response.page;
      }
    );
  }

  sendContact(form: any){
    this._contact.send(this.contact).subscribe(() => {
      response: {
        this.success = true;
        this.error = false;
        form.reset();
        this._router.navigate(['']);
      }
      error: {
        this.success = false;
        this.error = true;
      }
    });
  }
  
}
