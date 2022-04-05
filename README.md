# Show me

This project utilizes the TVmaze API. If you would like to checkout their documentation you may do so [here](https://www.tvmaze.com/api). This project was actualized as a learning project and not for profit. Copyright of the data available is of course owned by TVmaze.

Scroll down for the deployed version of the app.

### Description

The user is able to, through a low page count app, find a random tv-show to watch. It's a problem/need that many of us are known to have when finishing binge-watching something. Many people also endlessly scroll through netflix's library and spend too much time figuring out what can be good to watch. Through minimal criteria (language and genre), the user can help the app make better calls to the API in order to get closer to satisfying their needs. If they are interested to learn more about the show, the user is able to then follow a link to the TVmaze page of the show.

## Screenshot

![Screenshot of ShowlistView](https://github.com/EdwardAbboud/Show-me/blob/main/public/screenshots/screenshot-showPage.png "screenshot of app")

## Folder Structure

public<br>
└── assets<br>
&nbsp;&nbsp;&nbsp;&nbsp;└── media files<br>
└── main-pages.css<br>
└── media-queries.css<br>
└── navbar-buttons.css<br>
└── system-basic.css<br>
src<br>
└── fetchers<br>
&nbsp;&nbsp;&nbsp;&nbsp;└── showFetcher.js<br>
└── lib<br>
&nbsp;&nbsp;&nbsp;&nbsp;└── fetchData.js<br>
&nbsp;&nbsp;&nbsp;&nbsp;└── logger.js<br>
&nbsp;&nbsp;&nbsp;&nbsp;└── observableState.js<br>
&nbsp;&nbsp;&nbsp;&nbsp;└── router.js<br>
└── pages<br>
&nbsp;&nbsp;&nbsp;&nbsp;└── homePage.js<br>
&nbsp;&nbsp;&nbsp;&nbsp;└── routes.js<br>
&nbsp;&nbsp;&nbsp;&nbsp;└── showlistPage.js<br>
└── views<br>
&nbsp;&nbsp;&nbsp;&nbsp;└── homeView.js<br>
&nbsp;&nbsp;&nbsp;&nbsp;└── loadingIndicator.js<br>
&nbsp;&nbsp;&nbsp;&nbsp;└── navbar.js<br>
&nbsp;&nbsp;&nbsp;&nbsp;└── showlistView.js<br>
└── app.js<br>
└── constants.js<br>
└── data.js<br>
index.html<br>

## Deployed app

If you wish to browse the finished web app you may do so [here](https://edwardabboud.github.io/Show-me/)
