import { Component, OnInit } from '@angular/core';
import { ICustomer } from 'src/app/domain/icustomer';
import { CustomerServiceService } from 'src/app/services/customer-service.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  data: ICustomer[];

  constructor(private service: CustomerServiceService) { }


  ngOnInit(): void {
    this.service.getAllCustomers().subscribe(
      resp => this.data = resp,
      error => console.log('Attention: there is an error: ' + error)
    );
  }
}
