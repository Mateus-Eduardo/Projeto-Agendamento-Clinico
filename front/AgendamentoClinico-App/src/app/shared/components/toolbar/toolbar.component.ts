import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FuncionarioComponent } from 'src/app/pages/funcionario/funcionario.component';
import { EditarFuncionarioComponent } from 'src/app/pages/funcionario/editar-funcionario/editar-funcionario.component';
import { CadastroFuncionarioComponent } from 'src/app/pages/funcionario/cadastro-funcionario/cadastro-funcionario.component';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Input() popText = true;
  @Input() menuTitle = '';
  @Input() smallScreen = false;
  @Input() title: string = "";
  cadastroForm: any;
  dialogRef: any;

  constructor(private dialog: MatDialog) {}
  
  AdicionarUsuario(): void {
    const dialogRef = this.dialog.open(CadastroFuncionarioComponent, {
      width: '46%',
      disableClose: true,
      data: { cadastroForm: this.cadastroForm }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // Add any additional logic here after the dialog is closed
    });
  }
  EditarUsuario(): void {
    const dialogRef = this.dialog.open(EditarFuncionarioComponent, {
      width: '46%',
      disableClose: true,
      data: { cadastroForm: this.cadastroForm }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // Add any additional logic here after the dialog is closed
    });
  }
  sair(): void {
    this.dialogRef.close();
  }

  
}
