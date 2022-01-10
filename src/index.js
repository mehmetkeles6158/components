import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui contanier comments">
      
      <div classNAme="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.image()}/>
        </a>
        <div className="content">
          <a href="/" className="author">
            Sam
          </a>
          <div className="metadata">
            <span className="date">
             Today at 6:00PM
            </span>
          </div>
          <div className="text">
            Nice blog post!
          </div>
        </div>
      </div>
      <div classNAme="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.image()}/>
        </a>
        <div className="content">
          <a href="/" className="author">
            Sam
          </a>
          <div className="metadata">
            <span className="date">
             Today at 6:00PM
            </span>
          </div>
          <div className="text">
            Nice blog post!
          </div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));