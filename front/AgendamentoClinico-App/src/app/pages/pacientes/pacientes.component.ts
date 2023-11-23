import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { CadastroPacientesComponent } from './cadastro-pacientes/cadastro-pacientes.component';
import { EditarPacientesComponent } from './editar-pacientes/editar-pacientes.component';
import { PacientesService } from '../../services/pacientes/pacientes.service';
import Paciente from '../../classes/pacientes/Paciente';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})
export class PacientesComponent implements AfterViewInit {

  cadastroForm!: FormGroup;

  pacientes: Paciente[] = [];

  dataSource: MatTableDataSource<Paciente> = new MatTableDataSource();
  displayColumns: string[] = ['nome_paciente', 'cpf_paciente', 'telefone_paciente', 'celular_paciente', 'endereco_paciente', 'cidade_paciente', 'actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;



  constructor(public dialog: MatDialog,
    private fb: FormBuilder,
    public pacienteService: PacientesService,
  ) { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  // Restante do código...

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit() {

    this.pacienteService
      .getPacientes()
      .subscribe((data: Paciente[]) => {
        this.pacientes = data;

        this.dataSource.data = this.pacientes;

        console.log(this.pacientes);
      });
  }

  AddPaciente(): void {
    const dialogRef = this.dialog.open(CadastroPacientesComponent, {
      width: '50%',
      disableClose: true,
      data: { cadastroForm: this.cadastroForm }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      this.dataSource.data = this.pacientes;
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


  deletarPaciente(id: number) {

  }


  // onSubmit() {
  //   if (this.cadastroForm.valid) {

  //     console.log('Formulário válido:', this.cadastroForm.value);
  //   }
  // }


  // limparFormulario() {
  //   this.cadastroForm.reset();
  // }
}
