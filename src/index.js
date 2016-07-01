'use strict';
/* globals numWords, readTime */

const allBlogs = document.querySelectorAll(`.entry`);
let currBlog = ``;
for (let i = 0; i < allBlogs.length; i++) {
  currBlog = allBlogs[i].querySelector(`.entry__content`);
  console.log(allBlogs.length);
  console.log(currBlog);
}
