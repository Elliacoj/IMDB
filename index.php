<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.2/css/all.css" integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu" crossorigin="anonymous">
    <title>IMDB</title>
</head>
<body>
    <div id="container">
        <header>
            <div id="header">
                <div id="logo"></div>
                <div id="menu">
                    <i class="fas fa-bars"></i>
                    <p>Menu</p>
                </div>

                <div id="searchBar">
                    <div class="select">
                        <select name="searchScroll" id="searchScroll">
                            <option value="all">All</option>
                            <option value="titles">Titles</option>
                            <option value="tvEpisodes">TV Episodes</option>
                            <option value="celebs">Celebs</option>
                            <option value="companies">Companies</option>
                            <option value="keywords">Keywords</option>
                            <option value="advancedSearch">Advanced Search</option>
                        </select>
                    </div>

                    <div id="searchIMDB">
                        <input type="text" placeholder="Search IMDB">
                        <div id="wen"><i class="fas fa-search"></i></div>
                    </div>
                </div>

                <div id="imdbPro">IMDbPro</div>
                <div id="slashheader"></div>

                <div id="watchList">
                    <i class="fas fa-bookmark"></i>
                    <p>Watchliste</p>
                </div>

                <div id="sign">Sign in</div>
            </div>
        </header>

        <section id="partOne">
            <div id="carrouselLeft"></div>
            <div id="carrouselUp"><span>Up next</span></div>
        </section>

        <section></section>
        <section></section>

        <section id="fanFavorites">
            <p>Fan Favorites</p>
            <p>This week's top TV and movies</p>
            <div id="fanFavoritesCarrousel"></div>
        </section>

        <section></section>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
        <section id="actorList">
            <p>List of actors</p>
            <div id="actorListCarrousel"></div>
        </section>
        <section></section>
        <section></section>

        <footer>

            <div id="logoNetworks">
                <div><i class="fab fa-facebook-square"></i></div>
                <div><i class="fab fa-instagram-square"></i></div>
                <div><i class="fab fa-twitch"></i></div>
                <div><i class="fab fa-twitter"></i></div>
                <div><i class="fab fa-youtube"></i></div>
            </div>

            <div id="lineLienOne">
                <div>Get the IMDb App</div>
                <div>Help</div>
                <div>Site Index</div>
                <div>IMDbPro</div>
                <div>Box Office Mojo</div>
                <div>IMDb Developer</div>
            </div>

            <div id="lineLienTwo">
                <div>Press Room</div>
                <div>Advertising</div>
                <div>Jobs</div>
                <div>Conditions of Use</div>
                <div>Privacy Policy</div>
                <div>Interest-Based Ads</div>
            </div>

            <div id="amazon">an amazon company</div>

            <div id="years">© 1990-2021 by IMDb.com, Inc.</div>
        </footer>
    </div>

    <script src="./js/script.js" type="module"></script>
    <script src="./js/carrousel.js" type="module"></script>
</body>
</html>
