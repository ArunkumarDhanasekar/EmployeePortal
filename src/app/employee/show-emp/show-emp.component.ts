import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css'],
})
export class ShowEmpComponent implements OnInit {
  constructor(private service: SharedService) {}
  EmployeeList: any = [];
  ModalTitle: string;
  ActivateAddEditEmpComp: boolean = false;
  emp: any;

  ngOnInit(): void {
    this.refreshEmployeeList();
  }

  addClick() {
    this.emp = {
      EmployeeId: 0,
      EmployeeName: '',
      Department: '',
      DateOfJoining: '',
      PhotoFileName: 'anonymous.png',
    };
    console.log('emp', this.emp);
    this.ModalTitle = 'Add Employee';
    this.ActivateAddEditEmpComp = true;
  }

  editClick(item) {
    this.emp = item;
    this.ModalTitle = 'Edit Employee';
    this.ActivateAddEditEmpComp = true;
    console.log('aaa', this.ActivateAddEditEmpComp);
  }

  deleteClick(id) {
    if (confirm('Are you sure??')) {
      this.service.deleteEmployee(id.EmployeeId).subscribe((data) => {
        console.log('delete', data);
        alert(data.toString());
        this.refreshEmployeeList();
      });
    }
    console.log(id.EmployeeId);
  }
  closeClick() {
    this.ActivateAddEditEmpComp = false;
    this.refreshEmployeeList();
  }
  refreshEmployeeList() {
    this.service.getEmployeeList().subscribe((data) => {
      this.EmployeeList = data;
    });
  }
}
