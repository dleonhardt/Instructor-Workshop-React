# 1.1 Folder Structure

In this activity we are going to implement best practices when it comes to file and folder structure within React apps.

## Folder Setup & Installation

If you have done this in a previous exercise, you may be able to skip some steps below such as the creation of the `reactworkshop` folder.

* Create a folder called `reactworkshop` separate from this repository that you can use for all of the activities throughout the lesson.

* If this is the first exercise you are working on, copy the entire contents of the [Unsolved](Unsolved) folder and paste it into your `reactworkshop` folder. Otherwise, you just need to copy and paste the [Unsolved/src](Unsolved/src) folder.

* Since these activities were all built using Create React App all we will need to do is `npm install` once and then copy and paste the `src` folders for each.

	* NOTE: You do NOT need to run Create React App in order to do these exercises. All you will need to do is install the dependencies in the provided node package.json file.

* Install node packages by running the command `npm install` from within the [Unsolved/src](Unsolved/src) folder.

* Stop the dev server if it is already running. Start the app in dev mode by running `npm start`.

## Exercise

* Open your browser to [localhost:3000](http://localhost:3000) and study the rendered application.

* Now navigate to [Unsolved/src/App.js](Unsolved/src/App.js). You will notice that there is a folder already included called "styles".

* Import the CSS included in the "styles" folder into App.js by add the following:

```
import "./styles/base.css";
```

* Your rendered application should now display a larger version of the text "Hello World".

* Now create a new folder within [Unsolved/src/](Unsolved/src/) called "components".

* We are going to add the following components to that folder:

	* Header

	* Nav

	* Footer

*  Although there are many ways to go about this, here are some common approaches:

	1. We can simply create a .js file for each. For example:

		* [Unsolved/src/components/Header.js](Header.js)

		* [Unsolved/src/components/Nav.js](Nav.js)

		* [Unsolved/src/components/Footer.js](Footer.js)

	2. We can create folders for each. This is helpful in organizing your folder so if you add CSS later on, you can have the CSS in the same folder as your component. You can name the javascript files `index.js` so that you can import the folder.

		* [Unsolved/src/components/Header/index.js](Unsolved/src/components/Header/index.js)

		* [Unsolved/src/components/Nav/index.js](Unsolved/src/components/Nav/index.js)

		* [Unsolved/src/components/Footer/index.js](Unsolved/src/components/Footer/index.js)

		* And then import them like so:

			```
			import Header "./components/Header";
			import Nav "./components/Nav";
			import Footer "./components/Footer";
			```

		* Alternatively, you can also name the files by the name of their component within the folder of the same name.

			* [Unsolved/src/components/Header/Header.js](Unsolved/src/components/Header/Header.js)

			* [Unsolved/src/components/Nav/Nav.js](Unsolved/src/components/Nav/Nav.js)

			* [Unsolved/src/components/Footer/Footer.js](Unsolved/src/components/Footer/Footer.js)

			* And then:

			```
			import Header from "./components/Header";
			import Nav from "./components/Nav";
			import Footer from "./components/Footer";
			```
	
	3. Or you can have the best of both worlds by doing the last method but adding a `index.js` file to the folder with the following code:

		* [Unsolved/src/components/Header/index.js](Unsolved/src/components/Header/index.js)
		```
		export { default } from "./Header";
		```

		* [Unsolved/src/components/Nav/index.js](Unsolved/src/components/Nav/index.js)
		```
		export { default } from "./Nav";
		```

		* [Unsolved/src/components/Footer/index.js](Unsolved/src/components/Footer/index.js)
		```
		export { default } from "./Footer";
		```

* Now, create the code within each component. For example:

```
import React from "react";

function Header() {
	return (
		<header>
			<h1>Header</h1>
		</header>
	)
}

export default Header;
```

* Now, replace the `<h1>Hello World</h1>` in [Unsolved/src/App.js](Unsolved/src/App.js) with the 3 components that you just created.