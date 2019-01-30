/**
 * Section: Featured collection
 * ------------------------------------------------------------------------------
 * Featured collection configuration for complete theme support
 * - https://github.com/Shopify/theme-scripts/tree/master/packages/theme-sections
 *
 * @namespace featuredCollection
 */
import {register} from '@shopify/theme-sections';

/**
 * Featured collection constructor
 * Executes on page load as well as Theme Editor `section:load` events.
 *
 * @param {string} container - selector for the section container DOM element
 */
register('featured-collection', {

  init() {
    window.console.log('Initialising featured collection section');


      function cartHoverState() {
        var card = $(".featured-collection-card");
        card.on('mouseenter', function(){
          var $this = $(this)
          var cta = $this.find('.featured-collection-card-cta')
          cta.removeClass('visually-hidden')

          $this.on('mouseleave', function(){
            cta.addClass('visually-hidden')
          })
        })
      }

      function ajaxCart(){
        $('.featured-collection-card-cta').on('click', function(e){
          e.preventDefault()
          var $this = $(this)
          var variant_id = $this.data('variant-id')
          var quantity = $this.data('quantity')

          var data = {
            quantity: quantity,
            id: variant_id
          }

       $.ajax({
           url: "/cart/add.js",
           data: data,
           dataType: 'json',
           success: function(res){
                     var text = $('.site-header__cart').text()
                     var count = parseInt(text.trim().split('(')[1].slice(0,1))
                     count += 1
                    $('.site-header__cart').text(`Cart (${count}) `)
             console.log(res);
           }
         })
        })

        $('.featured-collection-product-title').on('click touchstart', function(){
          console.log($(this).data('img_url'));
        })
      }

      cartHoverState()
      ajaxCart()




  },

  publicMethod() {
    // Custom public section method

  },

  _privateMethod() {
    // Custom private section method
  },

  // Shortcut function called when a section is loaded via 'sections.load()' or by the Theme Editor 'shopify:section:load' event.
  onLoad() {
    // Do something when a section instance is loaded
    this.init();
  },

  // Shortcut function called when a section unloaded by the Theme Editor 'shopify:section:unload' event.
  onUnload() {
    // Do something when a section instance is unloaded
  },

  // Shortcut function called when a section is selected by the Theme Editor 'shopify:section:select' event.
  onSelect() {
    // Do something when a section instance is selected
  },

  // Shortcut function called when a section is deselected by the Theme Editor 'shopify:section:deselect' event.
  onDeselect() {
    // Do something when a section instance is selected
  },

  // Shortcut function called when a section block is selected by the Theme Editor 'shopify:block:select' event.
  onBlockSelect() {
    // Do something when a section block is selected
  },

  // Shortcut function called when a section block is deselected by the Theme Editor 'shopify:block:deselect' event.
  onBlockDeselect() {
    // Do something when a section block is deselected
  },
});
