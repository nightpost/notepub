import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { NoteComponent } from './note.component';


const routes: Routes = [Route.withShell([
    { path: 'note', component: NoteComponent, data: { title: extract('About') } }
  ])];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class NoteRoutingModule {}
