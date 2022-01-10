import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui contanier comments">
      <CommentDetail author="Sam" timeAgo="Today at 4:45PM" content="Nice blogpost"/>
      <CommentDetail author="Alex" timeAgo="Today at 1:45PM" content="I like the subject"/>
      <CommentDetail author="Mehmet" timeAgo="Yesterday at 11:45AM" content="I like playing soccer"/>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));