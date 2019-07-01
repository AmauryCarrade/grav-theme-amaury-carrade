document.addEventListener('DOMContentLoaded', function ()
{
    const $tocs = Array.prototype.slice.call(document.querySelectorAll('aside.table-of-contents'), 0);

    if ($tocs.length > 0)
    {
        $tocs.forEach(function ($el)
        {
            $el.querySelector('h4').addEventListener('click', function ()
            {
                $el.classList.toggle('is-visible');
            });
        });
    }
});
