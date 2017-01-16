# Angular 2 + Ngrx - Todo list with Local Storage

full ngrx flow

## Development server
1. Run `npm install` for the first time
2. Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.


## Add 'Delete' feature to the app
1. Add button in `todo-list-item` component that outputs an event on click
2. Add template refernce in `todo-list` component to that output, and an output from this template to the parent component
3. Add template refernce in the `App.component` and handle the output when it triggered, dispatch an `delete-todo` action
4. Add this action to `app.actions` file
5. Add case to this action in the `app.reducer` file

* Note: all of these actions above are pre-inserted to the relevent files and commented out for exercise purposes.
