import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui contanier comments">
      <CommentDetail author="Sam" timeAgo="Today at 4:45PM" content="Nice blogpost" avatar={faker.image.image()}/>
      <CommentDetail author="Alex" timeAgo="Today at 1:45PM" content="I like the subject" avatar={faker.image.image()}/>
      <CommentDetail author="Mehmet" timeAgo="Yesterday at 11:45AM" content="I like playing soccer" avatar={faker.image.image()}/>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));