import { Component, EventEmitter, OnInit } from '@angular/core';
import { UsersApiService } from '../../services/users-api.service';
import { GroupsApiService } from '../../services/groups-api.service';
import { User } from '../../src/app/user/user';
import { Group } from '../../src/app/group/group';


@Component({
  selector: 'app-root',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {

  ee = new EventEmitter<boolean>();

  users: User[] = [];
  groups: Group[] = [];

  closeResult = '';

	constructor(public usersApiService: UsersApiService,public groupsApiService: GroupsApiService) {}
    
  ngOnInit(): void {
    this.getUsers();
    this.getGroups();
    this.ee.subscribe(e => this.getUsers());
    this.ee.subscribe(e => this.getGroups());
  }

  getUsers() {
    this.usersApiService.listUsers().subscribe((data: User[]) => {
      this.users = data;
    }, error => {
      window.alert("Ha ocurrido un error obteniendo los usuarios.")
    })  
  }

  getGroups() {
    this.groupsApiService.listGroups().subscribe((data: Group[])=>{
      this.groups = data;
    }, error => {
      window.alert("Ha ocurrido un error obteniendo los grupos.")
    })  
  }
    
  deleteUser(id:number){
    this.usersApiService.deleteUser(id).subscribe(res => {
         this.users = this.users.filter(item => item.id !== id);
         console.log('User deleted successfully!');
    }, error => {
      window.alert("Ha ocurrido un error eliminando el usuario.")
    })
  }

  deleteGroup(id:number){
    this.groupsApiService.deleteGroup(id).subscribe(res => {
         this.groups = this.groups.filter(item => item.id !== id);
         console.log('Group deleted successfully!');
    }, error => {
      if (error.status === 400) {
        window.alert("Para eliminar el grupo primero hay que desasociar todos sus usuarios.")
        return;
      }

      window.alert("Ha ocurrido un error eliminando el grupo.")
    })
  }

  getEventEmitter() {
    return this.ee
  }
}
