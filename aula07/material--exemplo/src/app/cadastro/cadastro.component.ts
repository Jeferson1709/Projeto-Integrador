import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field'

import { FlexLayoutModule } from "@angular/flex-layout";
import { MatCardHeader } from "@angular/material/card";
import { MatCardModule  } from "@angular/material/card";

@Component({
  selector: 'app-cadastro',
  imports: [FlexLayoutModule, MatCardHeader,MatCardModule , MatFormFieldModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

}
