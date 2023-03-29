import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IndexComponent } from 'components/index/index.component';
import { GroupsApiService } from 'services/groups-api.service';
import { User } from 'src/app/user/user';

@Component({
  selector: 'create-group',
  standalone: true,
  templateUrl: './create-group.component.html',
  imports: [
    FormsModule,
    NgFor
  ]
})
export class CreateGroupComponent {

	constructor(
		private groupsApi: GroupsApiService,
		private modalService: NgbModal,
		private indexComponent: IndexComponent
	) {}

	open(content: any) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
	}

	onSubmit(f: NgForm) {
		let data = f.form.value;
		this.groupsApi.createGroup(data).subscribe(res => {
			console.log('Group created');
			this.indexComponent.getEventEmitter().emit();
			this.modalService.dismissAll()
	   })

		return false;
	}
}
