'use strict';

async function solution() {
    const $articleList = document.querySelector('.articles-list');
    const url = "http://example.com/articles";
    let accumulateEl = '';
    let result;

    try {
      result = await fetch(url)
      .then((response) => {
      if (!response.ok) throw new Error("Error!!");
      return response.json();
    })
      return result;
    } catch(e) {
      console.log(e);
    }
    console.log(result)

    result.forEach((elInfo) => {
        const { title, content } = elInfo;
        const template = `
            <div class="article">
                <div class="article-title">${title}</div>
                <div class="article-content">${content}</div>
            </div>
        `;

        accumulateEl += template;
    })

    const $listContainer = document.createElement('div');
    $listContainer.classList.add('article-list');
    $listContainer.insertAdjacentHTML('beforeend', accumulateEl);
    $articleList.append($listContainer);
}
