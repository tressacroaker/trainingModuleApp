Step2 = React.createClass({
  render: function(){
    return (
      <div className="view">
        <h2>Step 2</h2>
        <p>Fold the napkin in half and orient the open end toward you.</p>
        <img src="http://www.napkinfoldingguide.com/19/napkinfoldingpictures/diamondpouchfold02.jpg"/>
        <br/>
        <br/>
        <Link to='Step3'>
            <button>Step 3</button>
        </Link>
      </div>
    );
  }
});
