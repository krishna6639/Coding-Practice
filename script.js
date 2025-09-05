let form = document.querySelector('form');

form.addEventListener('submit',function(event){
    event.preventDefault();
});
let user = document.querySelector("input");
user.addEventListener('input',function(event){
    console.log('input event');
    console.log('final value',this.value);
});
