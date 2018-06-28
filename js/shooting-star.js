'use strict';

document.body.classList.remove('static-shooting-star');

window.addEventListener('load', function()
{
    document.body.classList.remove('static-shooting-star');

    function animate_shooting_star()
    {
        document.body.classList.add('animated-shooting-star');

        setTimeout(function()
        {
            document.body.classList.remove('animated-shooting-star');
        }, 1500);

        setTimeout(animate_shooting_star, (Math.floor(Math.random() * (60 - 20)) + 20) * 1000);
    }

    setTimeout(animate_shooting_star, (Math.floor(Math.random() * (10 - 2)) + 2) * 1000);
});
