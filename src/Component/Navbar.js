const Navbar = () => {
	function myFuntion() {
		let navbar = document.getElementById('nav');
    console.log("🚀 ~ file: Navbar.js ~ line 4 ~ myFuntion ~ navbar", navbar)
		navbar.classList.toggle('show');
		// console.log("Hello buesdsaddsa")
	}
	return (<>
		<header>
			<div className="toggel-button">
				<i onClick={myFuntion} className="fa fa-bars" aria-hidden="true"></i>
			</div>
			<div className="logo">
				<h1>Logo</h1>
			</div>
			<nav id="nav">
				<ul>
					<li><a href="">Home</a></li>
					<li><a href="">servicwe</a></li>
					<li><a href="">contact</a></li>
					<li><a href="">about</a></li>
				</ul>
			</nav>
		</header>
		{/* <script type="text/javascript">
			{function myFuntion() {
				console.log("Hello work")
			}}
		</script> */}

	</>);
}

export default Navbar;