// Create Namespace
if (!mw.libs) {mw.libs= {}};
mw.libs.SimpleTooltip = {};

/**
 * Default Tooltip Options
 *
 * @see http://iamceege.github.io/tooltipster/
 */
mw.libs.SimpleTooltip.defaultOptions = {
   animation: 'fade',
   theme: 'tooltipster-mw',
   delay: 0,
   speed: 0,
   theme: 'tooltipster-default',
   touchDevices: true,
   trigger: 'hover'
}

/**
 * Triggers the execution of the tooltip Plugin
 *
 * @param  {jQuery} jQuery Object (Context) or DOM Selection
 * @param  {{}} Object with Tooltip Option to replace the default options.
 */
mw.libs.SimpleTooltip.trigger = function(context, customOptions) {

    // $('.simple-tooltip').tooltipster();

    var $context;
    var options = customOptions || mw.libs.SimpleTooltip.defaultOptions;

    if (context) {
        $context = $(context).find('.simple-tooltip');
    } else {
        $context = $('.simple-tooltip');
    }

    $context.tooltipster(options);
}


$(function() {

    // Trigger Tooltips on DOM Ready
    // Use no specific context and use no custom options
    mw.libs.SimpleTooltip.trigger(false, false);

    // Uses sf.initializeJSElements Hook that is triggered everytime a new form instance is added
    mw.hook('sf.initializeJSElements').add(function($elements, partOfMultiple) {

        $elements.find('.simple-tooltip').each(function(i, el) {
            var $el = $(el);
            console.info($el);
            var title = $el.attr('simple-tooltip-text');
            console.info(title);
            $el.removeClass("tooltipstered");

        });
        // mw.libs.SimpleTooltip.trigger($elements, false);

        // $('.simple-tooltip').tooltipster();

        // $elements.each(function(i, element) {
        //     mw.libs.SimpleTooltip.trigger($elements, false);
        // });
    });

});