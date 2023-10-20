import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  constructor() { }

  public senha: string = '';
  public telefone: string = '';
  public type_senha:string = 'passaword';
  public icon_senha:string = 'eye';
  
  ngOnInit() {
  }

  showSenha(){
    if (this.type_senha == 'password'){
        this.type_senha = 'text';
        this.icon_senha = 'eye';
    }else{
      this.type_senha = 'password';
      this.icon_senha =  'eye-off';
    }
  }

}
