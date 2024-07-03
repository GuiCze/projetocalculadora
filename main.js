//https://github.com/GuiCze/projetocalculadora.git
const prompt = require('prompt-sync')();
let ent=true;
let nu2;
do{  
    console.log('Digite s,a,i,r para finalizar o processo a qualquer momento ou o primeiro numero para começar a calcular');
    let nu=prompt().toLowerCase().split('');
    let nu1 = +nu.join('');
if(nu.includes('s','a','i','r')){
    break;
}
else if(isNaN(nu1)){
    console.log('Digite um número valido');
}
else{
    console.log("Digite + para soma,- para subtração,/ para divisão,* para multiplicação ou % para porcentagem");
    ent=prompt().toLowerCase()
    if(ent.split('').includes('s','a','i','r')){
        break;
    }
    if(ent=='*'){
        nu=prompt().toLowerCase();
        nu2 = +nu;
        if(!isNaN(nu2)){
        console.log(nu1+' multiplicado por '+nu2+' é:'+nu1*nu2);
        }else{
            if(nu.split('').includes('s','a','i','r')){
                break;
            }
            console.log('Digite um número valido');
        }
    }
    if(ent=='-'){
        nu=prompt().toLowerCase();
        nu2 = +nu;
        if(!isNaN(nu2)){
            console.log(nu1+' menos '+nu2+' é:'+nu1-nu2);
        }
        else{
            if(nu.split('').includes('s','a','i','r')){
                break;
            }
            console.log('Número invalido');
        }
    }
    if(ent=='+'){
        nu=prompt().toLowerCase();
        nu2 = +nu;
        if(!isNaN(nu2)){
            console.log(nu1+' mais '+nu2+' é:'+(nu1+nu2));
        }else{
            if(nu.split('').includes('s','a','i','r')){
                break;
            }
            console.log('Digite um número valido');
        }
    }
    if(ent=='/'){
        nu=prompt().toLowerCase()
        nu2 = +nu;
        if(!isNaN(nu2)&&nu2!=0){
            console.log(nu1+' dividido por '+nu2+' é:'+nu1/nu2);
        }else{
            if(nu.split('').includes('s','a','i','r')){
                break;
            }
            else{
                console.log('Digite um número valido');
            }    
        }
    }
    
    if(ent=='%'){
        nu=prompt();
        nu2 = +nu;
        if(!isNaN(nu2)&&nu2!=0){
            console.log(nu1+' é:'+nu1/nu2*100+'% de '+nu2);
        }else{
            if(nu.split('').includes('s','a','i','r')){
                break;
            }
        console.log('Digite um número valido');
        }
    }
}
}while(ent);