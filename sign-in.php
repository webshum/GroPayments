<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="https://use.typekit.net/ayc5qrg.css">
	<link rel="stylesheet" href="css/style.css">
	<title>Login | Gro Payments</title>
</head>
<body class="page-sign">

<div class="wrapper">
	<!-- HEADER -->
	<?php include('inc/header.php'); ?>
	<!-- // HEADER -->

	<div class="middle">
		<?php if (isset($_GET['form']) && !empty($_GET['form']) && $_GET['form'] == 'reset-password') : ?>
			<form action="#" class="form-sign form-reset">
				<div class="inner">
					<div class="wrap">
						<h3 class="title">Reset your password</h3>
						<p class="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque<br> eleifend est turpis, in fringilla sapien tincidunt a. Mauris placerat<br> lorem quis lacus egestas feugiat.</p>

						<div class="field-input">
							<input type="password" placeholder="Enter your password">
							<button type="submit"><span>Update</span></button>
						</div>
					</div>
				</div>
			</form>
		<?php else : ?>
			<form action="#" class="form-sign form-in">
				<h3 class="title">Sign in</h3>
				<p class="subtitle">Sign in to the your Gro Payments Dashboard</p>

				<div class="inner">
					<div class="wrap">
						<div class="field-input">
							<input type="email" placeholder="example@youremail.com">
						</div>

						<div class="field-input">
							<input type="password" placeholder="Enter your passsword">
						</div>

						<label class="field-checkbox mt15">
							<input type="checkbox">
							<div class="checkbox"></div>
							<div class="text">Remember me</div>
						</label>

						<button type="submit"><span>Log in</span></button>

						<div class="or"><span>or</span></div>

						<div class="sign-social">
							<a href="#">
								<svg width="17" height="17"><use xlink:href="#google"></use></svg>
								<span>Sign in with Google</span>
							</a>
							<a href="#">
								<svg width="17" height="17"><use xlink:href="#facebook"></use></svg>
								<span>Sign in with Facebook</span>
							</a>
						</div>

						<p>Forgot your password? <a href="?form=reset-password">Reset</a></p>
					</div>
				</div>
			</form>
		<?php endif; ?>
	</div>

	<!-- FOOTER -->
	<?php include('inc/footer.php'); ?>
	<!-- // FOOTER -->
</div>

<?php include('inc/sprite.svg'); ?>

<script src="js/main.js"></script>

</body>
</html>