<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="https://use.typekit.net/ayc5qrg.css">
	<link rel="stylesheet" href="css/splide.min.css">
	<link rel="stylesheet" href="css/style.css">
	<title>Privacy Policy</title>
</head>
<body class="page">

<div class="wrapper">
	<!-- HEADER -->
	<?php include('inc/header.php'); ?>
	<!-- // HEADER -->

	<!-- HOME -->
	<section class="home-main">
		<div class="center">
			<div class="home-content">
				<div class="rising-stars start">
					<div></div>
				</div>
				<div class="rising-stars end">
					<div></div>
				</div>
				<div class="rising-stars right">
					<div></div>
				</div>

				<h1 class="title animated ding">
					<div class="text">Privacy Policy</div>
				</h1>

				<div class="main-subtitle">Transparency is a recurring Gro value that is reflected in our<br> pricing promise, our security protocol and our legal agreements.</div>
			</div>
		</div>
	</section>
	<!-- // HOME -->

	<div class="page-tab">
		<div class="center">
			<div class="splide">
			   	<div class="splide__track">
					<ul class="splide__list">
						<li class="splide__slide"><a href="#terms-policies" class="active">Terms & policies</a></li>
						<li class="splide__slide"><a href="#privacy-policy">Privacy policy</a></li>
						<li class="splide__slide"><a href="#cookie-policy">Cookie policy</a></li>
						<li class="splide__slide"><a href="#regulatory">Regulatory</a></li>
						<li class="splide__slide"><a href="#disclaimer">Disclaimer</a></li>
						<li class="splide__slide"><a href="#payment-methods-rules">Payment methods rules</a></li>
						<li class="splide__slide"><a href="#rdr-terms">RDR terms</a></li>
						<li class="splide__slide"><a href="#claims-processing">Claims processing</a></li>
					</ul>
			   	</div>
			</div>
			<div class="hero"></div>
		</div>
	</div>

	<!-- MAIN -->
	<main class="main page-content">
		<?php include('inc/tab/terms-policies.php'); ?>
		<?php include('inc/tab/privacy-policy.php'); ?>
		<?php include('inc/tab/cookie-policy.php'); ?>
		<?php include('inc/tab/regulatory.php'); ?>
		<?php include('inc/tab/disclaimer.php'); ?>
		<?php include('inc/tab/payment-methods-rules.php'); ?>
		<?php include('inc/tab/rdr-terms.php'); ?>
		<?php include('inc/tab/claims-processing.php'); ?>
	</main>
	<!-- // MAIN -->

	<!-- FOOTER -->
	<?php include('inc/footer.php'); ?>
	<!-- // FOOTER -->
</div>

<?php include('inc/sprite.svg'); ?>

<script src="js/splide-extension-auto-scroll.min.js"></script>
<script src="js/splide.min.js"></script>
<script src="js/main.js"></script>
</body>
</html>