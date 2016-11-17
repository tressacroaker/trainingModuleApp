Step5 =React.createClass({
  render: function(){
    return (
      <div className="wrapper">
        <h1>Add </h1>
          <h2>more water</h2>
        <img className="pic5" src="https://images.contentful.com/3h0qt25be5vd/764EXKBrLayK8eqMey4oUG/f0f405043b4f9e4ded48f43fa4ac3f1b/Brew_Guide-FrenchPress-Step05.jpg?w=960&h=640&fm=jpg&q=70"></img>
        <h3>Now, fill it all the way to the top with water. Put the top on and allow the coffee to brew without pressing it down.</h3>
        <Link to="Step6">
          <button className="bottomButton">Step 6</button>
        </Link>
      </div>
    );
  }
});
