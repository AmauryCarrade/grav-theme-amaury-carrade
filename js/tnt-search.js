'use strict';

$(function()
{
    let $tntsearch = $('.tntsearch-field');
    let $search_results = $('.tntsearch-results');

    let config = $tntsearch.data('tntsearch');

    if (!config['live_update']) return;

    let running_ajax = [];

    console.log(config);

    $tntsearch.on('keyup', function(e)
    {
        // We stop all running requests to be sure they will not re-set the search results
        // if they are too slow.
        running_ajax.forEach(function (request)
        {
            request.abort();
        });

        let search = $tntsearch.val();
        if (search.length < config['min'])
        {
            $search_results.html('');

            if (window.history)
            {
                window.history.pushState(null, '', window.location.pathname);
            }

            return;
        }

        running_ajax.push($.get(
            config['uri'],
            {
                'q': search,
                'l': config['limit'],
                'sl': config['snippet'],
                'search_type': config['search_type'],
                'ajax': true
            }, function(result)
            {
                $search_results.html(result);

                if (window.history)
                {
                    window.history.pushState(null, '', window.location.pathname + '?q=' + search);
                }
            }
        ));
    });
});
