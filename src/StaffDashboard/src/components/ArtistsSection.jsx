import React from 'react';

function ArtistsSection() {
  const artists = [
    { name: 'Nica Beatriz Flores', genre: 'Abstract', sold: 144, status: 'Active', image: 'images/placeholder1.jpg' },
    { name: 'Aiah Marie Santos', genre: 'Portrait', sold: 105, status: 'Active', image: 'images/placeholder2.jpg' },
    { name: 'Kira Elise Bautista', genre: 'Ceramic', sold: 98, status: 'Active', image: 'images/placeholder3.jpg' },
    { name: 'Ace Benjamin Flores', genre: 'Sculpture', sold: 89, status: 'Offline', image: 'images/placeholder4.png' },
    { name: 'Enzo Gabriel Mendozas', genre: 'Digital', sold: 76, status: 'Active', image: 'images/placeholder5.png' },
    { name: 'Jax Daniel Ramos', genre: 'Graphic', sold: 81, status: 'Active', image: 'images/placeholder6.jpg' },
    { name: 'Boy Abunda', genre: 'Mural', sold: 70, status: 'Offline', image: 'images/placeholder7.jpg' },
    { name: 'Migs Alejandro Cruz', genre: 'Sculpture', sold: 75, status: 'Offline', image: 'images/placeholder8.jpg' }
  ];

  return (
    <section className="artists-section">
      <h3>Artists</h3>
      <table className="artists-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Genre</th>
            <th>Artworks Sold</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {artists.map((artist, index) => (
            <tr key={index}>
              <td>
                <img src={artist.image} alt={artist.name} className="artist-avatar" />
                {artist.name}
              </td>
              <td>{artist.genre}</td>
              <td>{artist.sold}</td>
              <td>
                <span className={`status ${artist.status.toLowerCase()}`}>
                  {artist.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default ArtistsSection;
