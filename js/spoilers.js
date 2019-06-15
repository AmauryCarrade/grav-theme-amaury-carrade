'use strict';

$(function()
{
    $('.custom-block.custom-block-spoiler').each(function()
    {
        let $head = $(this).find('.custom-block-heading');
        let heading = null;

        if ($head)
        {
            heading = $head.html();
            $head.attr('aria-hidden', true).hide();
        }

        $(this)
            .prepend('<div class="custom-block-spoiler-header" data-visible="false">Afficher le contenu masqué</div>')
            .find('.custom-block-body').hide();

        if (heading)
        {
            $(this).find('.custom-block-spoiler-header')
                .data('heading', heading)
                .html(heading + ' ⋅ Cliquer pour afficher')
        }
    });

    $('.custom-block.custom-block-spoiler .custom-block-spoiler-header').on('click', function()
    {
        let $this = $(this);
        let visible = $this.attr('data-visible') === 'true';

        $this.attr('data-visible', !visible);

        if ($this.data('heading'))
        {
            $this.html($this.data('heading') + ' ⋅ ' + (visible ? 'Afficher' : 'Masquer'));
        }
        else
        {
            $this.text(visible ? 'Afficher le contenu masqué' : 'Masquer le contenu');
        }

        $this.parent().find('.custom-block-body').toggle();
    });
});
