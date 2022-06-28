# popups

This is a project created with Vue.js. This project is a popup manager that consists of 2 pages:

1.  The home page displays a small list with settings on which notifications will be displayed on the about page.
2.  The about page displays a dummy text and depending on the notifications that are set on the home page a popup modal appears at the center of the screen.

Popup notifications that exist on project:

- Time popup: a popup that is displayed some specified time after the redirection to the about page.
- Scroll popup: a popup that is displayed after the scroll height of the about page reached a specified height.
- Exit popup: a popup that is displayed after trying to redirect to home page by pressing navigation 'Back' button

All popups close automatically after a certain time amount has passed.

## Project setup

1.  git clone the repo
2.  inside the repo use "npm install" to install packages
3.  use 'npm run serve' to compile and hot-reload for development
4.  use 'npm run build' to compile and minify for production
5.  use 'npm run lint' to lint & fix files

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
