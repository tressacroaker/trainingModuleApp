Step6 = React.createClass({
  render: function(){
    return (
      <div className="view">
        <h2>Step 6</h2>
        <p>Fold the next top-most layer of napkin forward almost as far as the previous one and press it down as well. Make sure the edges are even with the previous fold.</p>
        <img src="http://www.napkinfoldingguide.com/19/napkinfoldingpictures/diamondpouchfold06.jpg"/>
        <br/>
        <br/>
        <Link to='Step7'>
            <button>Step 7</button>
        </Link>
      </div>
    );
  }
});
