const habits =document.querySelectorAll('.habit-btn');


habits.forEach(habit => {
    habit.addEventListener('click', ()=> {
        console.log('clicked');//#endregion
        habit.classList.toggle('completed');
        
    })

    })
