<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

	<!--  Social tags      -->
	<meta name="keywords" content="Umar, Faruk, Nasir, Software, Developer, Music, Hiphop, PHP, 
		Java, Javascript, Python, Django, JQuery, Laravel, CEO, Starfolk, Freelancer">
	<meta name="description" content="">
	<!-- Schema.org markup for Google+ -->
	<meta itemprop="name" content="Faruk Nasir">
	<meta itemprop="description" content="">
	<meta itemprop="image" content="">
	<!-- Twitter Card data -->
	<meta name="twitter:card" content="product">
	<meta name="twitter:site" content="@frknasir">
	<meta name="twitter:title" content="">
	<meta name="twitter:description" content="">
	<meta name="twitter:creator" content="@frknasir">
	<meta name="twitter:image" content="">
	<!-- Open Graph data -->
	<meta property="fb:app_id" content="">
	<meta property="og:title" content="" />
	<meta property="og:type" content="" />
	<meta property="og:url" content="" />
	<meta property="og:image" content="" />
	<meta property="og:description" content="" />
	<meta property="og:site_name" content="" />

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name') }}</title>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet" type="text/css">

    <!-- Styles -->
    <link href="{{ secure_asset('css/app.css') }}" rel="stylesheet">

    <script type='text/javascript'>
        window.Laravel = @php echo json_encode([
            'csrfToken' => csrf_token(),
        ]); @endphp
    </script>

</head>
<body class="profile-page">
    <div id="app">
        <router-view></router-view>       
    </div>
    <!-- Scripts -->
    <script src="{{ secure_asset('js/app.js') }}" defer></script>
</body>
</html>
