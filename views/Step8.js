Step8 = React.createClass({
  render: function(){
    return (
      <div className="view">
        <h2>Step 8</h2>
        <p>Turn the napkin over.</p>
        <img src="http://www.napkinfoldingguide.com/19/napkinfoldingpictures/diamondpouchfold08.jpg"/>
        <br/>
        <br/>
        <Link to='Step9'>
            <button>Step 9</button>
        </Link>
      </div>
    );
  }
});
