Home = React.createClass({
  render: function(){
    return (
      <div className="view">
        <h2> This is a training module to learn about how to fold a napkin into a Diamond Pouch.</h2>
        <img src="http://www.napkinfoldingguide.com/19/napkinfoldingpictures/diamondpouchfold.jpg"/>
        <br/>
        <p> Click on the button below to get started</p>
        <Link to='Step1'>
						<button>Start Module</button>
				</Link>
      </div>
    );
  }
});
