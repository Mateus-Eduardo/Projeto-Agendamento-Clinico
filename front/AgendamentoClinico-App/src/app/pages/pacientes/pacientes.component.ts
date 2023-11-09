import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { DATA_PEOPLE } from './model/data-people';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { CadastroPacientesComponent } from './cadastro-pacientes/cadastro-pacientes.component';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})

export class PacientesComponent implements AfterViewInit {

  public dataSource = new MatTableDataSource(DATA_PEOPLE);

  public displayColumns: string[] = ['name', 'cpf', 'address', 'phone', 'city', 'actions'];

  constructor (public dialog: MatDialog) {}

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
  AddPaciente(): void {
    const dialogRef = this.dialog.open(CadastroPacientesComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    
    });
  }
  

  editUser(id: number) {
    //esperando o backend
  }

  deleteUser(id: number) {
    //esperando o backend
  }

  


}

