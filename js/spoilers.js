'use strict';

$(function()
{
    $('.custom-block.custom-block-spoiler').each(function()
    {
        $(this)
            .prepend('<div class="custom-block-header" data-visible="false">Afficher le contenu masqué</div>')
            .find('.custom-block-body').hide();
    });

    $('.custom-block.custom-block-spoiler .custom-block-header').on('click', function()
    {
        let $this = $(this);
        let visible = $this.attr('data-visible') === 'true';

        $this.attr('data-visible', !visible);
        $this.text(visible ? 'Afficher le contenu masqué' : 'Masquer le contenu');

        $this.parent().find('.custom-block-body').toggle();
    });
});
