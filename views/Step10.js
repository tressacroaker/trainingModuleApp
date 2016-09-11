Step10 = React.createClass({
  render: function(){
    return (
      <div className="view">
        <h2>Step 10</h2>
        <p>Flip it over and insert your favorite silverware.</p>
        <img src="http://www.napkinfoldingguide.com/19/napkinfoldingpictures/diamondpouchfold10.jpg"/>
        <br />
        <p>Click here to finish module.</p>
        <Link to='Finished'>
            <button>Complete Module</button>
        </Link>
      </div>
    );
  }
});
