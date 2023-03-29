import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../src/app/user/user';
import { UsersApiService } from '../../services/users-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'view-user',
  templateUrl: './view-user.component.html',
})
export class ViewUserComponent implements OnInit {

  @Input()
  id!: number;

  user!: User;

  constructor(
    public usersApi: UsersApiService,
    private modalService: NgbModal,
  ) { }
    
   
  ngOnInit(): void {
    this.usersApi.getUser(this.id).subscribe(u => {
      this.user = u;
    })
  }

  open(content: any) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
	}
    
}