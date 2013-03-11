$(document).ready(function() { 
	/*place jQuery actions here*/ 
	var link = "/demo/index.php/";
	
	
	$("ul.products form").submit(function() {
		// Get the product ID and the quantity 
		var id = $(this).find('input[name=product_id]').val();
		var qty = $(this).find('input[name=quantity]').val();
		
		 $.post(link + "cart/add_cart_item", { product_id: id, quantity: qty, ajax: '1' },
  			function(data){
  			
  			if(data == 'true'){
    			
    			$.get(link + "cart/show_cart", function(cart){
  					$("#cart_content").html(cart);
				});

    		}else{
    			alert("Product does not exist");
    		}	
    		
 		 }); 

		return false;
	});
	
	$(".empty").live("click", function(){
    	$.get(link + "cart/empty_cart", function(){
    		$.get(link + "cart/show_cart", function(cart){
  				$("#cart_content").html(cart);
			});
		});
		
		return false;
    });


	
	
});