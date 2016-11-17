Step1 = React.createClass({
  render: function(){
    return (
      <div className="wrapper">
        <h1>Warm up </h1>
          <h2>the press</h2>
        <img className="pic1" src="https://images.contentful.com/3h0qt25be5vd/5uDAOcsabugoq6iUeyU2Qi/b8e7f30a13b8b53c0cd520bee2c814f7/Brew_Guide-FrenchPress-Step01.jpg?w=960&h=640&fm=jpg&q=70"></img>
        <h3>Warm up your empty French Press by rinsing it with very hot water. This helps maintain the temperature while brewing for best extraction.</h3>
        <Link to="Step2">
          <button className="bottomButton">Step 2 </button>
        </Link>
      </div>
    );
  }
});
