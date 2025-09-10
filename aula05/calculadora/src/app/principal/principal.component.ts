import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-principal',
  imports: [FormsModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {
  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;
  validacaoNumero1: Boolean = false;


  //                          this.numero1 >= 0 && this.numero1 <=10 && this.numero2 >=0 && this.numero2 <=10
  // Válidação colocando em array
  validacaoNumero2: Boolean = [this.numero1, this.numero2].every(n => n > 0 && n <= 10);

  estaNoIntervalo(valor: number, min: number, max: number): boolean {
    return valor >= min && valor <= max;
  }

  // this.estaNoIntervalo(this.numero1, 0, 10) && this.estaNoIntervalo(this.numero2, 0, 10)
  //Método 
  calcularResultado() {

    this.validacaoNumero1 = this.numero1 >= 0 && this.numero1 <= 10;
//Validação Soma.
/*     if (this.validacaoNumero1) {
      console.error(`Número 1: ${this.numero1}\nNúmero 2: ${this.numero2}`);
      console.log("Método chamado com sucesso !!");
      this.resultado = this.numero1 + this.numero2;

    }

    else {
      alert("Digite números entre 0 e 10");
      this.numero1 = 0;
      this.numero2 = 0;
    } */

      //Validação Subtração.
    if (this.validacaoNumero1) {
      console.error(`Número 1: ${this.numero1}\nNúmero 2: ${this.numero2}`);
      // console.log("Método chamado com sucesso !!");
      this.resultado = this.numero1 - this.numero2;

    }

    else {
      alert("Digite números entre 0 e 10");
      this.numero1 = 0;
      this.numero2 = 0;
    }


  }
}
