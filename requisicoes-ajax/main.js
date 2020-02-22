var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/brunomarques-br');
xhr.send(null);

xhr.onreadystatechange = function(){
     //verifica se a resposta voltou.
     if(xhr.readyState === 4){
         console.log(JSON.parse(xhr.responseText));
     }
}
