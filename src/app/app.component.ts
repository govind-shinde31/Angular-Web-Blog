import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular_WebBlogapp';

  constructor(private modalService:NgbModal){}
  loginModal() {
		const modalRef = this.modalService.open(LoginComponent);
		
	}
}
