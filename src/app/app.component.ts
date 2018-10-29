import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dish_name ='';
  material_temp='';
  materials_check='';
  materials=[];
  storage=[];
  showname='';
  isFalse=false;
  isTrue=false;
  match={};
  isin=true;
  add(){
    console.log(this.storage)
    this.materials = this.material_temp.replace(/\s+/g," ").split(' ');
    this.match[this.materials] = this.dish_name;
    for (var i=0;i<this.materials.length;i++){
      this.storage.push(this.materials[i])
    }
    console.log(this.storage);
  };
  check(){
    this.materials = this.materials_check.replace(/\s+/g," ").split(' ');
    this.isin=true;
    for(var i=0;i<this.materials.length;i++){
      if(this.storage.indexOf(this.materials[i])==-1){
        this.isin=false;
      })
    }
    if (this.isin){
      this.isTrue=true;
      this.isFalse=false;
      this.showname=this.match[this.materials];
    }
    else{
      this.isFalse=true;
      this.isTrue=false;
      console.log("false")
    }
  }
}
