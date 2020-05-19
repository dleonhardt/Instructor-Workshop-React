import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Link, Container } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
	title: {
		flexGrow: 1,
	},
	link: {
		margin: theme.spacing(1, 1.5),
	},
	section: {
		margin: theme.spacing(3, 0),
	}
}));

function App() {
	const classes = useStyles();

	return (
		<>
			<header>
				<AppBar position="static">
					<Toolbar>
						<Typography variant="h6" className={classes.title}>
							<Link color="inherit" href="#" className={classes.link}>
								John Doe
							</Link>
						</Typography>
						<nav>
							<Link variant="button" color="inherit" href="#" className={classes.link}>
							Resume
							</Link>
							<Link variant="button" color="inherit" href="#" className={classes.link}>
							GitHub
							</Link>
							<Link variant="button" color="inherit" href="#" className={classes.link}>
							LinkedIn
							</Link>
							<Link variant="button" color="inherit" href="#" className={classes.link}>
							Contact
							</Link>
						</nav>
					</Toolbar>
				</AppBar>
			</header>
			<main className={classes.section}>
			<Container>
				<Typography variant="h5" className={classes.title}>
					Portfolio
				</Typography>
				<Typography className={classes.section}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eleifend imperdiet ipsum et iaculis. Vestibulum tincidunt ex et orci ornare, vel vehicula magna laoreet. Proin gravida maximus pellentesque. Maecenas vitae fermentum eros. Fusce congue ipsum nec ultrices mollis. Nullam vel finibus risus, sed tincidunt nisi. In volutpat malesuada tortor, nec mollis ipsum porttitor et. Morbi eu dictum purus. Sed nunc odio, viverra vel nulla ut, semper euismod tellus. Nullam hendrerit maximus mi vel venenatis. Suspendisse potenti. In consectetur, quam at faucibus maximus, nisi diam feugiat dolor, rutrum vehicula est dolor quis tellus. Nam nec ipsum malesuada, accumsan mauris in, ultrices purus.</Typography>
				<Typography className={classes.section}>Nulla sodales felis ut eros pellentesque, eget faucibus odio laoreet. Praesent sed turpis eu est tempor sagittis. Donec ac risus eget purus mattis gravida vitae sed mi. Aenean euismod erat non imperdiet rhoncus. Sed placerat, nisi id rutrum aliquet, dui massa sodales orci, pellentesque finibus purus tortor quis lacus. Sed ut convallis nisl. Fusce eu leo justo.</Typography>
				<Typography variant="h5" className={classes.title}>
					About Me
				</Typography>
				<Typography className={classes.section}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eleifend imperdiet ipsum et iaculis. Vestibulum tincidunt ex et orci ornare, vel vehicula magna laoreet. Proin gravida maximus pellentesque. Maecenas vitae fermentum eros. Fusce congue ipsum nec ultrices mollis. Nullam vel finibus risus, sed tincidunt nisi. In volutpat malesuada tortor, nec mollis ipsum porttitor et. Morbi eu dictum purus. Sed nunc odio, viverra vel nulla ut, semper euismod tellus. Nullam hendrerit maximus mi vel venenatis. Suspendisse potenti. In consectetur, quam at faucibus maximus, nisi diam feugiat dolor, rutrum vehicula est dolor quis tellus. Nam nec ipsum malesuada, accumsan mauris in, ultrices purus.</Typography>
				<Typography className={classes.section}>Nulla sodales felis ut eros pellentesque, eget faucibus odio laoreet. Praesent sed turpis eu est tempor sagittis. Donec ac risus eget purus mattis gravida vitae sed mi. Aenean euismod erat non imperdiet rhoncus. Sed placerat, nisi id rutrum aliquet, dui massa sodales orci, pellentesque finibus purus tortor quis lacus. Sed ut convallis nisl. Fusce eu leo justo.</Typography>
				<Typography variant="h5" className={classes.title}>
					Contact
				</Typography>
				<section className={classes.section}>
					<Typography>Email: <Link href="mailto:john@john.com">john@john.com</Link></Typography>
					<Typography>Phone: <Link href="tel:(123) 456-7890">(123) 456-7890</Link></Typography>
				</section>
			</Container>
			</main>
			<footer>

			</footer>
		</>
	);
}

export default App;