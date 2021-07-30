import features1 from "../assets/img/features1.png";
const Basic = () => {
	return (<>
		<header id="header" className="fixed-top d-flex align-items-center  header-transparent ">
			<div className="container d-flex align-items-center justify-content-between">
				<div className="logo">
					<h1><a href="index.html">Selecao</a></h1>
				</div>

				<nav id="navbar" className="navbar">
					<ul>
						<li><a className="nav-link scrollto active" href="#hero">Home</a></li>
						<li><a className="nav-link scrollto" href="#about">About</a></li>
						<li><a className="nav-link scrollto" href="#services">Services</a></li>
						<li><a className="nav-link scrollto " href="#portfolio">Portfolio</a></li>
						<li><a className="nav-link scrollto" href="#pricing">Pricing</a></li>
						<li><a className="nav-link scrollto" href="#team">Team</a></li>
						<li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
							<ul>
								<li><a href="#">Drop Down 1</a></li>
								<li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
									<ul>
										<li><a href="#">Deep Drop Down 1</a></li>
										<li><a href="#">Deep Drop Down 2</a></li>
										<li><a href="#">Deep Drop Down 3</a></li>
										<li><a href="#">Deep Drop Down 4</a></li>
										<li><a href="#">Deep Drop Down 5</a></li>
									</ul>
								</li>
								<li><a href="#">Drop Down 2</a></li>
								<li><a href="#">Drop Down 3</a></li>
								<li><a href="#">Drop Down 4</a></li>
							</ul>
						</li>
						<li><a className="nav-link scrollto" href="#contact">Contact</a></li>
					</ul>
					<i className="bi bi-list mobile-nav-toggle"></i>
				</nav>

			</div>
		</header>

		<section id="hero" className="d-flex flex-column justify-content-end align-items-center">
			<div id="heroCarousel" data-bs-interval="5000" className="container carousel carousel-fade" data-bs-ride="carousel">

				<div className="carousel-item active">
					<div className="carousel-container">
						<h2 className="animate__animated animate__fadeInDown">Welcome to <span>Selecao</span></h2>
						<p className="animate__animated fanimate__adeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
						<a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
					</div>
				</div>

				<div className="carousel-item">
					<div className="carousel-container">
						<h2 className="animate__animated animate__fadeInDown">Lorem Ipsum Dolor</h2>
						<p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
						<a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
					</div>
				</div>

				<div className="carousel-item">
					<div className="carousel-container">
						<h2 className="animate__animated animate__fadeInDown">Sequi ea ut et est quaerat</h2>
						<p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
						<a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
					</div>
				</div>

				<a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
					<span className="carousel-control-prev-icon bx bx-chevron-left" aria-hidden="true"></span>
				</a>

				<a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
					<span className="carousel-control-next-icon bx bx-chevron-right" aria-hidden="true"></span>
				</a>

			</div>

			{/* <svg className="hero-waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28 " preserveAspectRatio="none" >
      <defs>
        <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z">
      </defs>
      <g className="wave1">
        <use xlink:href="#wave-path" x="50" y="3" fill="rgba(255,255,255, .1)">
      </g>
      <g className="wave2">
        <use xlink:href="#wave-path" x="50" y="0" fill="rgba(255,255,255, .2)">
      </g>
      <g className="wave3">
        <use xlink:href="#wave-path" x="50" y="9" fill="#fff">
      </g>
    </svg> */}

		</section>


		<main id="main">

			<section id="about" className="about">
				<div className="container">

					<div className="section-title" data-aos="zoom-out">
						<h2>About</h2>
						<p>Who we are</p>
					</div>

					<div className="row content" data-aos="fade-up">
						<div className="col-lg-6">
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
								magna aliqua.
							</p>
							<ul>
								<li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
								<li><i className="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit</li>
								<li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
							</ul>
						</div>
						<div className="col-lg-6 pt-4 pt-lg-0">
							<p>
								Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
								velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
								culpa qui officia deserunt mollit anim id est laborum.
							</p>
							<a href="#" className="btn-learn-more">Learn More</a>
						</div>
					</div>

				</div>
			</section>

			<section id="features" className="features">
				<div className="container">

					<ul className="nav nav-tabs row d-flex">
						<li className="nav-item col-3" data-aos="zoom-in">
							<a className="nav-link active show" data-bs-toggle="tab" href="#tab-1">
								<i className="ri-gps-line"></i>
								<h4 className="d-none d-lg-block">Modi sit est dela pireda nest</h4>
							</a>
						</li>
						<li className="nav-item col-3" data-aos="zoom-in" data-aos-delay="100">
							<a className="nav-link" data-bs-toggle="tab" href="#tab-2">
								<i className="ri-body-scan-line"></i>
								<h4 className="d-none d-lg-block">Unde praesenti mara setra le</h4>
							</a>
						</li>
						<li className="nav-item col-3" data-aos="zoom-in" data-aos-delay="200">
							<a className="nav-link" data-bs-toggle="tab" href="#tab-3">
								<i className="ri-sun-line"></i>
								<h4 className="d-none d-lg-block">Pariatur explica nitro dela</h4>
							</a>
						</li>
						<li className="nav-item col-3" data-aos="zoom-in" data-aos-delay="300">
							<a className="nav-link" data-bs-toggle="tab" href="#tab-4">
								<i className="ri-store-line"></i>
								<h4 className="d-none d-lg-block">Nostrum qui dile node</h4>
							</a>
						</li>
					</ul>

					<div className="tab-content" data-aos="fade-up">
						<div className="tab-pane active show" id="tab-1">
							<div className="row">
								<div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
									<h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
									<p className="fst-italic">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
										magna aliqua.
									</p>
									<ul>
										<li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
										<li><i className="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
										<li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
									</ul>
									<p>
										Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
										velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
										culpa qui officia deserunt mollit anim id est laborum
									</p>
								</div>
								<div className="col-lg-6 order-1 order-lg-2 text-center">
									<img src={features1} alt="" className="img-fluid" />
								</div>
							</div>
						</div>
						<div className="tab-pane" id="tab-2">
							<div className="row">
								<div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
									<h3>Neque exercitationem debitis soluta quos debitis quo mollitia officia est</h3>
									<p>
										Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
										velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
										culpa qui officia deserunt mollit anim id est laborum
									</p>
									<p className="fst-italic">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
										magna aliqua.
									</p>
									<ul>
										<li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
										<li><i className="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
										<li><i className="ri-check-double-line"></i> Provident mollitia neque rerum asperiores dolores quos qui a. Ipsum neque dolor voluptate nisi sed.</li>
										<li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
									</ul>
								</div>
								<div className="col-lg-6 order-1 order-lg-2 text-center">
									<img src="assets/img/features-2.png" alt="" className="img-fluid" />
								</div>
							</div>
						</div>
						<div className="tab-pane" id="tab-3">
							<div className="row">
								<div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
									<h3>Voluptatibus commodi ut accusamus ea repudiandae ut autem dolor ut assumenda</h3>
									<p>
										Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
										velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
										culpa qui officia deserunt mollit anim id est laborum
									</p>
									<ul>
										<li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
										<li><i className="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
										<li><i className="ri-check-double-line"></i> Provident mollitia neque rerum asperiores dolores quos qui a. Ipsum neque dolor voluptate nisi sed.</li>
									</ul>
									<p className="fst-italic">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
										magna aliqua.
									</p>
								</div>
								<div className="col-lg-6 order-1 order-lg-2 text-center">
									<img src="assets/img/features-3.png" alt="" className="img-fluid" />
								</div>
							</div>
						</div>
						<div className="tab-pane" id="tab-4">
							<div className="row">
								<div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
									<h3>Omnis fugiat ea explicabo sunt dolorum asperiores sequi inventore rerum</h3>
									<p>
										Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
										velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
										culpa qui officia deserunt mollit anim id est laborum
									</p>
									<p className="fst-italic">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
										magna aliqua.
									</p>
									<ul>
										<li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
										<li><i className="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
										<li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
									</ul>
								</div>
								<div className="col-lg-6 order-1 order-lg-2 text-center">
									<img src="assets/img/features-4.png" alt="" className="img-fluid" />
								</div>
							</div>
						</div>
					</div>

				</div>
			</section>

			<section id="cta" className="cta">
				<div className="container">

					<div className="row" data-aos="zoom-out">
						<div className="col-lg-9 text-center text-lg-start">
							<h3>Call To Action</h3>
							<p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
						</div>
						<div className="col-lg-3 cta-btn-container text-center">
							<a className="cta-btn align-middle" href="#">Call To Action</a>
						</div>
					</div>

				</div>
			</section>

			<section id="services" className="services">
				<div className="container">

					<div className="section-title" data-aos="zoom-out">
						<h2>Services</h2>
						<p>What we do offer</p>
					</div>

					<div className="row">
						<div className="col-lg-4 col-md-6">
							<div className="icon-box" data-aos="zoom-in-left">
								<div className="icon"><i className="bi bi-briefcase" style={{ color: "#ff689b" }}></i></div>
								<h4 className="title"><a href="">Lorem Ipsum</a></h4>
								<p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 mt-5 mt-md-0">
							<div className="icon-box" data-aos="zoom-in-left" data-aos-delay="100">
								<div className="icon"><i className="bi bi-book" style={{ color: "#e9bf06" }}></i></div>
								<h4 className="title"><a href="">Dolor Sitema</a></h4>
								<p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
							</div>
						</div>

						<div className="col-lg-4 col-md-6 mt-5 mt-lg-0 ">
							<div className="icon-box" data-aos="zoom-in-left" data-aos-delay="200">
								<div className="icon"><i className="bi bi-card-checklist" style={{ color: "#3fcdc7" }}></i></div>
								<h4 className="title"><a href="">Sed ut perspiciatis</a></h4>
								<p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 mt-5">
							<div className="icon-box" data-aos="zoom-in-left" data-aos-delay="300">
								<div className="icon"><i className="bi bi-binoculars" style={{ color: "#41cf2e" }}></i></div>
								<h4 className="title"><a href="">Magni Dolores</a></h4>
								<p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
							</div>
						</div>

						<div className="col-lg-4 col-md-6 mt-5">
							<div className="icon-box" data-aos="zoom-in-left" data-aos-delay="400">
								<div className="icon"><i className="bi bi-globe" style={{ color: "#d6ff22" }}></i></div>
								<h4 className="title"><a href="">Nemo Enim</a></h4>
								<p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 mt-5">
							<div className="icon-box" data-aos="zoom-in-left" data-aos-delay="500">
								<div className="icon"><i className="bi bi-clock" style={{ color: "#4680ff" }}></i></div>
								<h4 className="title"><a href="">Eiusmod Tempor</a></h4>
								<p className="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
							</div>
						</div>
					</div>

				</div>
			</section>

			<section id="portfolio" className="portfolio">
				<div className="container">

					<div className="section-title" data-aos="zoom-out">
						<h2>Portfolio</h2>
						<p>What we've done</p>
					</div>

					<ul id="portfolio-flters" className="d-flex justify-content-end" data-aos="fade-up">
						<li data-filter="*" className="filter-active">All</li>
						<li data-filter=".filter-app">App</li>
						<li data-filter=".filter-card">Card</li>
						<li data-filter=".filter-web">Web</li>
					</ul>

					<div className="row portfolio-container" data-aos="fade-up">

						<div className="col-lg-4 col-md-6 portfolio-item filter-app">
							<div className="portfolio-img"><img src="assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt="" /></div>
							<div className="portfolio-info">
								<h4>App 1</h4>
								<p>App</p>
								<a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 1"><i className="bx bx-plus"></i></a>
								<a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
							</div>
						</div>

						<div className="col-lg-4 col-md-6 portfolio-item filter-web">
							<div className="portfolio-img"><img src="assets/img/portfolio/portfolio-2.jpg" className="img-fluid" alt="" /></div>
							<div className="portfolio-info">
								<h4>Web 3</h4>
								<p>Web</p>
								<a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 3"><i className="bx bx-plus"></i></a>
								<a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
							</div>
						</div>

						<div className="col-lg-4 col-md-6 portfolio-item filter-app">
							<div className="portfolio-img"><img src="assets/img/portfolio/portfolio-3.jpg" className="img-fluid" alt="" /></div>
							<div className="portfolio-info">
								<h4>App 2</h4>
								<p>App</p>
								<a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 2"><i className="bx bx-plus"></i></a>
								<a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
							</div>
						</div>

						<div className="col-lg-4 col-md-6 portfolio-item filter-card">
							<div className="portfolio-img"><img src="assets/img/portfolio/portfolio-4.jpg" className="img-fluid" alt="" /></div>
							<div className="portfolio-info">
								<h4>Card 2</h4>
								<p>Card</p>
								<a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 2"><i className="bx bx-plus"></i></a>
								<a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
							</div>
						</div>

						<div className="col-lg-4 col-md-6 portfolio-item filter-web">
							<div className="portfolio-img"><img src="assets/img/portfolio/portfolio-5.jpg" className="img-fluid" alt="" /></div>
							<div className="portfolio-info">
								<h4>Web 2</h4>
								<p>Web</p>
								<a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 2"><i className="bx bx-plus"></i></a>
								<a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
							</div>
						</div>

						<div className="col-lg-4 col-md-6 portfolio-item filter-app">
							<div className="portfolio-img"><img src="assets/img/portfolio/portfolio-6.jpg" className="img-fluid" alt="" /></div>
							<div className="portfolio-info">
								<h4>App 3</h4>
								<p>App</p>
								<a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 3"><i className="bx bx-plus"></i></a>
								<a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
							</div>
						</div>

						<div className="col-lg-4 col-md-6 portfolio-item filter-card">
							<div className="portfolio-img"><img src="assets/img/portfolio/portfolio-7.jpg" className="img-fluid" alt="" /></div>
							<div className="portfolio-info">
								<h4>Card 1</h4>
								<p>Card</p>
								<a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 1"><i className="bx bx-plus"></i></a>
								<a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
							</div>
						</div>

						<div className="col-lg-4 col-md-6 portfolio-item filter-card">
							<div className="portfolio-img"><img src="assets/img/portfolio/portfolio-8.jpg" className="img-fluid" alt="" /></div>
							<div className="portfolio-info">
								<h4>Card 3</h4>
								<p>Card</p>
								<a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 3"><i className="bx bx-plus"></i></a>
								<a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
							</div>
						</div>

						<div className="col-lg-4 col-md-6 portfolio-item filter-web">
							<div className="portfolio-img"><img src="assets/img/portfolio/portfolio-9.jpg" className="img-fluid" alt="" /></div>
							<div className="portfolio-info">
								<h4>Web 3</h4>
								<p>Web</p>
								<a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 3"><i className="bx bx-plus"></i></a>
								<a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
							</div>
						</div>

					</div>

				</div>
			</section>

			<section id="testimonials" className="testimonials">
				<div className="container">

					<div className="section-title" data-aos="zoom-out">
						<h2>Testimonials</h2>
						<p>What they are saying about us</p>
					</div>

					<div className="testimonials-slider swiper-container" data-aos="fade-up" data-aos-delay="100">
						<div className="swiper-wrapper">

							<div className="swiper-slide">
								<div className="testimonial-item">
									<p>
										<i className="bx bxs-quote-alt-left quote-icon-left"></i>
										Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
										<i className="bx bxs-quote-alt-right quote-icon-right"></i>
									</p>
									<img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
									<h3>Saul Goodman</h3>
									<h4>Ceo &amp; Founder</h4>
								</div>
							</div>

							<div className="swiper-slide">
								<div className="testimonial-item">
									<p>
										<i className="bx bxs-quote-alt-left quote-icon-left"></i>
										Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
										<i className="bx bxs-quote-alt-right quote-icon-right"></i>
									</p>
									<img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="" />
									<h3>Sara Wilsson</h3>
									<h4>Designer</h4>
								</div>
							</div>

							<div className="swiper-slide">
								<div className="testimonial-item">
									<p>
										<i className="bx bxs-quote-alt-left quote-icon-left"></i>
										Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
										<i className="bx bxs-quote-alt-right quote-icon-right"></i>
									</p>
									<img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt="" />
									<h3>Jena Karlis</h3>
									<h4>Store Owner</h4>
								</div>
							</div>

							<div className="swiper-slide">
								<div className="testimonial-item">
									<p>
										<i className="bx bxs-quote-alt-left quote-icon-left"></i>
										Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
										<i className="bx bxs-quote-alt-right quote-icon-right"></i>
									</p>
									<img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt="" />
									<h3>Matt Brandon</h3>
									<h4>Freelancer</h4>
								</div>
							</div>

							<div className="swiper-slide">
								<div className="testimonial-item">
									<p>
										<i className="bx bxs-quote-alt-left quote-icon-left"></i>
										Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
										<i className="bx bxs-quote-alt-right quote-icon-right"></i>
									</p>
									<img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt="" />
									<h3>John Larson</h3>
									<h4>Entrepreneur</h4>
								</div>
							</div>

						</div>
						<div className="swiper-pagination"></div>
					</div>

				</div>
			</section>

			<section id="pricing" className="pricing">
				<div className="container">

					<div className="section-title" data-aos="zoom-out">
						<h2>Pricing</h2>
						<p>Our Competing Prices</p>
					</div>

					<div className="row">

						<div className="col-lg-3 col-md-6">
							<div className="box" data-aos="zoom-in">
								<h3>Free</h3>
								<h4><sup>$</sup>0<span> / month</span></h4>
								<ul>
									<li>Aida dere</li>
									<li>Nec feugiat nisl</li>
									<li>Nulla at volutpat dola</li>
									<li className="na">Pharetra massa</li>
									<li className="na">Massa ultricies mi</li>
								</ul>
								<div className="btn-wrap">
									<a href="#" className="btn-buy">Buy Now</a>
								</div>
							</div>
						</div>

						<div className="col-lg-3 col-md-6 mt-4 mt-md-0">
							<div className="box featured" data-aos="zoom-in" data-aos-delay="100">
								<h3>Business</h3>
								<h4><sup>$</sup>19<span> / month</span></h4>
								<ul>
									<li>Aida dere</li>
									<li>Nec feugiat nisl</li>
									<li>Nulla at volutpat dola</li>
									<li>Pharetra massa</li>
									<li className="na">Massa ultricies mi</li>
								</ul>
								<div className="btn-wrap">
									<a href="#" className="btn-buy">Buy Now</a>
								</div>
							</div>
						</div>

						<div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
							<div className="box" data-aos="zoom-in" data-aos-delay="200">
								<h3>Developer</h3>
								<h4><sup>$</sup>29<span> / month</span></h4>
								<ul>
									<li>Aida dere</li>
									<li>Nec feugiat nisl</li>
									<li>Nulla at volutpat dola</li>
									<li>Pharetra massa</li>
									<li>Massa ultricies mi</li>
								</ul>
								<div className="btn-wrap">
									<a href="#" className="btn-buy">Buy Now</a>
								</div>
							</div>
						</div>

						<div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
							<div className="box" data-aos="zoom-in" data-aos-delay="300">
								<span className="advanced">Advanced</span>
								<h3>Ultimate</h3>
								<h4><sup>$</sup>49<span> / month</span></h4>
								<ul>
									<li>Aida dere</li>
									<li>Nec feugiat nisl</li>
									<li>Nulla at volutpat dola</li>
									<li>Pharetra massa</li>
									<li>Massa ultricies mi</li>
								</ul>
								<div className="btn-wrap">
									<a href="#" className="btn-buy">Buy Now</a>
								</div>
							</div>
						</div>

					</div>

				</div>
			</section>

			<section id="faq" className="faq">
				<div className="container">

					<div className="section-title" data-aos="zoom-out">
						<h2>F.A.Q</h2>
						<p>Frequently Asked Questions</p>
					</div>

					<ul className="faq-list">

						<li>
							<div data-bs-toggle="collapse" className="collapsed question" href="#faq1">Non consectetur a erat nam at lectus urna duis? <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
							<div id="faq1" className="collapse" data-bs-parent=".faq-list">
								<p>
									Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
								</p>
							</div>
						</li>

						<li>
							<div data-bs-toggle="collapse" href="#faq2" className="collapsed question">Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque? <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
							<div id="faq2" className="collapse" data-bs-parent=".faq-list">
								<p>
									Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
								</p>
							</div>
						</li>

						<li>
							<div data-bs-toggle="collapse" href="#faq3" className="collapsed question">Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi? <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
							<div id="faq3" className="collapse" data-bs-parent=".faq-list">
								<p>
									Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
								</p>
							</div>
						</li>

						<li>
							<div data-bs-toggle="collapse" href="#faq4" className="collapsed question">Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla? <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
							<div id="faq4" className="collapse" data-bs-parent=".faq-list">
								<p>
									Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
								</p>
							</div>
						</li>

						<li>
							<div data-bs-toggle="collapse" href="#faq5" className="collapsed question">Tempus quam pellentesque nec nam aliquam sem et tortor consequat? <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
							<div id="faq5" className="collapse" data-bs-parent=".faq-list">
								<p>
									Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in
								</p>
							</div>
						</li>

						<li>
							<div data-bs-toggle="collapse" href="#faq6" className="collapsed question">Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor? <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
							<div id="faq6" className="collapse" data-bs-parent=".faq-list">
								<p>
									Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Nibh tellus molestie nunc non blandit massa enim nec.
								</p>
							</div>
						</li>

					</ul>

				</div>
			</section>

			<section id="team" className="team">
				<div className="container">

					<div className="section-title" data-aos="zoom-out">
						<h2>Team</h2>
						<p>Our Hardworking Team</p>
					</div>

					<div className="row">

						<div className="col-lg-3 col-md-6 d-flex align-items-stretch">
							<div className="member" data-aos="fade-up">
								<div className="member-img">
									<img src="assets/img/team/team-1.jpg" className="img-fluid" alt="" />
									<div className="social">
										<a href=""><i className="bi bi-twitter"></i></a>
										<a href=""><i className="bi bi-facebook"></i></a>
										<a href=""><i className="bi bi-instagram"></i></a>
										<a href=""><i className="bi bi-linkedin"></i></a>
									</div>
								</div>
								<div className="member-info">
									<h4>Walter White</h4>
									<span>Chief Executive Officer</span>
								</div>
							</div>
						</div>

						<div className="col-lg-3 col-md-6 d-flex align-items-stretch">
							<div className="member" data-aos="fade-up" data-aos-delay="100">
								<div className="member-img">
									<img src="assets/img/team/team-2.jpg" className="img-fluid" alt="" />
									<div className="social">
										<a href=""><i className="bi bi-twitter"></i></a>
										<a href=""><i className="bi bi-facebook"></i></a>
										<a href="https://www.instagram.com/i.am_abhii/"><i className="bi bi-instagram"></i></a>
										<a href=""><i className="bi bi-linkedin"></i></a>
									</div>
								</div>
								<div className="member-info">
									<h4>Sarah Jhonson</h4>
									<span>Product Manager</span>
								</div>
							</div>
						</div>

						<div className="col-lg-3 col-md-6 d-flex align-items-stretch">
							<div className="member" data-aos="fade-up" data-aos-delay="200">
								<div className="member-img">
									<img src="assets/img/team/team-3.jpg" className="img-fluid" alt="" />
									<div className="social">
										<a href=""><i className="bi bi-twitter"></i></a>
										<a href=""><i className="bi bi-facebook"></i></a>
										<a href=""><i className="bi bi-instagram"></i></a>
										<a href=""><i className="bi bi-linkedin"></i></a>
									</div>
								</div>
								<div className="member-info">
									<h4>William Anderson</h4>
									<span>CTO</span>
								</div>
							</div>
						</div>

						<div className="col-lg-3 col-md-6 d-flex align-items-stretch">
							<div className="member" data-aos="fade-up" data-aos-delay="300">
								<div className="member-img">
									<img src="assets/img/team/team-4.jpg" className="img-fluid" alt="" />
									<div className="social">
										<a href=""><i className="bi bi-twitter"></i></a>
										<a href=""><i className="bi bi-facebook"></i></a>
										<a href=""><i className="bi bi-instagram"></i></a>
										<a href=""><i className="bi bi-linkedin"></i></a>
									</div>
								</div>
								<div className="member-info">
									<h4>Amanda Jepson</h4>
									<span>Accountant</span>
								</div>
							</div>
						</div>

					</div>

				</div>
			</section>

			<section id="contact" className="contact">
				<div className="container">

					<div className="section-title" data-aos="zoom-out">
						<h2>Contact</h2>
						<p>Contact Us</p>
					</div>

					<div className="row mt-5">

						<div className="col-lg-4" data-aos="fade-right">
							<div className="info">
								<div className="address">
									<i className="bi bi-geo-alt"></i>
									<h4>Location:</h4>
									<p>A108 Adam Street, New York, NY 535022</p>
								</div>

								<div className="email">
									<i className="bi bi-envelope"></i>
									<h4>Email:</h4>
									<p>info@example.com</p>
								</div>

								<div className="phone">
									<i className="bi bi-phone"></i>
									<h4>Call:</h4>
									<p>+1 5589 55488 55s</p>
								</div>

							</div>

						</div>

						<div className="col-lg-8 mt-5 mt-lg-0" data-aos="fade-left">

							<form action="forms/contact.php" method="post" role="form" className="php-email-form">
								<div className="row">
									<div className="col-md-6 form-group">
										<input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
									</div>
									<div className="col-md-6 form-group mt-3 mt-md-0">
										<input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
									</div>
								</div>
								<div className="form-group mt-3">
									<input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
								</div>
								<div className="form-group mt-3">
									<textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
								</div>
								<div className="my-3">
									<div className="loading">Loading</div>
									<div className="error-message"></div>
									<div className="sent-message">Your message has been sent. Thank you!</div>
								</div>
								<div className="text-center"><button type="submit">Send Message</button></div>
							</form>

						</div>

					</div>

				</div>
			</section>
		</main>


		<footer id="footer">
			<div className="container">
				<h3>Selecao</h3>
				<p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p>
				<div className="social-links">
					<a href="#" className="linkedin"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
					<a href="https://www.instagram.com/i.am_abhiii/" className="instagram"><i className="fa fa-instagram" aria-hidden="true"></i></a>
					<a href="#" className="twitter"><i className="fa fa-twitter" aria-hidden="true"></i></a>
					<a href="#" className="facebook"><i className="fa fa-facebook" aria-hidden="true"></i></a>
					<a href="#" className="google-plus"><i className="fa fa-skype" aria-hidden="true"></i></a>
				</div>
				<div className="copyright">
					&copy; Copyright <strong><span>Selecao</span></strong>. All Rights Reserved
				</div>
				<div className="credits">
					Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
				</div>
			</div>
		</footer>
		<a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

		<script src="assets/vendor/aos/aos.js"></script>
		<script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
		<script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
		<script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
		<script src="assets/vendor/php-email-form/validate.js"></script>
		<script src="assets/vendor/swiper/swiper-bundle.min.js"></script>

		<script src="assets/js/main.js"></script>
	</>);
}

export default Basic;