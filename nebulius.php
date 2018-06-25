<?php
namespace Grav\Theme;

use Grav\Common\Theme;

class Nebulius extends Theme
{
    // Enables blueprints for the page admin.
    public $features = [
        'blueprints' => 1000,
    ];

    public static function getSubscriptedEvents()
    {
        return [
            'onThemesInitialized' => ['onThemesInitialized', 0]
        ];
    }

    public function onPluginsInitialized()
    {
        if ($this->isAdmin()) return;

        $this->enable([
            'onTwigExtensions' => ['onTwigExtensions', 0]
        ]);
    }

    public function onTwigExtensions()
    {
        /** @var $twig \Twig_Environment */
        $twig = $this->grav['twig']->twig;

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
    }
}
