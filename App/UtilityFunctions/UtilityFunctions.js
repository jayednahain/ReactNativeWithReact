const UtilityFunctions = {
    remainingTaskText(numberOfTodos) {
        switch (numberOfTodos) {
            case 0:
                return "No task remaining";
            case 1:
                return "1 task left";
            default:
                return `${numberOfTodos} tasks`;
        }
    }
};

export default UtilityFunctions;