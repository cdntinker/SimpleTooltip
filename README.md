This is a [MediaWiki Extension](https://www.mediawiki.org/wiki/Extension:SimpleTooltip) that adds basic tooltip capabilities. For Documentation see: https://www.mediawiki.org/wiki/Extension:SimpleTooltip

# Installation
Download and place the file(s) in a directory called SimpleTooltip in your extensions/ folder.

Add the following code at the bottom of your LocalSettings.php:

`require_once "$IP/extensions/SimpleTooltip/SimpleTooltip.php";`

Yes Done – Navigate to Special:Version on your wiki to verify that the extension is successfully installed.

Instead of downloading the zip archive you may also check this extension out via Git:

`git clone https://github.com/cdntinker/SimpleTooltip.git`

# Usage
There is a short alias and a more descriptive parser function name for each tooltip type.

## Inline-text tooltip

`{{#tip-text: text | tooltip-text}}`

`{{#simple-tooltip: text | tooltip-text}}`

## Info-icon tooltip:

`{{#tip-info: tooltip-text }}`

`{{#simple-tooltip-info: tooltip-text }}`

## Inline-Image tooltip:

`{{#tip-img: /path/to/your/image.png | image tooltip-text }}`

`{{#simple-tooltip-img: /path/to/your/image.png | image tooltip-text }}`

Where "/path/to/your/image.png" is total bullshit.  It's actually an image URL that it wants.

## Attribution
~~Uses the [Tooltipster Library](http://iamceege.github.io/tooltipster/) and [Fugue Icons](https://github.com/yusukekamiyamane/fugue-icons)~~

Which MIGHT actually be [Tooltipster Library](https://github.com/calebjacob/tooltipster) and [Fugue Icons](https://github.com/frisco-joe/fugue-icons)
