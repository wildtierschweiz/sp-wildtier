<?php

/**
 * Extension Manager/Repository config file for ext "sp_wildtier".
 */
$EM_CONF[$_EXTKEY] = [
    'title' => 'sp-wildtier',
    'description' => 'Site package for Wildtier Schweiz',
    'category' => 'templates',
    'constraints' => [
        'depends' => [
            'typo3' => '12.4.0-12.4.99',
            'fluid_styled_content' => '12.4.0-12.4.99',
            'rte_ckeditor' => '12.4.0-12.4.99',
        ],
        'conflicts' => [
        ],
    ],
    'autoload' => [
        'psr-4' => [
            'WildtierSchweiz\\SpWildtier\\' => 'Classes',
        ],
    ],
    'state' => 'stable',
    'uploadfolder' => 0,
    'createDirs' => '',
    'clearCacheOnLoad' => 1,
    'author' => 'Daniel Dürsteler',
    'author_email' => 'daniel.duersteler@wildtier.ch',
    'author_company' => 'Wildtier Schweiz',
    'version' => '1.0.0',
];
