# Assignment for Engineer.ai

Using Angular 2+ and any frameworks/open source libraries required, create an application that
does the following:
1. Periodically (every 10 seconds) poll for new posts from this API
https://hn.algolia.com/api/v1/search_by_date?tags=story via a GET request.
2. Display the title, url, created_at, and author of each post in a table.
3. Upon selecting a row in the table, a modal should appear containing the raw JSON data
of post. This modal should support dismissal by clicking outside of the modal as well as
upon clicking a close button.
4. Support the ability to filter/search the table by title.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.


