import React from 'react';
import MusicItems from './MusicItems';

class MusicList extends React.Component {
  state = { data: [] };

  getSongList = (songs, searchKey) => {
    let result = [];
    if (!searchKey) {
      result = songs.slice(0, 10);
    } else {
      result = songs
        .filter((song) => {
          return song.title.startsWith(searchKey);
        })
        .slice(0, 10);
    }

    return result;
  };

  getAlbumName = (songs, searchKey, albums) => {
    let data = this.getSongList(songs, searchKey);

    const albumNames = [];
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < albums.length; j++) {
        if (data[i].albumId === albums[j].id) {
          albumNames.push(albums[j].title);
        }
      }
    }

    return albumNames;
  };
  render() {
    const { songs, albums, searchKey } = this.props;

    return (
      <div>
        <MusicItems
          songDetails={this.getSongList(songs, searchKey)}
          albumNames={this.getAlbumName(songs, searchKey, albums)}
        />
      </div>
    );
  }
}

export default MusicList;
