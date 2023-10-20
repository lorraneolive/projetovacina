import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class RequesicaoService {
  

  constructor(
    public http:HttpClient
  ) { }

  get(dados:any){
    return this.http.get('/requisicao',{
      params:{
        _dados:dados
      }
    });
  }
  post(formData:any){
    const httpOptions = {
      headers: new HttpHeaders({
        'Accss-Control-Allow-Origin' : '*'
      })
    };
    return this.http.post('/requisicao', formData,httpOptions);
  }
  
}
