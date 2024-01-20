# 2.1
- creating actions and actions creators
# 2.2
- creating reducer
# 2.3
- creating store

# 2.4
- connect()() - is a higher order function
- connect()() - () using second brackets we are calling higher order function !
- on second () we will pass a component !
- higher order function takes a component as a argument
- on first brackets it takes two argument
- mapStateToProps , mapDispatchToProps
    ## 2.4.1
    - mapStateToProps
        - convert state to prop , concert state to map
        - will get current redux state (default state we define) 
    ## 2.4.2
    - mapDispatchToProps
        - convert dispatch to props
    ## 2.4.3
    - currently in counter component we are sending a controlling the props using the connect function from store.
    - comparing with class component we are just controlling the state using the redux
    - what happen if we sending props from parent component
    ## 2.4.4
    -  on mapStateToProps function we are sending a extra param name ownProps , with this we will get the current component props
    
