import React from 'react';
import $ from 'jquery';

class Playlist extends React.Component {
  state = { playListName: '' };

  onValueChange = async (event) => {
    this.setState({ playListName: event.target.value });
  };

  onCreate = async (event) => {
    event.preventDefault();
    this.props.onCreate(this.state.playListName);
    this.setState({ playListName: '' });
    $('#exampleModalCenter').modal('hide');
  };

  render() {
    const { playlist } = this.props;

    return (
      <div className='offset-2'>
        {(playlist && playlist.length && (
          <div className='playlist'>
            <h5 style={{textAlign:'center'}}>List of playlist</h5>
            {playlist.map((value, i) => {
              return (
                <li className='playlist-item' key={i}>
                  {value}
                </li>
              );
            })}
          </div>
        )) || <div className='errortext'>Sorry, no playlist to display.</div>}

        <button
          type='button'
          className='btn btn-primary'
          data-toggle='modal'
          data-target='#exampleModalCenter'
        >
          Create new playlist
        </button>

        <div
          className='modal fade'
          id='exampleModalCenter'
          tabIndex='-1'
          role='dialog'
          aria-labelledby='exampleModalCenterTitle'
          aria-hidden='true'
        >
          <div className='modal-dialog modal-dialog-centered' role='document'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title' id='exampleModalLongTitle'>
                  Hey, Can you give the playlist name
                </h5>
                <button
                  type='button'
                  className='close'
                  data-dismiss='modal'
                  aria-label='Close'
                >
                  <span aria-hidden='true'>&times;</span>
                </button>
              </div>
              <div className='modal-body'>
                <form onSubmit={this.onCreate}>
                  <div className='form-group'>
                    <input
                      className='form-control'
                      type='text'
                      value={this.state.playListName}
                      onChange={this.onValueChange}
                    />
                  </div>
                  <div className='modal-footer'>
                    <button type='submit' className='btn btn-primary'>
                      Create
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Playlist;
