<?php
defined('TYPO3') or die('Access denied.');
/***************
 * Add default RTE configuration
 */
$GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['sp_wildtier'] = 'EXT:sp_wildtier/Configuration/RTE/Default.yaml';
$GLOBALS['TYPO3_CONF_VARS']['MAIL']['layoutRootPaths'][700] = 'EXT:sp_wildtier/Resources/Private/Layouts/';
$GLOBALS['TYPO3_CONF_VARS']['MAIL']['partialRootPaths'][700] = 'EXT:sp_wildtier/Resources/Private/Partials/';
$GLOBALS['TYPO3_CONF_VARS']['MAIL']['templateRootPaths'][700] = 'EXT:sp_wildtier/Resources/Private/Templates/Email/';

/***************
 * PageTS
 */
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:sp_wildtier/Configuration/TsConfig/Page/All.tsconfig">');
