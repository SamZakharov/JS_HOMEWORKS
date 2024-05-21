class Gallery {
  #photosContainer = null;

  constructor() {
    this.#photosContainer = document.querySelector('.photo-container');
  }

  async fetchPhotos() {
    try {
      const responce = await fetch(`https://jsonplaceholder.typicode.com/photos${window.location.search}`);
      return await responce.json();
    } catch (err) {
      console.error('Failed to fetch photos:', err);
      alert('Failed to load photos. Please try again later.');
    }
  }

  loadPhotos() {
    this.fetchPhotos().then((photos) => {
      photos.forEach((photo) => {
        const photoItem = document.createElement('img');
        photoItem.src = photo.thumbnailUrl;
        photoItem.alt = photo.title;
        this.#photosContainer.appendChild(photoItem);
      });
    });
  }
}

const gallery = new Gallery();
gallery.loadPhotos();
