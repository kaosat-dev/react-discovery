REACT.js exploration

- lifecycle callbacks : ok , sounds similar to custom elements/polymer
- props vs state is not clear so far:
  - changes to props to dot trigger a re-render ?
      **nevermind: use setProps instead of setting them directly**
      
  - interesting read: https://github.com/uberVU/react-guide/blob/master/props-vs-state.md
  - so props should be immutable and **passed in from outside**
  - *A Component cannot change its props, but it is responsible for putting together the props of its child Components.*
  
  - state is a snapshot : bla bla "mutation through time"
  - statis is private and local to the component
- shouldComponentUpdate: interesting, seems like a "update trigger filter" :
    - if not returning true , no re-rendering
    
 
    
