Step3 = React.createClass({
  render: function(){
    return (
      <div className="view">
        <h2>Step 3</h2>
        <p>Fold the napkin into quarters.</p>
        <img src="http://www.napkinfoldingguide.com/19/napkinfoldingpictures/diamondpouchfold03.jpg"/>
        <br/>
        <br/>
        <Link to='Step4'>
            <button>Step 4</button>
        </Link>
      </div>
    );
  }
});
