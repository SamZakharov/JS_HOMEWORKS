class ListOfAlbums {
  #url = null;

  #listOfAlbums = null;

  constructor(url) {
    this.#url = url;
    this.#listOfAlbums = document.querySelector('.album-list');
    this.#listOfAlbums.addEventListener('click', this.handleClick.bind(this));
  }

  async fetchAlbums() {
    try {
      const responce = await fetch(this.#url);
      return await responce.json();
    } catch (err) {
      console.error('Failed to fetch albums:', err);
      alert('Failed to load albums. Please try again later.');
    }
  }

  renderAlbums() {
    this.fetchAlbums().then((albums) => {
      albums.forEach((album) => {
        const singleAlbum = document.createElement('li');
        singleAlbum.setAttribute('id', `${album.id}`);
        singleAlbum.textContent = `${album.id}. ${album.title}`;
        this.#listOfAlbums.appendChild(singleAlbum);
      });
    });
  }

  handleClick(e) {
    const albumId = e.target.id;
    if (albumId) {
      this.#listOfAlbums.removeEventListener('click', this.handleClick.bind(this));
      window.location.href = `./photos.html?albumId=${albumId}`;
    }
  }
}

const albumList = new ListOfAlbums('https://jsonplaceholder.typicode.com/albums');
albumList.renderAlbums();
