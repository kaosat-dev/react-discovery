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
  
  
  
