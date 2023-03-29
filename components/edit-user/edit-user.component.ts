import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IndexComponent } from 'components/index/index.component';
import { UsersApiService } from 'services/users-api.service';
import { Group } from 'src/app/group/group';
import { User } from 'src/app/user/user';

@Component({
  selector: 'edit-user',
	standalone: true,
	templateUrl: './edit-user.component.html',
	imports: [
    	FormsModule,
		NgFor,
      	NgIf
	]
})
export class EditUserComponent {
  @Input()
  user!: User;

  @Input()
  groups: Group[] = [];

	constructor(
		private usersApi: UsersApiService,
		private modalService: NgbModal,
		private indexComponent: IndexComponent
	) {}

	open(content: any) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
	}

	onSubmit(f: NgForm) {
		let data = f.form.value;
    this.user.userGroup = data.userGroup;
		this.usersApi.updateUser(this.user).subscribe(res => {
			console.log('User changed');
			this.indexComponent.getEventEmitter().emit();
			this.modalService.dismissAll()
	   })

		return false;
	}
}
