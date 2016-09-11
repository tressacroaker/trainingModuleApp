Step4 = React.createClass({
  render: function(){
    return (
      <div className="view">
        <h2>Step 4</h2>
        <p>Orient the napkin so the open end faces away from you.</p>
        <img src="http://www.napkinfoldingguide.com/19/napkinfoldingpictures/diamondpouchfold04.jpg"/>
        <br/>
        <br/>
        <Link to='Step5'>
            <button>Step 5</button>
        </Link>
      </div>
    );
  }
});
