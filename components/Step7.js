Step7 = React.createClass({
  render: function(){
    return (
      <div className="wrapper">
        <h1>Serve </h1>
          <h2>& enjoy</h2>
        <img className="pic7" src="https://images.contentful.com/3h0qt25be5vd/30mLlMNBUIeyk6oGqSu8AU/993a41a085a08d8db6195dbfc0b67790/Brew_Guide-FrenchPress-Step07.jpg?w=960&h=640&fm=jpg&q=70"></img>
        <h3>Serve it up. Pour coffee into a carafe immediately to avoid over extraction. If the coffee sits on the grounds too long, it continues to extract and will become bitter. To clean the French Press, we find it easiest to add a little water to the grounds, give it a good swirl, and empty into the trash or compost bin.</h3>
        <Link to="Done">
          <button className="bottomButton">The Finale</button>
        </Link>
      </div>
    );
  }
});
