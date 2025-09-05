let form = document.querySelector('form');

form.addEventListener('submit',function(event){
    event.preventDefault();
});

// change Event
let user = document.querySelector("input");
user.addEventListener('change',function(event){
    console.log('change event');
    console.log('final value',this.value); 
});