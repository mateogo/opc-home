const KEY_ACCESS = "pbac-tablero-202301";
let ntries = 0
const MAX_TRIES = 3;

document.getElementById('ingreso01').addEventListener('click', function(e){ //say this is an anchor
   e.preventDefault();
   e.stopPropagation();

   let form = document.querySelector('#accessform');
   let data = new FormData(form);
   let accesskey = data.get('accesscode')

   accesskey = accesskey ? accesskey.toLowerCase() : ''; 
   console.log(accesskey);
   ntries += 1;

   if(accesskey === KEY_ACCESS && ntries <= MAX_TRIES){
        // bingo
        clearForm()
        openTablero()
   }else {
        if(ntries <= MAX_TRIES){
            messageAlert(`Código de acceso incorrecto (${ntries}/${MAX_TRIES})`)
            closeTablero()
    
        }else {
            messageAlert('Ha superado el límte de intentos de ingreso')
            closeTablero()
        }
   }
});

document.getElementById('cerrar01').addEventListener('click', function(e){ //say this is an anchor
    //do something
   e.preventDefault();
   e.stopPropagation();
   clearForm()
   closeTablero();      
});

function clearForm(){
    let form = document.querySelector('#accessform');
    form.reset();
}

function messageAlert(msj){
    let message = document.querySelector('#alert01');
    message.innerHTML = msj
}

function openTablero(){
    const div = document.querySelector('#tablero01')
    div.style.display = 'block';
    ntries = 0;
}

function closeTablero(){
    const div = document.querySelector('#tablero01')
    div.style.display = 'none';
}
