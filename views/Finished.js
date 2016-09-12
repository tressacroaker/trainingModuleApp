Finished = React.createClass({
  render: function(){
    return (
      <div className="view">
        <h2> Congratulations! You just folded the Diamond Pouch.</h2>
        <p>You can use this fold for your silverware and it also works well with chopsticks.<br/>This fold is simple to make and makes a charming display on your dinner table.<br/>See what other folds you can make while you are at it.</p>
        <img src="http://www.napkinfoldingguide.com/19/napkinfoldingpictures/diamondpouchfold.jpg"/>
        <br/>
        <p> Click below to go back to the main page.</p>
        <Link to='/'>
            <button>Home</button>
        </Link>
      </div>
    );
  }
});
