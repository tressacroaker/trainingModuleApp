Step2 = React.createClass({
  render: function(){
    return (
      <div className="wrapper">
        <h1>Measure </h1>
          <h2>and grind</h2>
        <img className="pic2" src="https://images.contentful.com/3h0qt25be5vd/6Mc6FhOeC4kigweU4EWUsg/fe21082093fb7bc3c324e365508892a0/Brew_Guide-FrenchPress-Step02.jpg?w=960&h=640&fm=jpg&q=70"></img>
        <h3>Measure out 56g (about 8 Tablespoons) of coffee and grind it as coarse as breadcrumbs.</h3>
        <Link to="Step3">
          <button className="bottomButton">Step3</button>
        </Link>
      </div>
    );
  }
});
