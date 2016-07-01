'use strict';
/* globals numWords, readTime */

const bodyElement = document.querySelector(`body`);
const nav = document.createElement(`nav`);
nav.className = `navbar`;
bodyElement.insertBefore(nav, bodyElement.firstChild);
const blogEntries = document.querySelectorAll(`.entry`);
const entryTitle = document.querySelectorAll(`.entry__title`);
const entryInfo = document.querySelectorAll(`.entry__info`);
const entryContent = document.querySelectorAll(`.entry__content`);

for (let i = 0; i < blogEntries.length; i++) {
  const timeLi = document.createElement(`li`);
  timeLi.className = `read-time`;
  entryInfo[i].appendChild(timeLi);
  timeLi.innerText = `${readTime(entryContent[i].innerText, 200)} mins`;

  const navLink = document.createElement(`a`);
  navLink.className = `navbar__link`;
  navLink.setAttribute(`href`, `#${blogEntries[i].id}`);
  navLink.innerText = entryTitle[i].innerText;
  nav.appendChild(navLink);
}
