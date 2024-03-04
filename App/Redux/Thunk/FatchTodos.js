const { default: TodoActions } = require("../Todos/Actions");

let dummyData = [
    {
        id: 1,
        text: "Build a React Native app Build a React Native app Build a React Native app",
        completed: false,
    },
    {
        id: 2,
        text: "Build a React Native app",
        completed: false,
    },
    {
        id: 3,
        text: "Build a React Native app",
        completed: false,
    },   {
        id: 4,
        text: "Build a React Native app",
        completed: false,
    },   {
        id: 5,
        text: "Build a React Native app",
        completed: false,
    }
];



const fetchTodos = async (dispatch, getState) => {
    // const response = await fetch();
    // const todos = await response.json(0)
    const todos = dummyData;

    dispatch(TodoActions.loaded(todos))
}

export default fetchTodos;