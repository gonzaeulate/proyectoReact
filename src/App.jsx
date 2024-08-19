import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faForward, faBackward } from '@fortawesome/free-solid-svg-icons';
import './App.css';

// Header component
function Header() {
  return (
    <header className="header">
      <img src="/vite.svg" alt="Logo" className="logo" />
      <input type="text" placeholder="Buscar..." className="search-bar" />
      <img src="https://picsum.photos/50" alt="Perfil" className="profile-img" />
    </header>
  );
}

// SongCard component
function SongCard({ title, artist, image }) {
  return (
    <div className="song-card">
      <img src={image} alt={title} className="song-img" />
      <p className="song-title">{title}</p>
      <p className="song-artist">{artist}</p>
    </div>
  );
}

// AlbumCard component
function AlbumCard({ title, artist, image }) {
  return (
    <div className="album-card">
      <img src={image} alt={title} className="album-img" />
      <p className="album-title">{title}</p>
      <p className="album-artist">{artist}</p>
    </div>
  );
}

// ArtistCard component
function ArtistCard({ name, image }) {
  return (
    <div className="artist-card">
      <img src={image} alt={name} className="artist-img" />
      <p className="artist-name">{name}</p>
    </div>
  );
}

// PlaybackBar component with controls
function PlaybackBar() {
  return (
    <div className="playback-bar">
      <p>Reproduciendo: Título de la Canción - Artista</p>
      <div className="controls">
        <button className="control-btn">
          <FontAwesomeIcon icon={faBackward} />
        </button>
        <button className="control-btn">
          <FontAwesomeIcon icon={faPlay} />
        </button>
        <button className="control-btn">
          <FontAwesomeIcon icon={faPause} />
        </button>
        <button className="control-btn">
          <FontAwesomeIcon icon={faForward} />
        </button>
      </div>
    </div>
  );
}




function App() {
  return (
    <div className="app">
      <Header />

      <section className="listen-again">
        <h2>Escucha de nuevo</h2>
        <div className="songs-list">
          <SongCard title="Canción 1" artist="Artista 1" image="https://picsum.photos/200/200" />
          <SongCard title="Canción 2" artist="Artista 2" image="https://picsum.photos/200/201" />
          <SongCard title="Canción 3" artist="Artista 3" image="https://picsum.photos/200/202" />
          <SongCard title="Canción 4" artist="Artista 4" image="https://picsum.photos/200/203" />
        </div>
      </section>

      <section className="quick-picks">
        <h2>Selecciones rápidas</h2>
        <div className="songs-list">
          <SongCard title="Canción rápida 1" artist="Artista 3" image="https://picsum.photos/200/203" />
          <SongCard title="Canción rápida 2" artist="Artista 4" image="https://picsum.photos/200/204" />
          <SongCard title="Canción rápida 3" artist="Artista 5" image="https://picsum.photos/200/205" />
          <SongCard title="Canción rápida 4" artist="Artista 6" image="https://picsum.photos/200/206" />
        </div>
      </section>

      <section className="recommended-albums">
        <h2>Álbumes recomendados</h2>
        <div className="albums-list">
          <AlbumCard title="Álbum 1" artist="Artista 5" image="https://picsum.photos/200/207" />
          <AlbumCard title="Álbum 2" artist="Artista 6" image="https://picsum.photos/200/208" />
        </div>
      </section>

      <section className="similar-artists">
        <h2>Similar a [Artista]</h2>
        <div className="artists-list">
          <ArtistCard name="Artista 7" image="https://picsum.photos/200/206" />
          <ArtistCard name="Artista 8" image="https://picsum.photos/200/207" />
        </div>
      </section>

      <PlaybackBar />
    </div>
  );
}

export default App;
