import { fetchPhotos } from "./js/pixabay-api";
import { createCard } from "./js/render-functions";
import iziToast from "izitoast";
import SimpleLightbox from "simplelightbox";

const searchForm = document.querySelector(".search-form");
const cardsList = document.querySelector(".gallery");
const loader = document.querySelector(".loader");
const loadMoreBtn = document.querySelector(".js-load-more-btn");

let page = 1;
const perPage = 15;
let query = '';

const gallery = new SimpleLightbox(".gallery li a", {
    captions: true,
    captionClass: "style-caption",
    captionsData: 'alt',
    captionDelay: 250,
    disableRightClick: true,
});

loadMoreBtn.classList.add('is-hidden');

const onSearchFormSubmit = async (event) => {
    event.preventDefault();
    page = 1;
    query = searchForm.elements.user_query.value.trim();
    cardsList.innerHTML = '';
    loadMoreBtn.classList.add('is-hidden');
    if (!query) return;

    try {
        loader.classList.add("is-open");
        const data = await fetchPhotos(query, page, perPage);
        if (data.hits.length === 0) {
            iziToast.info({
                message: "Sorry, there are no images matching your search query. Please try again!",
                position: "topCenter",
                title: "Attention",
                color: "red",
                timeout: 4000,
            });
            loader.classList.remove("is-open");
            return;
        }

        renderGallery(data.hits);
        loader.classList.remove("is-open");

        if (data.hits.length < perPage) {
            iziToast.info({
                message: "You've reached the end of search results.",
                position: "topCenter",
                title: "Info",
                timeout: 4000,
            });
        } else {
            loadMoreBtn.classList.remove('is-hidden');
        }
    } catch (err) {
        console.log(err);
        loader.classList.remove("is-open");
    }
    searchForm.reset();
};

const onLoadMoreClick = async () => {
    page += 1;
    try {
        loader.classList.add("is-open");
        const data = await fetchPhotos(query, page, perPage);
        renderGallery(data.hits);
        loader.classList.remove("is-open");

        const { height: cardHeight } = cardsList.firstElementChild.getBoundingClientRect();
        window.scrollBy({
            top: cardHeight * 2,
            behavior: "smooth",
        });

        if (data.hits.length < perPage) {
            iziToast.info({
                message: "We're sorry, but you've reached the end of search results.",
                position: "topCenter",
                title: "Info",
                timeout: 4000,
            });
            loadMoreBtn.classList.add('is-hidden');
        }
    } catch (err) {
        console.log(err);
        loader.classList.remove("is-open");
    }
};

const renderGallery = (photos) => {
    const markup = photos.map(createCard).join("");
    cardsList.insertAdjacentHTML('beforeend', markup);
    gallery.refresh();
};

searchForm.addEventListener("submit", onSearchFormSubmit);
loadMoreBtn.addEventListener("click", onLoadMoreClick);