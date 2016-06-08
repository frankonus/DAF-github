<?php include('includes/header.php'); ?>
    <nav id="videoElements">
        <button id="playpauze"></button>
        <button id="sound"></button>
        <a href="route.php" id="continueBtn">Sla deze video over</a>
    </nav>
    <div class="fullscreen-bg">
        <nav class="menu">
            <menu id="hamburger"></menu>
        </nav>
        <img src="/images/logo.png" alt="Road Experience DAF" id="logoSmall">
        <video autoplay poster="Rustypic.jpg" id="video">
            <source src="/video/dafvideo.mp4" type="video/mp4">
        </video>
    </div>
    <script src="/js/script.js"></script>
</body>
</html>