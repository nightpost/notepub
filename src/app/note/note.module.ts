import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteRoutingModule } from './note-routing.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CommonMaterial } from '@app/material';
import { NoteComponent } from './note.component';

@NgModule({
    imports: [
        CommonModule,
        CommonMaterial,
        ReactiveFormsModule,
        TranslateModule,
        NgbModule,
        NoteRoutingModule
    ],
    declarations: [
        NoteComponent
    ]
})
export class NoteModule { }
