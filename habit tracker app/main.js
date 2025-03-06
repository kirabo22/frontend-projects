const habits =document.querySelectorAll('.habit-btn');


habits.forEach(habit => {
    habit.addEventListener('click', ()=> {
        habit.classList.toggle('completed');
        
    });

    });

    const themeButton = document.getElementById('theme');
    themeButton.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
    });  