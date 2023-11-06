<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="https://use.typekit.net/ayc5qrg.css">
	<link rel="stylesheet" href="css/splide.min.css">
	<link rel="stylesheet" href="css/style.css">
	<title>Blog</title>
</head>
<body class="page-blog">

<div class="wrapper">
	<!-- HEADER -->
	<?php include('inc/header.php'); ?>
	<!-- // HEADER -->

	<div class="center blog-main">
		<div class="blog-title">
			<svg width="51" height="52">
				<use xlink:href="#vector-col-white"></use>
			</svg>
			<h1>Blog & Resources</h1>
		</div>

		<!-- slider -->
		<div class="blog-slider">
			<div class="splide">
			   	<div class="splide__track">
					<ul class="splide__list"></ul>
			   	</div>
			</div>
		</div>
		<!-- // slider -->

		<!-- filter -->
		<div class="blog-filter">
			<div class="categories">
				<h3>BLOG CATEGORIES:</h3>
				<div class="splide">
				   	<div class="splide__track">
						<ul class="splide__list"></ul>
				   	</div>
				</div>
			</div>

			<form class="form">
				<div class="group">
					<label class="field search">
						<input type="search" name="search" placeholder="Search News & Insights...">
						<svg width="19" height="19">
							<use xlink:href="#search"></use>
						</svg>
					</label>

					<label class="field select select-categories">
						<select name="category"></select>
						<svg width="14" height="9">
							<use xlink:href="#arr-down"></use>
						</svg>
					</label>

					<label class="field select select-sort">
						<select name="sort">
							<option value="asc" data-name="Title">Title</option>
							<option value="date" data-name="Date">Date</option>
						</select>
						<svg width="14" height="9">
							<use xlink:href="#arr-down"></use>
						</svg>
					</label>
				</div>
				
				<div class="filtering d-none">
					<h3>Filtering by:</h3>
				</div>

				<div class="foot">
					<a href="#" class="reset d-none">
						<svg width="17" height="17">
							<use xlink:href="#reset"></use>
						</svg>
						<span>Reset All Filters</span>
					</a>

					<div class="showing">Showing <span class="total-filter">19</span> results of <span class="total"></span> items.</div>
				</div>
			</form>
		</div>
		<!-- // filter -->

		<!-- post -->
		<div class="blog-post"></div>
		<!-- // post -->

		<div class="tx-c">
			<a href="#" class="btn load-more">Load more</a>
		</div>
	</div>

	<!-- FOOTER -->
	<?php include('inc/footer.php'); ?>
	<!-- // FOOTER -->
</div>

<?php include('inc/sprite.svg'); ?>

<script src="js/contentful.browser.min.js"></script>
<script src="js/splide-extension-auto-scroll.min.js"></script>
<script src="js/splide.min.js"></script>
<script src="js/main.js"></script>
<script src="js/content.js"></script>

</body>
</html>