<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="description" content="description">
    <meta name="keywords" content="HTML,CSS,JavaScript">
    <meta name="author" content="Frank van Deursen">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>document</title>
    <link rel="stylesheet" type="text/css" href="/css/reset.css">
    <link rel="stylesheet" type="text/css" href="/css/style.css">
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
    <script src="https://use.typekit.net/qrt6rbc.js"></script>
    <script>try{Typekit.load({ async: true });}catch(e){}</script>
    <script src="http://maps.googleapis.com/maps/api/js"></script>
    <script src="/js/route.js"></script>
</head>

<body>
    <nav id="fullPageMenu">
        <nav class="menu">
            <menu id="hamburgerClose"></menu>
        </nav>
        <ul id="languageMenu">
            <li>ENGLISH</li>
            <li>ESPAÑOL</li>
            <li>FRANÇIAS</li>
            <li>ITALIANO</li>
            <li>DEUTSCH</li>
            <li class="active">NEDERLANDS</li>
        </ul>
        <section id="navMenu">
            <ul>
                <li><a href="introduction.php">01<span>Introduction video</span></a></li>
                <li><a href="information.php">02<span>Information</span></a></li>
                <li><a href="route.php">03<span>Our full route</span></a></li>
                <li><a href="contact.php">04<span>Contact information</span></a></li>
            </ul>
            <a href="#" id="shareBtn">Share this event</a>
            <ul id="social">
                <li><img src="/images/facebook.svg" class="socialIcon" alt="facebook"></li>
                <li><img src="/images/twitter.svg" class="socialIcon" alt="twitter"></li>
                <li><img src="/images/youtube.svg" class="socialIcon" alt="youtube"></li>
                <li><img src="/images/linkedin.svg" class="socialIcon" alt="linkedin"></li>
            </ul>       
        </section>
    </nav>
    <section id="intro">
        <nav class="menu">
            <menu id="hamburger"></menu>
        </nav>
        <section id="contactPicture"></section>
        <section id="contactInfo">
            <h1>Contact information</h1>
            <p>Vragen over de route, misschien wel suggesties, informatie nodig voor schoolprojecten en/of vragen over de trucks? Wat je rede ook is, peins niet om contact op te nemen! Ons administratief-team probeert u zo snel mogelijk een respons terug te geven!
            <br><br>
            Contact opnemen is mogelijk via:<br>
            <b>E-mail:</b> <a href="mailto:info@daf.nl">info@daf.nl</a><br>
            <b>Informele website:</b> <a href="http://www.daf.com" target="_blank">http://www.daf.com</a><br>
            <b>Telefoonnummer:</b> +31 (0)40 214 9111
            <br><br>
            Bezoekadres:<br>
            Hugo van der Goeslaan 1<br>
            5643 TW Eindhoven<br>
            Nederland
            <br><br>
            Postadres:<br>
            Postbus 90065<br>
            5600 PT Eindhoven<br>
            Nederland         
            </p>
        </section>
    </section>
    <script src="/js/script.js"></script>
</body>
</html>