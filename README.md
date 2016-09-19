<img src="http://montanacodeschool.com/wp-content/uploads/2016/08/MCS_LOGO_v1-1.png" width="200" align="right"/>

##Training Module

##Purpose
The purpose of this day project is to introduce students to the React Router by creating a training module.

##Directions

###Setup

* Fork and clone this repository. Complete all of the following steps. When you have finished, push your code into GitHub.

* Create the files necessary to build your React app. Be sure to include index.html and app.js.

* Starting with your index.html, be sure to call in all of the CDN's for each of the following libraries (React, React-DOM, Babel-Browser).
```
https://unpkg.com/react@15.3.1/dist/react.js
https://unpkg.com/react-dom@15.3.1/dist/react-dom.js
https://unpkg.com/babel-core@5.8.38/browser.min.js
https://cdnjs.cloudflare.com/ajax/libs/react-router/2.7.0/ReactRouter.min.js
```

* Be sure to include all of your script files as well. For now, call in the app.js file. Also, include an empty div within your body with an ID.

* In order for React Router to work properly, add the following script tag above your JS script tags. This gives the variables global scope.

```
<script>
  var ReactRouter    = window.ReactRouter;
  var Router         = ReactRouter.Router,
      Route          = ReactRouter.Route,
      IndexRoute     = ReactRouter.IndexRoute,
      Link           = ReactRouter.Link,
      browserHistory = ReactRouter.browserHistory;
</script>
```

* In your app.js file, go ahead and set up your ReactDOM rendering using this syntax. Remember to call the ID that you selected for you empty div on your index.html file. You have the freedom to arrange your route any way that you want. In this example, I am stating that the Main component will be present with all pages, the Home component will be present on page load, and Step1, Step2, and Step3 are three routes that will take us through the module.

```
ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home}/>
      <Route path="Step1" component={Step1}/>
      <Route path="Step2" component={Step2}/>
      <Route path="Step3" component={Step3}/>
    </Route>
  </Router>
,
  document.getElementById('content')
);
```

###Build the App

* Now that everything is set up, let's start building. Our goal is to create a flow of learning from one step to the next for as many steps as you require.

* The first thing we need to do is set up our Main and Home components. In the Main component, you should set something up that is seen with all views, like a nav bar. In my app I displayed a button for each step. You can do whatever you want, be it a header, a footer, or more information or images on the top of the page.

* For your home page, you can do the same thing, just make up an information first page.

* If in any of your components you want to set up a button that redirects you to the next page, you can use the following React Link tag syntax. The 'to' property directs to the path that you have set in the Route. And whatever you have inside the Link tags, when clicked will prompt the redirect.

```
<Link to='Step1'>
    <button>Step 1</button>
</Link>
```

* As soon as you come up with a topic for your training module, you can start setting up the module page by page. You will use simple React components and render simple HTML in each.

* If your app file become too cumbersome with all of the components, feel free to create new files for them. If you do this, you need to do two things. Don't forget to include the script tag in your index file calling in your component file. Also, in the script tag that has all of the React variables, add your component variables, so that they are global variables.

###Final Touches

* If you have done everything correctly, you should have a fairly crude rendering of each page of the training module. Hopefully, you have set it up so that there is a natural flow of learning. That also means that you should have a Link tag on each page to redirect to the next step. If this is the case, go ahead and add some styles. You should now have the ability to teach anyone anything.

##Copyright

(c) Montana Code School, 2016.
