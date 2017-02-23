// class VideoListEntry extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   update(event) {
//     debugger;
//     console.log('click');
//     console.log(event);
//     console.log(this);
//     this.props.onUpdate(this.props.video);
//   }
//   render() {
//     var dataSnippet = this.props.video.snippet;
//     return (
//       <div className="video-list-entry">
//         <div className="media-left media-middle">
//           <img className="media-object" src={dataSnippet.thumbnails.default.url} alt="" />
//         </div>
//         <div className="media-body">
//           <div className="video-list-entry-title" onClick ={this.update.bind(this)}>{dataSnippet.title}</div>
//           <div className="video-list-entry-detail">{dataSnippet.description}</div>
//         </div>
//       </div>
//     );
//   }
// }

var VideoListEntry = (props) => {

  var update = () => {
    props.onUpdate(props.video);
  };
    return (
      <div className="video-list-entry">
        <div className="media-left media-middle">
          <img className="media-object" src={props.video.snippet.thumbnails.default.url} alt="" />
        </div>
        <div className="media-body">
          <div className="video-list-entry-title" onClick ={update}>{props.video.snippet.title}</div>
          <div className="video-list-entry-detail">{props.video.snippet.description}</div>
        </div>
      </div>
      );
}

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoListEntry = VideoListEntry;
