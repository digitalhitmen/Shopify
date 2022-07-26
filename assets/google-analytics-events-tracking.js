(function($) {
    // Use the $ in peace...
  $(document).ready(function () {
    
    // Add click to call and Call to action
    $("a").click(function () {
            if (typeof gtag !== "undefined") {
                var href_value = $(this).attr("href");
                if (href_value != null && href_value !== '' && typeof(href_value) !== "undefined") {
                    var arr = href_value.split(":");
                    var current_url = $(location).attr('href');
                    if (arr[0] == 'tel') {
                        gtag('event', 'Click to Call', {
                            'event_category': 'Call to Action',
                            'event_label': current_url
                        });
                    //    console.log(arr[0]);
                    }
                    else if (arr[0] == 'mailto') {
                        gtag('event', 'Click to Send Email', {
                            'event_category': 'Call to Action',
                            'event_label': current_url
                        });
                    //    console.log(arr[0]);
                    }

                }
            }
            if (typeof ga !== "undefined") {
                var href_value = $(this).attr("href");
                if (href_value != null && href_value !== '' && typeof(href_value) !== "undefined") {
                    var arr = href_value.split(":");
                    var current_url = $(location).attr('href');
                    if (arr[0] == 'tel') {
                        ga('send', 'event', 'Call to Action', 'Click to Call', current_url);
                     //   console.log(arr[0]);
                    }
                    else if (arr[0] == 'mailto') {
                        ga('send', 'event', 'Call to Action', 'Click to Send Email', current_url);
                     //   console.log(arr[0]);
                    }

                }
            }
        });
    
    // contact form submit
    $('#ContactForm').submit(function(event) {
      var $form = $(this);
      jQuery.ajax({
        type: 'POST',
        async: true,
        url: '/contact',
        data: $form.serialize(),
        beforeSend: function() {
          console.log('submit');
          $form.addClass('sending');
          return false;
        },
        error: function(t) {
            console.log(t);
            $form.addClass('sent');
          $form.find('.errorMsg').fadeIn();
        },
        success: function(response) {
          event.preventDefault();
          $form.addClass('sent');
          $form.find('.successMsg').fadeIn();
          console.log('submit sucess');
        }
      }); 

    });
    
  })
  	
}(jQuery));