import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DATA_PEOPLE } from './model/data-people';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { CadastroPacientesComponent } from './cadastro-pacientes/cadastro-pacientes.component';
import { EditarPacientesComponent } from './editar-pacientes/editar-pacientes.component';


@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})



export class PacientesComponent implements AfterViewInit {

  public dataSource = new MatTableDataSource(DATA_PEOPLE);

  public displayColumns: string[] = ['name', 'cpf', 'address', 'phone', 'city', 'actions'];

  public cadastroForm: FormGroup;

  constructor(public dialog: MatDialog, private fb: FormBuilder) {

    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required],
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

  AddPaciente(): void {
    const dialogRef = this.dialog.open(CadastroPacientesComponent, {
      width: '50%',
      disableClose: true,
      data: { cadastroForm: this.cadastroForm }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

  EditarPaciente(): void {
    const dialogRef = this.dialog.open(EditarPacientesComponent, {
      width: '50%',
      disableClose: true,
      data: { cadastroForm: this.cadastroForm }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

  editUser(id: number) {

  }

  deleteUser(id: number) {

  }


  onSubmit() {
    if (this.cadastroForm.valid) {

      console.log('Formulário válido:', this.cadastroForm.value);
    }
  }


  limparFormulario() {
    this.cadastroForm.reset();
  }
}
