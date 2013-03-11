<!DOCTYPE html>
<html xml:lang="en-us" xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>CodeIgniter Shopping Cart</title>

<link href="<?php echo base_url(); ?>assets/css/style.css" media="screen" rel="stylesheet" type="text/css" />

<script type="text/javascript" src="<?php echo base_url(); ?>assets/js/jquery-1.9.1.min.js"></script>
<script type="text/javascript" src="<?php echo base_url(); ?>assets/js/main.js"></script>
</head>
<body>

<div id="wrap">

	<?php $this->view($content); ?>
	
	<div class="cart_list">
		<h3>Your shopping cart</h3>
		<div id="cart_content">
			<?php echo $this->view('cart/cart.php'); ?>
		</div>
	</div>
</div>

</body>
</html>