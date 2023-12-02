import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { CadastroMedicosComponent } from './cadastro-medicos/cadastro-medicos.component';
import { EditarMedicosComponent } from './editar-medicos/editar-medicos.component';
import { MedicosService } from '../../services/medicos/medicos.service';
import Medico from 'src/app/classes/medicos/Medico';



@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.scss']
})
export class MedicosComponent implements AfterViewInit {

  cadastroForm!: FormGroup;

  medicos: Medico[] = [];

  dataSource: MatTableDataSource<Medico> = new MatTableDataSource();
  displayColumns: string[] = ['nome_medico', 'cpf_medico','crm_medico', 'telefone_medico', 'celular_medico', 'cidade_medico', 'actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(public dialog: MatDialog,
    private fb: FormBuilder,
    public medicoService: MedicosService,
  ) { }


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

    this.medicoService
      .getMedicos()
      .subscribe((data: Medico[]) => {
        this.medicos = data;

        this.dataSource.data = this.medicos;

        console.log(this.medicos);
      });
  }

  AddMedico(): void {
    const dialogRef = this.dialog.open(CadastroMedicosComponent, {
      width: '47%',

      disableClose: true,
      data: { cadastroForm: this.cadastroForm }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

  EditarMedico(): void {
    const dialogRef = this.dialog.open(EditarMedicosComponent, {
      width: '47%',
      disableClose: true,
      data: { cadastroForm: this.cadastroForm }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // Add any additional logic here after the dialog is closed
    });
  }


  deletarMedico(id: number) {

  }

}
