import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IndexComponent } from 'components/index/index.component';
import { UsersApiService } from 'services/users-api.service';
import { Group } from 'src/app/group/group';

@Component({
	selector: 'create-user',
	standalone: true,
	templateUrl: './create-user.component.html',
	imports: [
        FormsModule,
		NgFor
	]
})
export class CreateUserComponent {

	@Input()
	groups: Group[] = [];

	constructor(
		private usersApi: UsersApiService,
		private modalService: NgbModal,
		private indexComponent: IndexComponent
	) {}
	open(content: any) {
		if (this.groups.length === 0) {
			window.alert('Antes de crear un usuario debes de crear al menos un grupo');
			return;
		}
		
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
	}

	onSubmit(f: NgForm) {
		let data = f.form.value;
		this.usersApi.createUser(data).subscribe(res => {
			console.log('User created');
			this.indexComponent.getEventEmitter().emit();
			this.modalService.dismissAll()
	   })

		return false;
	}
}