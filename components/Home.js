Home = React.createClass({
  render: function(){
    return (
      <div className="wrapper">
        <h1>French </h1>
        <h2>Press</h2>
        <img className="pic" src="http://gearpatrol.com/wp-content/uploads/2008/06/stumptown-coffee.jpg"></img>
        <h3>Easy to brew and super consistent, the French Press is very reliable. Its classic and well-engineered design hasn’t changed much since its invention in 1929, and it’s perfect for making multiple cups of heavy-bodied coffee in 4 minutes.</h3>
        <h5>What you need</h5>
          <p>8 cup French Press brewer</p>
          <p>Grinder</p>
          <p>56g (8 Tablespoons) of fresh coffee</p>
          <p>Hot water just off the boil (about 205°F)</p>
          <p>Wooden spoon or coffee paddle</p>
          <p>Scale</p>
          <p>Timer</p>
          <p>Mug</p>
        <Link to='step1'>
        <button className="bottomButton">Lets Get Brewing!</button>
      </Link>
      </div>
    );
  }
});
