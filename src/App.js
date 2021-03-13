import React from 'react';
import BaseURL from './Api/BaseURL';
import SearchBar from './Components/SearchBar';
import MusicList from './Components/MusicList';
import Playlist from './Components/Playlist';
import './App.css';

class App extends React.Component {
  state = {
    songs: [],
    albums: [],
    searchKey: '',
    showPlaylist: false,
    playlist: []
  };
  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const songResponse = await BaseURL.get('/photos');
    const albumResponse = await BaseURL.get('/albums');

    this.setState({ songs: songResponse.data, albums: albumResponse.data });
  };

  search = async (value) => {
    this.setState({ searchKey: value });
  };

  changeFlag = () => {
    this.setState({ showPlaylist: !this.state.showPlaylist });
  };

  addPlaylist = async (playListName) => {
    await this.setState({playlist:[...this.state.playlist, playListName]})
    console.log(this.state.playlist);
  }

  render() {
    return (
      <div className='container'>
        <div className='row mt-3'>
          <div className='offset-1 col-6 '>
            <SearchBar onFormSubmit={this.search} />
          </div>
          <div className='offest-1'>
            <button className='btn btn-primary' onClick={this.changeFlag}>
              {this.state.showPlaylist ? 'Show music' : 'Create Playlist'}
            </button>
          </div>
        </div>
        <div className='row mt-2'>
          {!this.state.showPlaylist && (
            <MusicList
              songs={this.state.songs}
              albums={this.state.albums}
              searchKey={this.state.searchKey}
            />
          )}
          {this.state.showPlaylist && <Playlist onCreate = {this.addPlaylist} playlist = {this.state.playlist}/>}
        </div>
      </div>
    );
  }
}

export default App;
