import { Component } from '@angular/core';
import { EnderecoService } from './endereco.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  endereco: any ={};

  constructor(private endService: EnderecoService ) {
    
  }
   

  //}



  

  //   email: 'leonardo@toti.com',
  //   senha : '12345'

    //estos datos email son ejemplos de la clase 23}
  

  onSubmit(formulario) {
    
    if(formulario.form.status =='INVALID')
      alert('formulario invalido! Os dados estão incorretos!'); 

      this.endService.getEndereco(formulario.form.value.zipcode).subscribe(endereco => this.endereco = endereco);









    
    // this.usuService.postUsuario(formulario.form.value)  
    // .subscribe(resposta => {
    //   console.log(resposta);
    //   alert('Dados enviados com sucesso!');

   // });

      
    
  }

  }