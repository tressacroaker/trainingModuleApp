Main = React.createClass({
  render: function(){
    return (
      <div>
        <header>
          <h1>Learn How to Fold Napkins!</h1>
          <div className="navbar">
            <Link to='/'>
                <button>Home</button>
            </Link>
            <Link to='Step1'>
                <button>Step 1</button>
            </Link>
            <Link to='Step2'>
                <button>Step 2</button>
            </Link>
            <Link to='Step3'>
                <button>Step 3</button>
            </Link>
            <Link to='Step4'>
                <button>Step 4</button>
            </Link>
            <Link to='Step5'>
                <button>Step 5</button>
            </Link>
            <Link to='Step6'>
                <button>Step 6</button>
            </Link>
            <Link to='Step7'>
                <button>Step 7</button>
            </Link>
            <Link to='Step8'>
                <button>Step 8</button>
            </Link>
            <Link to='Step9'>
                <button>Step 9</button>
            </Link>
            <Link to='Step10'>
                <button>Step 10</button>
            </Link>

          </div>
        </header>
        <br/>
        <hr/>
        {this.props.children}
        <br/>
        <footer>
          This is a training module footer! Courtesy of <a href="http://www.napkinfoldingguide.com/19-diamondpouch/" target="_blank">Napkin Folding Guide</a>
        </footer>
      </div>
    );
  }
});
