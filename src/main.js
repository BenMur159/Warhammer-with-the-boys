'use strict';

console.log('we are alive');
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
      <a href="" class="mainpage-banner-link">Login</a>
      
    </nav>
    <div style="height: 2000px;"></div>
    
  `;

  mainpageBannerWrapper.innerHTML = mainpageBannerWrapperHTML;
  document.body.append(mainpageBannerWrapper);
  setupScrollBehavior();
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
