REACT.js exploration

Following tutorial at : https://scotch.io/tutorials/learning-react-getting-started-and-concepts
- lifecycle callbacks : ok , sounds similar to custom elements/polymer
- props vs state is not clear so far:
  - changes to props to dot trigger a re-render ?
      **nevermind: use setProps instead of setting them directly**
      
  - interesting read: https://github.com/uberVU/react-guide/blob/master/props-vs-state.md
  - so props should be **immutable** and **passed in from outside**
  - *A Component cannot change its props, but it is responsible for putting together the props of its child Components.*
  
  - state is a snapshot : bla bla "mutation through time"
  - statis is private and local to the component
- shouldComponentUpdate: interesting, seems like a "update trigger filter" :
    - if not returning true , no re-rendering
    
 
Following tutorial at https://facebook.github.io/react/docs/tutorial.html

  - general:
    - composition is rather trivial
    - feels **very fast**
    - dom node referencing is a bit verbose (more so than the ** this.$ ** of polymer),
     but works :
     
          <input type="text" placeholder="Your name" ref="author" />
          
          React.findDOMNode(this.refs.author).value
          
  - propagating data back to the parent component is done via events/handlers
    - event handlers are also added to the component's props "this.props.onCommentSubmit"
    
  - there are some helpers (semantic sugar) for "pseudo dual way databing" (to be used with 
  caution, which is understandable as it might convey the wrong meaning, although it does 
  hide the implmentation details)
    
        https://facebook.github.io/react/docs/two-way-binding-helpers.html
        
        
 Following "tutorial" at http://facebook.github.io/react/docs/interactivity-and-dynamic-uis.html 
  - Autobinding: nice ! no "this" issue in event handlers
  - state : 
    - **represents change in time**
    - think state machines
    - **State should contain data that a component's event handlers may change to trigger a UI update**
  - componentDidMount : pretty close to polymer's *attached* lifecycle callback : called once
   *immediately after the initial rendering* : see here for more info on lifecycle callbacks:
   https://facebook.github.io/react/docs/component-specs.html
  - componentWillUnmount: pretty close to polymer's *detached* lifecycle callback: do *any cleanup there*
  
  
  
  Following "tutorial" at https://facebook.github.io/react/docs/thinking-in-react.html
    - first off : **great document!!** a lot of it can be used in general and is not react
    specific
      - split into logicial groups/components
      - create a "static" version of the "app"/component first
      - state goes into the component that is "above" the ones using it
      - state of the "wrapper" element is usually one of the props of the sub elements
      - the event handling/state changing is done in the **same** component that holds the state !!
    - really liking the more explicit nature of interaction & "single" direction of data flow
      - *data down , events up*
  
  
  Following https://facebook.github.io/jest/docs/tutorial-react.html#content
    - this time , we are dealing with server side tooling, testing etc
    - testing
      - is close to (based on jasmine) : good !
      - seems slow... (take with a pinch or two of salt, test machine is not great)
      - requires a bit of config in the main package file + extra file for jsx
      - is a bit verbose but relatively clear
      - requires tests to be in a __tests__ folder ? is that settable?
      - correct that : tests are **way** too verbose
      
      - attempting to use "react-page-objects" to get rid of some clutter: 
      https://github.com/QubitProducts/react-page-objects
        - very nice , but not perfect:  added an experimental modifification at 
          test5-build/__tests__/pageObject.js
        - corresponding test at SmallComponent-test.js
      - have not fully managed to get "checkbox" testing working
     
      
    - browserify seems slow on react stuff, perhaps testing webpack + hot reload could
    be good
    
    - jsx vs no jsx:
      - jsx seems horrible at first, but not so bad really
      - this:

            var element = React.createElement(MyComponent); 
      
      is the same as
      
            var element = <MyComponent />;
