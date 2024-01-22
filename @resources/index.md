- #28 CLASS VS HOOKS

- #31 `setState` and Shallow Merge
  - `setState` shallow merges to the current state object.
  - Shallow will look for any key that exists in the current state object and update it with the new value.

- #32 `setState` and Secondary Callback
  - (#32-1)
    - `setState` is an asynchronous call.
    - Console log synchronous call.
      - When the console log is called, the state might not be updated.
  - (#32-2) `setState` takes two different arguments.
  - (#32-3) In the first parameter, we can update the state using returning.
    - The second parameter callback will run after updating the state.
  - (#32-4) We can use state inside the 1st argument callback parameter.

- (#37) Life Cycle Method `componentDidMount`
  - `componentDidMount`
    - Mounting is the first time a component gets placed into the DOM.
    - So, the first time React renders a component into the page is mounting.
    - It only happens once.
    - It's specially used for API calling.

- (#39) Renders and Re-renders in React
  - Life cycle
    - 1. `constructor()` runs first.
      - We initialize states in the constructor.
    - 2. `render()` runs then.
      - Renders determine what to show.
    - 3. `componentDidMount()` runs next.
  - After consoling with the life cycle, we see the render method runs twice.
    - The moment we need to change state, we called `setState`.
      - React knows this component is different; I need to re-render.

- (#44) - 

- (#57) Pure and Impure Functions
  - Pure function
    - Returns the exact same thing when given the same argument.
  - Impure function
    - If it modifies or relies on something outside of its scope.
    - Functional components will create impure functionality.

- (#58) Hooks - `useState`
  - Created `2_functional_component` directory for building projects in functional components.
  - `useState` hook
    - `useState` gives us the ability to encapsulate local state in a functional component.
    - For using `useState()`, we need to use array destructuring.
    - Assigns two variables inside an array.
      - (#58)-1
        - `useState` returns us an array `[value, setValue]`.
        - In a class component, it was an object.
        - In a functional component, it is an individual value.
        - For multiple values, we need multiple `useState()`.
          - Each hook just hooks one value.
        - `[valueOne, valueTwo]`
          - Under the hood, React will check if "valueOne" this state value is updated or not.

- (#60) Infinite Re-rendering 
  - Setting up product list data.
    - (#60)-1
      - An empty list because we want to run this effect just once when the component is initialized.