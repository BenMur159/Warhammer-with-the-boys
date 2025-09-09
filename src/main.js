'use strict';

console.log('we are alive');

const openLoginWindow = function () {
  document.querySelector(`.overlay`).classList.remove('hidden');
  document.querySelector(`.login-window`).classList.remove('hidden');
  console.log('hello');
};

const closeLoginWindow = function () {
  document.querySelector(`.overlay`).classList.add('hidden');
  document.querySelector(`.login-window`).classList.add('hidden');
  console.log('hello');
};

mainPageInit();

function mainPageInit() {
  renderMainpageBanner();
}

function renderMainpageBanner() {
  const mainpageBannerWrapper = document.createElement('div');
  mainpageBannerWrapper.classList.add('js-mainpage-banner-wrapper');

  //TODO remove dummy scroll <div> if not needed anymore
  const mainpageBannerWrapperHTML = `

    <div class="mainpage-banner-container">
      <h1 class="mainpage-header-text js-mainpage-header-text">Warhammer with the Boys</h1>
    </div>
    <nav class="mainpage-banner-menu">

      <a href="" class="mainpage-banner-link">Home</a>
      <a href="" class="mainpage-banner-link">Painting</a>
      <a href="" class="mainpage-banner-link">Games</a>
      <a href="" class="mainpage-banner-link">Campains</a>
      <a href="" class="mainpage-banner-link">Stats</a>
      <a class="mainpage-banner-link js-login-link">Login</a>
      
    </nav>

    <div class="login-window hidden">
      <h1>Login</h1>
      <form class="login-form">
        <div class="form-grid">
          <label for="username">Username</label>
          <input type="text" id="username" name="username" required />

          <label for="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button class="btn-login" type="submit">Login</button>
        <button type="submit">Register</button>
      </form>
      <img class="login-frame" src="/assets/imperial frame.png" />
      <img class="login-seal" src="/assets/purety_seal_login.png" />
    </div>
    
    <div class="overlay hidden"></div>
    <div style="height: 2000px;"></div>
    
  `;

  mainpageBannerWrapper.innerHTML = mainpageBannerWrapperHTML;
  document.body.append(mainpageBannerWrapper);
  setupScrollBehavior();
  initMainpageBannerLinks();
}

function setupScrollBehavior() {
  const mainpageHeaderText = document.querySelector('.js-mainpage-header-text');

  if (!mainpageHeaderText) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY >= 200) {
      mainpageHeaderText.classList.add('vanishing-header');
    } else {
      mainpageHeaderText.classList.remove('vanishing-header');
    }
  });
}

function initMainpageBannerLinks() {
  document
    .querySelector(`.js-login-link`)
    .addEventListener('click', openLoginWindow);
  document
    .querySelector(`.overlay`)
    .addEventListener('click', closeLoginWindow);
}
