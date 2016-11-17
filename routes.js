ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home}/>
      <Route path="step1" component={Step1}/>
      <Route path="step2" component={Step2}/>
      <Route path="step3" component={Step3}/>
      <Route path="step4" component={Step4}/>
      <Route path="step5" component={Step5}/>
      <Route path="step6" component={Step6}/>
      <Route path="step7" component={Step7}/>
      <Route path="done" component={Done}/>
    </Route>
  </Router>,
  document.getElementById('content')
);
