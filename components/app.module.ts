import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { IndexComponent } from './index/index.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CreateGroupComponent } from './create-group/create-group.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EditGroupComponent } from './edit-group/edit-group.component';

export const SERVER_URL = 'http://localhost:8000'

@NgModule({
    declarations: [
        IndexComponent,
        ViewUserComponent,
    ],
    providers: [],
    bootstrap: [IndexComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NgbModule,
        FormsModule,
        CreateUserComponent,
        EditUserComponent ,
        CreateGroupComponent,
        EditGroupComponent
    ]
})
export class AppModule { }
