<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="https://use.typekit.net/ayc5qrg.css">
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
	
	<link rel="stylesheet" href="css/splide.min.css">
	<link rel="stylesheet" href="css/style.css">
</head>
<body class="page-post">

<div class="wrapper">
	<!-- HEADER -->
	<?php include('inc/header.php'); ?>
	<!-- // HEADER -->

	<!-- POST MAIN -->
	<div class="post-main">
		<div class="breadcrumbs">
			<div class="center">
				<a href="index">Home</a><span>></span>
				<a href="learn">Blog</a><span>></span>
			</div>
		</div>

		<div class="post-content">
			<div class="center">
				<aside class="aside">
					<div class="aside-social">
						<div class="social-title"><span>share this article</span></div>

						<div class="ssk-sticky ssk-left ssk-center ssk-lg row">
						    <a href="" class="ssk ssk-facebook">
						    	<svg width="11" height="20"><use xlink:href="#fb"></use></svg>
						    </a>
					        <a href="" class="ssk ssk-twitter">
					        	<svg width="21" height="18"><use xlink:href="#tw"></use></svg>
					        </a>
					        <a href="" class="ssk ssk-linkedin">
					        	<svg width="20" height="18"><use xlink:href="#in"></use></svg>
					        </a>
						</div>
					</div>
					
					<div class="aside-box">
						<h3>Join the GRO Payments Insider Community</h3>
						<p style="font-size: 15px; line-height: 18px;">Stay ahead of the curve with the latest insights in payment processing, customer acquisition strategies, brand building, and expansion tactics — all delivered straight to your inbox.</p>
						<form action="subscribe.php" method="POST" class="js-subscribe">
							<input required type="email" pattern="[^@\s]+@[^@\s]+\.[^@\s]+" placeholder="ENTER YOUR EMAIL ADDRESS">
							<button type="submit">
								<svg width="21" height="21"><use xlink:href="#arr-right"></use></svg>
							</button>
							<div class="alert-succes">Check your email to confirm your subscription!</div>
						</form>
					</div>
				</aside>

				<div class="content"></div>
			</div>
		</div>
	</div>
	<!-- // POST MAIN -->

	<!-- FOOTER -->
	<?php include('inc/footer.php'); ?>
	<!-- // FOOTER -->
</div>

<?php include('inc/sprite.svg'); ?>

<script src="js/social-share-kit.min.js"></script>
<script src="js/contentful.browser.min.js"></script>
<script src="js/main.js"></script>
<script src="js/content.js"></script>

<script type="text/javascript">
SocialShareKit.init();
</script>

</body>
</html>