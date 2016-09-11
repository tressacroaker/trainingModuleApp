Step5 = React.createClass({
  render: function(){
    return (
      <div className="view">
        <h2>Step 5</h2>
        <p>Fold the top-most layer almost all the way forward and press it down flat.</p>
        <img src="http://www.napkinfoldingguide.com/19/napkinfoldingpictures/diamondpouchfold05.jpg"/>
        <br/>
        <br/>
        <Link to='Step6'>
            <button>Step 6</button>
        </Link>
      </div>
    );
  }
});
