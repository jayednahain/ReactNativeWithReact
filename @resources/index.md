# 2.1
- Creating actions and action creators

# 2.2
- Creating reducer

# 2.3
- Creating store

# 2.4
- `connect()()` - a higher-order function
- `connect()()` - by using the second set of brackets, we are calling the higher-order function!
- On the second set of brackets, we will pass a component.
- A higher-order function takes a component as an argument.
- On the first set of brackets, it takes two arguments: `mapStateToProps` and `mapDispatchToProps`.
  ## 2.4.1
  - `mapStateToProps`
    - Converts state to props, converts state to a map.
    - Will get the current Redux state (default state we define).
  ## 2.4.2
  - `mapDispatchToProps`
    - Converts dispatch to props.
  ## 2.4.3
  - Currently, in the counter component, we are controlling the props using the `connect` function from the store.
    - Comparing with a class component, we are just controlling the state using Redux.
    - What happens if we send props from the parent component?
  ## 2.4.4
  - On the `mapStateToProps` function, we are sending an extra parameter named `ownProps`; with this, we will get the current component props.

# 2.5 Using Hooks
- `useSelector()`
- Hooks should always be declared at the top of the function.
- Here, "selector" means something you can select from the state.
- It wants a function; using my custom function, it will select something.

# 2.6 `useDispatch`

# 2.7 Running Dynamic Counter