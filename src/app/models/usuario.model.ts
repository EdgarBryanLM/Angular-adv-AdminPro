import { environment } from "src/environments/environment";

export class Usuario{


    constructor(
        public role:string,
        public google:boolean,
        public nombre:string,
        public password:string,
        public email:string,
        public img:string,
        public id:string){
    
    
    }

    imprimir(){
    console.log(this.imagenUrl);
    
    };


    get imagenUrl(){
        if (this.img.includes('https')) {
            return this.img;
            
        }
        if (this.img) {
            console.log(environment.url+'upload/usuarios/'+this.img);
            
            return  environment.url+'upload/usuarios/'+this.img
        }else{
            return environment.url+'upload/usuarios/noimagen';
        }
     
    }
};