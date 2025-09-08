'use strict';

console.log('we are alive');
mainPageInit();

function mainPageInit() {
  renderHeader();
}

function renderHeader() {
  const headerContainer = document.createElement('div');
  headerContainer.classList.add('js-header-container');
  console.log(headerContainer.classList);

  const headerContainerHTML = `
    <div class="main-header-background-image">
      <h1 class="webside-main-header js-main-header">Warhammer with the Boys</h2>
    </div>
    <div style="height: 2000px;"></div>
  `;

  headerContainer.innerHTML = headerContainerHTML;
  document.body.append(headerContainer);
}

window.addEventListener('scroll', () => {
  const mainHeader = document.querySelector(`.js-main-header`);
  if (window.scrollY >= 200) {
    mainHeader.classList.add('vanishing-header');
  } else {
    mainHeader.classList.remove('vanishing-header');
  }
});
