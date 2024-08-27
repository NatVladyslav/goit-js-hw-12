export function createCard(imgData) {
    return `
    <li class="card-list-item">
        <a class="card-list-link" href="${imgData.largeImageURL}">
            <img src="${imgData.webformatURL}" alt="${imgData.tags}" class="card-list-item-img" />
        </a>
        <ul class="card-item-inside-list">
          <li class="inside-list-item">
            <h3>Likes</h3>
            <p>${imgData.likes}</p>
          </li>
          <li class="inside-list-item">
            <h3>Views</h3>
            <p>${imgData.views}</p>
          </li>
          <li class="inside-list-item">
            <h3>Comments</h3>
            <p>${imgData.comments}</p>
          </li>
          <li class="inside-list-item">
            <h3>Downloads</h3>
            <p>${imgData.downloads}</p>
          </li>
        </ul>
    </li>
    `;
}