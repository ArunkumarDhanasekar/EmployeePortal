import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { ShoDeptDupeComponent } from './department/sho-dept-dupe/sho-dept-dupe.component';
import { AddEditDeptDupeComponent } from './department/add-edit-dept-dupe/add-edit-dept-dupe.component';
import { DataTableComponent } from './data-table/data-table.component';

const routes: Routes = [
  { path: 'employee', component: EmployeeComponent },
  { path: 'department', component: DepartmentComponent },
  { path: 'dept-show', component: ShoDeptDupeComponent },
  { path: 'dept-add', component: AddEditDeptDupeComponent },
  { path: 'data-table', component: DataTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
