/*
 * NOTE:
 * =====
 * This file will hold any of this module's data-structure (i.e. model) definitions to be used across this module's related files
 * */


export enum TodoStatus {
    all = 0,
    complete = 1,
    pending = 2
}

export const store = {
    todos: 'todos',
    visibilityFilter: 'visibilityFilter'
};