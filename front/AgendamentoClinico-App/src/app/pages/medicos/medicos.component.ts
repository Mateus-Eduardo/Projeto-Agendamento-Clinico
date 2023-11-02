import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { DATA_PEOPLE } from './model/data-people';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.scss']
})
export class MedicosComponent {

  public dataSource = new MatTableDataSource(DATA_PEOPLE);

  public displayColumns: string[] = ['name', 'cpf', 'address', 'phone', 'city', 'actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit() {


  }

  editUser(id: number) {
    //esperando o backend
  }

  deleteUser(id: number) {
    //esperando o backend
  }

}
