const buttons = document.querySelectorAll('.social-links');
buttons.forEach(button => {
    button.addEventListener('click',()=>{
        if (!button.classList.contains('active')) {
            buttons.forEach(button => button.classList.remove('active'))
            button.classList.add('active')
        } else {
          button.classList.remove('active');
                console.log('Button is no longer active')
        }
            })    
});