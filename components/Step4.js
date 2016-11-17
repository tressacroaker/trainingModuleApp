Step4 = React.createClass({
  render: function(){
    return (
      <div className="wrapper">
        <h1>Stir</h1>
        <img className="pic4" src="https://images.contentful.com/3h0qt25be5vd/46tEwt0aBWaQGCysYWQkWK/7117b835600cb5fd27944b82ca19214d/Brew_Guide-FrenchPress-Step04.jpg?w=960&h=640&fm=jpg&q=70"></img>
        <h3>At 1:00, use a wooden spoon or spatula to break the top layer we call the crust. We prefer to use wood and not metal so you don’t accidentally crack the glass. Give it a good stir.</h3>
        <Link to="Step5">
          <button className="bottomButton">Step 5</button>
        </Link>
      </div>
    );
  }
});
