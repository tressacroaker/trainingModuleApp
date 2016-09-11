Step1 = React.createClass({
  render: function(){
    return (
      <div className="view">
        <h2>Step 1</h2>
        <p>Lay the napkin face-down in front of you.</p>
        <img src="http://www.napkinfoldingguide.com/19/napkinfoldingpictures/diamondpouchfold01.jpg"/>
        <br/>
        <br/>
        <Link to='Step2'>
            <button>Step 2</button>
        </Link>
      </div>
    );
  }
});
