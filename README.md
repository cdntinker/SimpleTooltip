This is a [MediaWiki Extension](https://www.mediawiki.org/wiki/Extension:SimpleTooltip) that adds basic tooltip capabilities. For Documentation see: https://www.mediawiki.org/wiki/Extension:SimpleTooltip

## Attribution
Uses the [Tooltipster Library](http://iamceege.github.io/tooltipster/) and [Fugue Icons](https://github.com/yusukekamiyamane/fugue-icons)

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
