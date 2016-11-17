Done = React.createClass({
  render: function(){
    return(
      <div className="wrapper">
        <h1>Wake up and smell the inspiration!</h1>
        <img className="pic8" src="https://images.contentful.com/3h0qt25be5vd/1TvpZedVG4q4EWek0ggkWG/10de5b16c2988d903908467a63f911a3/Brew_Guide-FrenchPress-GoodLuck.jpg?w=1024&fm=jpg&q=80&fit=thumb"></img>
        <Link to="/">
          <button className="bottomButton">Return Home</button>
        </Link>
      </div>
    );
  }
});
