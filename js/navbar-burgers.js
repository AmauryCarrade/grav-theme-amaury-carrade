document.addEventListener('DOMContentLoaded', function ()
{
    const $navbar_burgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    if ($navbar_burgers.length > 0)
    {
        $navbar_burgers.forEach(function ($el)
        {
            $el.addEventListener('click', function ()
            {
                let target = $el.dataset.target;
                let $target = document.getElementById(target);

                $el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });
    }
});
