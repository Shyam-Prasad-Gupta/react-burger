import React from 'react';
import ReactDOM from 'react-dom';

// var CommentBox = function() {
//       return (
//         <div className="commentBox">
//           Hello, world! I am a CommentBox.
//         </div>
//       );
//     };

var CommentBox = React.createClass({
    render: function() {
      return (
        <div className="commentBox">
          Hello, world! I am a CommentBox.
        </div>
      );
    }
  });
    var justElement = React.createElement(<div/>);
    ReactDOM.render(CommentBox, document.getElementById("testId"));

  export default CommentBox;