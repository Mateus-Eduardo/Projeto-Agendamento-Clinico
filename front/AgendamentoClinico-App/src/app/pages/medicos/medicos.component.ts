import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { DATA_PEOPLE } from './model/data-people';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { CadastroMedicosComponent } from './cadastro-medicos/cadastro-medicos.component';
import { EditarMedicosComponent } from './editar-medicos/editar-medicos.component';


@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.scss']
})
export class MedicosComponent implements AfterViewInit {

  public dataSource = new MatTableDataSource(DATA_PEOPLE);

  public displayColumns: string[] = ['name', 'cpf', 'address', 'phone', 'city', 'actions'];

  public cadastroForm: FormGroup;

  constructor(public dialog: MatDialog, private fb: FormBuilder) {

    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required],
      especialidade: ['', Validators.required],
      cpf: ['', [Validators.required]],
      endereco: ['', Validators.required],
      cidade: ['', Validators.required]
      
    });
  }

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

  AddMedico(): void {
    const dialogRef = this.dialog.open(CadastroMedicosComponent, {
      width: '40%', 
      disableClose: true,
      data: { cadastroForm: this.cadastroForm }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    
    });
  }

  EditarMedico(): void {
    const dialogRef = this.dialog.open(EditarMedicosComponent, {
      width: '40%',
      disableClose: true,
      data: { cadastroForm: this.cadastroForm }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // Add any additional logic here after the dialog is closed
    });
  }

  editUser(id: number) {
    //esperando o backend
  }

  deleteUser(id: number) {
    //esperando o backend
  }

}