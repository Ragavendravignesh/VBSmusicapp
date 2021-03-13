import React from 'react';

class MusicItems extends React.Component {
  render() {
    const { songDetails, albumNames } = this.props;
    const duration = [4, 4.5, 5, 6, 4, 4.5, 5, 6, 2, 3.5];
    const Singers = [
      'Taylor Swift',
      'Selena Gomez',
      'Lady Gaga',
      'Dua Lipa',
      'Justin biber',
      'Ed Sheeran',
      'Louis Tomlinson',
      'Katy Perry',
      'Camila cabello',
    ];
    console.log(songDetails, albumNames);
    return (
      <div className='row row-cols-1 row-cols-sm-3 row-cols-md-4 g-0'>
        {songDetails.map((song, i) => {
          return (
            <div className='col mt-3' key= {i}>
              <div className='card h-100'>
                <img
                  className='card-img-top'
                  src={song.thumbnailUrl}
                  alt={song.title}
                />
                <div className='card-body'>
                  <h5 className='card-title'>{song.title}</h5>
                  <a className='card-link' href={song.url}>
                    {song.url}
                  </a>
                  <p className='card-text'>Album Name: {albumNames[i]}</p>
                  <p className='card-text'>Duration: {duration[i]}</p>
                  <p className='card-text'>Singer: {Singers[i]}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default MusicItems;
