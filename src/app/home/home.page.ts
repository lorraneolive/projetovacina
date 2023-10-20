import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public senha: string = '';
  public telefone: string = '';
  public type_senha:string = 'passaword';
  public icon_senha:string = 'eye';

  
  ngOnInit() {
  }

  showSenha(){
    if (this.type_senha == 'password'){
        this.type_senha = 'text';
        this.icon_senha = 'eye-off';
    }else{
      this.type_senha = 'password';
      this.icon_senha = 'eye';
    }
  }
}
