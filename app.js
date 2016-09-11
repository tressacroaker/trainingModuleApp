ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home}/>
      <Route path="Step1" component={Step1}/>
      <Route path="Step2" component={Step2}/>
      <Route path="Step3" component={Step3}/>
      <Route path="Step4" component={Step4}/>
      <Route path="Step5" component={Step5}/>
      <Route path="Step6" component={Step6}/>
      <Route path="Step7" component={Step7}/>
      <Route path="Step8" component={Step8}/>
      <Route path="Step9" component={Step9}/>
      <Route path="Step10" component={Step10}/>
      <Route path="Finished" component={Finished}/>
    </Route>
  </Router>
,
  document.getElementById('content')
);
