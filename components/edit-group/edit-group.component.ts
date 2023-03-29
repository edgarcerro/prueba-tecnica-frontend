import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IndexComponent } from 'components/index/index.component';
import { GroupsApiService } from 'services/groups-api.service';
import { UsersApiService } from 'services/users-api.service';
import { Group } from 'src/app/group/group';

@Component({
  selector: 'edit-group',
	standalone: true,
	templateUrl: './edit-group.component.html',
	imports: [
    FormsModule,
		NgFor,
    NgIf
	]
})
export class EditGroupComponent {
  @Input()
  group!: Group;

	constructor(
		private groupsApi: GroupsApiService,
		private modalService: NgbModal,
		private indexComponent: IndexComponent
	) {}

	open(content: any) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
	}

	onSubmit(f: NgForm) {
		this.groupsApi.updateGroup(this.group).subscribe(res => {
			console.log('Group changed');
			this.indexComponent.getEventEmitter().emit();
			this.modalService.dismissAll()
	   })

		return false;
	}
}
