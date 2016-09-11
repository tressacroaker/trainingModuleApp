Step7 = React.createClass({
  render: function(){
    return (
      <div className="view">
        <h2>Step 7</h2>
        <p>Fold the next layer back as you did the two before it.</p>
        <img src="http://www.napkinfoldingguide.com/19/napkinfoldingpictures/diamondpouchfold07.jpg"/>
        <br/>
        <br/>
        <Link to='Step8'>
            <button>Step 8</button>
        </Link>
      </div>
    );
  }
});
