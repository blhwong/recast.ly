class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {  
        id: {
          kind: '',
          videoId: ''
        },
        snippet: {
          title: ''
        }
      },
      videoListData: []
    };
  }
  componentDidMount() {
    var options = {
      query: 'puppies',
      key: window.YOUTUBE_API_KEY,
      max: 5
    };
    this.props.searchYouTube(options, (items) => {
      this.onUpdate(items[0]);
      this.setState({videoListData: items});
    });
  }

  onUpdate (data) {
    this.setState({data});
  }

  onSearch (data) {
    var options = {
      query: data,
      key: window.YOUTUBE_API_KEY,
      max: 5
    };
    this.props.searchYouTube(options, (items) => { this.setState({videoListData: items}); });
  }

  render() {
    return (
      <div>
        <Nav onSearch={this.onSearch.bind(this)}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.data}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videoListData} onUpdate={this.onUpdate.bind(this)}/>
        </div>
      </div>

    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
