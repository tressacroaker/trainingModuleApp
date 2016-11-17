Step3 = React.createClass({
  render: function(){
    return (
      <div className="wrapper">
        <h1>Add </h1>
          <h2>water</h2>
        <img className="pic3" src="https://images.contentful.com/3h0qt25be5vd/2zdJuh7KW0UsykosgSW0uo/70611d95a8384c4d70ca8155a7e31005/Brew_Guide-FrenchPress-Step03.jpg?w=960&h=640&fm=jpg&q=70"></img>
        <h3>Now that your French Press is warmed up, discard the hot water and add coffee into the empty press. Start your count-up timer as soon as you add hot water. Fill it up halfway to the top saturating all the grounds, making sure that there are no dry spots.</h3>
        <Link to="Step4">
          <button className="bottomButton">Step4</button>
        </Link>
      </div>
    );
  }
});
