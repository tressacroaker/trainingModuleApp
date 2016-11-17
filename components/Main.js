Main = React.createClass({
  render: function(){
    return (
        <div className="container">
          <img className="logo" src="http://redcaboose.coffee/wp-content/uploads/2015/01/stumptown-roasters-logo.png"></img>
          <header>
            <Link to='/'>
              <button>BEGIN</button>
            </Link>
            <Link to='Step1'>
              <button>1</button>
            </Link>
            <Link to='Step2'>
              <button>2</button>
            </Link>
            <Link to='Step3'>
              <button>3</button>
            </Link>
            <Link to='Step4'>
              <button>4</button>
            </Link>
            <Link to='Step5'>
              <button>5</button>
            </Link>
            <Link to='Step6'>
              <button>6</button>
            </Link>
            <Link to='Step7'>
              <button>7</button>
            </Link>
            <Link to='Done'>
              <button>ENJOY!</button>
            </Link>
          </header>
          {this.props.children}
          <footer>
          
          </footer>
        </div>
    );
  }
});
