Step6= React.createClass({
  render: function(){
    return (
      <div className="wrapper">
        <h1>Press</h1>
        <img className="pic6" src="https://images.contentful.com/3h0qt25be5vd/2FZpPQK7gskYu8EoqQmCO8/284cbc230d095ff931fa2f2d9e49331f/Brew_Guide-FrenchPress-Step06.jpg?w=960&h=640&fm=jpg&q=70"></img>
        <h3>At 4:00, you are ready to press. Firmly push the press all the way down.</h3>
        <Link to="Step7">
          <button className="bottomButton">Step 7</button>
        </Link>
      </div>
    );
  }
});
