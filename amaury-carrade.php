<?php
namespace Grav\Theme;

use Grav\Common\Theme;
use Grav\Theme\Event;

class AmauryCarrade extends Theme
{
    // Enables blueprints for the page admin.
    public $features = [
        'blueprints' => 1000,
    ];

    public static function getSubscribedEvents(): array
    {
        return [
            'onThemeInitialized' => ['onThemeInitialized', 0]
        ];
    }

    public function onThemeInitialized()
    {
        if ($this->isAdmin()) return;

        $this->enable([
            'onTwigExtensions' => ['onTwigExtensions', 0]
        ]);
    }

    public function onTwigExtensions()
    {
        /** @var $twig \Twig_Environment */
        $twig = $this->grav['twig']->twig();

        $twig->addFilter(new \Twig_SimpleFilter('shuffle', function($array)
        {
            $keys = array_keys($array);
            shuffle($keys);

            $new = [];
            foreach ($keys as $key) {
                $new[$key] = $array[$key];
            }

            return $new;
        }));

        $twig->addFilter(new \Twig_SimpleFilter('toRGBA', function($color, $opacity)
        {
            $color = strtolower(trim($color));

            // First check if we're dealing with rgb, rgba, or hex.

            // Transparency with less opacity is still transparency.
            if ($color === 'transparent')
            {
                return 'transparent';
            }

            // Hex
            else if (strpos($color, '#') === 0)
            {
                $color = str_replace('#', '', $color);

                // Hexadecimal to decimal RGB conversion
                $r = hexdec($color[0] . $color[1]);
                $g = hexdec($color[2] . $color[3]);
                $b = hexdec($color[4] . $color[5]);
            }

            // RGB or RGBA
            else if (strpos($color, 'rgb') === 0)
            {
                $color = str_replace(['rgb(', 'rgba(', ')'], '', $color);
                $colors = explode(',', $color);

                if (count($colors) <= 2)
                {
                    return 'transparent';
                }

                $r = trim($color[0]);
                $g = trim($color[1]);
                $b = trim($color[2]);
            }

            // Error / unsupported
            else
            {
                return 'transparent';
            }

            return 'rgba(' . $r . ', ' . $g . ', ' . $b . ', ' . $opacity . ')';
        }));

        /**
         * From a data structure with a type key (value link or page) and a link.link key or page.page key,
         * outputs the URL to the page or the link, according to the type key.
         *
         * This kind of data structure is obtained using a elements/element selector on the admin interface.
         * See, for example, header.see_also in blueprints/pages/modular/home-section.yaml.
         */
        $twig->addFilter(new \Twig_SimpleFilter('link_or_page', function($data) {
            return $data['type'] === 'page' ? $data['page']['page'] : $data['link']['link'];
        }));
    }
}
