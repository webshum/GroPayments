const hash = document.querySelectorAll('.hash-link');

hash.forEach(hash => {
	hash.addEventListener('click', e => {
		window.location.href = e.target.href;
	});
});

const buttons = document.querySelectorAll('.btn');
const currentPageIdentifier = window.location.href;

const pageCookieName = 'buttonVisited-' + currentPageIdentifier;
if (document.cookie.indexOf(pageCookieName + '=1') !== -1) {
	buttons.forEach((button) => {
	    button.classList.add('visited');
	});
}

buttons.forEach((button, index) => {
	button.addEventListener('click', function () {
	    document.cookie = pageCookieName + '=1; expires=' + new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toUTCString();
	    button.classList.add('visited');
	});
});

function header() {
	const header = document.getElementById('header');
	const nav = document.querySelector('.wrap-nav');
	const btnNav = document.querySelector('.btn-nav');
	const linkAll = nav.querySelectorAll('a');

	document.addEventListener('scroll', (e) => {
		if (window.scrollY > 0) {
			header.classList.add('active');
		} else {
			header.classList.remove('active');
		}
	});

	document.querySelector('#nav').addEventListener('scroll', (e) => {
		console.log(document.querySelector('#nav').scrollTop);
		if (document.querySelector('#nav').scrollTop > 0) {
			header.classList.add('active');
		} else {
			header.classList.remove('active');
		}
	});

	btnNav.addEventListener('click', e => {
		console.log('click');
		document.documentElement.classList.toggle('open-nav');
	});

	linkAll.forEach(link => {
		link.addEventListener('click', e => {
			const parent = e.target.parentNode;

			if (parent.querySelector('.drop') != null) {
				e.preventDefault();
				parent.classList.toggle('open-drop');
			}
		});
	});
}

header();

if (document.querySelector('.company .splide') != null) {
	new Splide('.company .splide', {
		type: 'loop',
	    drag: 'free',
	    focus: 'center',
	    arrows: false,
	    perPage: 3,
	    gap: 30,
	    mediaQuery: 'min',
	    autoScroll: {
	        speed: 0.5,
	    },
	    breakpoints: {
			900: {
		        destroy: true,
		    }
		}
	}).mount(window.splide.Extensions);
}

if (document.querySelector('.reviews-slider') != null) {
	new Splide('.reviews-slider', {
		type: 'loop',
	    drag: 'free',
	    focus: 'center',
	    arrows: false,
	    perPage: 4,
	    gap: 24,
	    autoScroll: {
	        speed: 0.5,
	    },
	    breakpoints: {
			1200: {
		        perPage: 3,
		    },
		    900: {
		        perPage: 2,
		    },
		    900: {
		        perPage: 1,
		        gap: 10,
		    }
		}
	}).mount(window.splide.Extensions);
}

if (document.querySelector('.page-store .splide') != null) {
	new Splide('.page-store .splide', {
		type: 'loop',
	    drag: 'free',
	    focus: 'center',
	    arrows: false,
	    perPage: 3,
	    gap: 20,
	    autoplay: true,
	    breakpoints: {
	    	700: {
	    		perPage: 2,
	    		gap: 7,
	    	}
	    }
	}).mount();
}

if (document.querySelector('.crm .splide-1') != null) {
	new Splide('.crm .splide', {
		type: 'loop',
	    drag: 'free',
	    focus: 'center',
	    arrows: false,
	    perPage: 6,
	    gap: 20,
	    autoScroll: {
	        speed: 1,
	    },
	    breakpoints: {
	    	700: {
	    		gap: 13,
	    		perPage: 7,
	    	}
	    }
	}).mount(window.splide.Extensions);
}

if (document.querySelector('.crm .splide-2') != null) {
	new Splide('.crm .splide-2', {
		type: 'loop',
	    drag: 'free',
	    focus: 'center',
	    arrows: false,
	    perPage: 6,
	    gap: 20,
	    autoScroll: {
	        speed: 0.5,
	    },
	    breakpoints: {
	    	700: {
	    		gap: 13,
	    		perPage: 7,
	    	}
	    }
	}).mount(window.splide.Extensions);
}

if (document.querySelector('.crm .splide-3') != null) {
	new Splide('.crm .splide-3', {
		type: 'loop',
	    drag: 'free',
	    focus: 'center',
	    arrows: false,
	    perPage: 3,
	    gap: 20,
	    autoScroll: {
	        speed: 0.3,
	    },
	    breakpoints: {
	    	700: {
	    		gap: 13,
	    		perPage: 4,
	    	}
	    }
	}).mount(window.splide.Extensions);
}

if (document.querySelector('.processing-card .splide') != null) {
	new Splide('.processing-card .splide', {
		type: 'loop',
		perPage: 1,
		mediaQuery: 'min',
		arrows: false,
		autoplay: true,
		breakpoints: {
			700: {
		        destroy: true,
		    }
		}
	}).mount();
}

if (document.querySelector('.performance .splide') != null) {
	new Splide('.performance .splide', {
		type: 'loop',
		perPage: 1,
		mediaQuery: 'min',
		arrows: false,
		autoplay: true,
		breakpoints: {
			700: {
		        destroy: true,
		    }
		}
	}).mount();
}

if (document.querySelector('.online-payment .splide') != null) {
	new Splide('.online-payment .splide', {
		type: 'loop',
		perPage: 1,
		mediaQuery: 'min',
		arrows: false,
		autoplay: true,
		breakpoints: {
			700: {
		        destroy: true,
		    }
		}
	}).mount();
}

setTimeout(() => {
	if (document.querySelector('.page-tab .splide') != null) {
		new Splide('.page-tab .splide', {
			type: 'loop',
			perPage: 5,
			perMove: 1,
			mediaQuery: 'min',
			arrows: true,
			autoWidth: true,
			gap: 25,
			breakpoints: {
				991: {
			        destroy: true,
			    }
			}
		}).mount();

		const linksButton = document.querySelectorAll('.page-tab .splide a');
		const linkButtonActive = document.querySelector('.page-tab .splide a.active');
		const hero = document.querySelector('.page-tab .hero');
		const center = document.querySelector('.page-tab .center');

		hero.style.width = `${linkButtonActive.getBoundingClientRect().width}px`;

		linksButton.forEach(link => {
			link.addEventListener('click', e => {
				e.preventDefault();
				const id = e.target.getAttribute('href').slice(1);
				const coords = e.target.getBoundingClientRect();
				const coordsCenter = center.getBoundingClientRect();

				linksButton.forEach(link => link.classList.remove('active'));

				e.target.classList.add('active');

				document.querySelectorAll('.page-content .center').forEach(tab => tab.classList.remove('visible'));
				document.getElementById(id).classList.add('visible');

				hero.style.left = `${coords.left - coordsCenter.left}px`;
				hero.style.width = `${coords.width}px`;

				const element = document.getElementById(id); 

				let pos = (element.getBoundingClientRect().top + window.pageYOffset);

				const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
				if (isSafari) {
				    window.scrollTo({ top: pos - 230 });
				} else {
				    window.scrollTo({ top: pos - 230, behavior: 'smooth' });
				}
			});
		});

		window.onresize = () => {
			const linkButtonActive = document.querySelector('.page-tab .splide a.active');
			const coords = linkButtonActive.getBoundingClientRect();
			const coordsCenter = center.getBoundingClientRect();

			hero.style.left = `${coords.left - coordsCenter.left}px`;
			hero.style.width = `${coords.width}px`;
		}

		if (window.location.hash) {
			linkButtonActive.classList.remove('active');

			const hash = window.location.hash;
			const active = document.querySelector(`.page-tab .splide [href="${ hash }"]`);
			const id = window.location.hash.slice(1);
			const coords = active.getBoundingClientRect();
			const coordsCenter = center.getBoundingClientRect();

			active.classList.add('active');
			document.querySelectorAll('.page-content .center').forEach(tab => tab.classList.remove('visible'));
			document.getElementById(id).classList.add('visible');

			hero.style.left = `${coords.left - coordsCenter.left}px`;
			hero.style.width = `${coords.width}px`;
		}
	}
}, 500);

/* SUBSCRIBE	
---------------------------------------------------- */ 
function subscribe() {
	const subscribeList = document.querySelectorAll('.js-subscribe');

	subscribeList.forEach(subscribe => {
		const email = subscribe.querySelector('input[type="email"]');
		const submit = subscribe.querySelector('button[type="submit"]');

		subscribe.addEventListener('submit', e => {
			e.preventDefault();

			const url = e.target.getAttribute('action');
			const data = `email=${ email.value }`;

			var xhr = new XMLHttpRequest();
			xhr.open('POST', url, true);
			xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			xhr.onreadystatechange = function () {
			    if (xhr.readyState == 4 && xhr.status == 200) {
			    	const data = JSON.parse(xhr.response);

			    	if (data.text == 'success') {
			    		const h3 = document.createElement('h3');
			    		subscribe.classList.add('send');
			    		// console.log(data);
			    	} else {
			    		email.value = 'ERROR!';
			    		email.style.color = 'red';
			    		console.log(data);
			    	}
			    }
			};

			xhr.send(data);
		});
	});
}

if (document.querySelectorAll('.js-subscribe').length) {
	subscribe();
}

/* ANHOR
---------------------------------------------------- */ 
function anhor(anchorsOut) {
    const anchors = document.querySelectorAll('a[href*="#"]');

    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const blockID = anchor.getAttribute('href').substr(1);
            const element = document.getElementById(blockID); 
            const header = document.getElementById('header');

            if (element != null) {
                let pos = (element.getBoundingClientRect().top + window.pageYOffset);
                pos = pos - header.offsetHeight - 40;

                if (window.innerWidth <= 700 && e.target.closest('.sticky') != null) {
                	pos -= 120;
                }

                if (window.innerWidth <= 700 && e.target.closest('.aside-anchor') != null) {
                	pos -= 150;
                }

                window.scrollTo({top: pos, behavior: 'smooth'});
            }           
        });
    }
    
	let lastScrollTop = 0; 

	if (anchorsOut != undefined) {
	    window.addEventListener('scroll', e => {
	    	let activeAnchor = null;
	    	let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

	    	anchorsOut.forEach(anchor => {
	    		const anchorTop = anchor.getBoundingClientRect().top;

	    		if (anchorTop <= window.innerHeight * 0.50 && anchorTop >= 0) {
	    			activeAnchor = anchor;
	    		}
	    	});

	    	if (activeAnchor != null) {
		    	activeAnchor.closest('.post-content').querySelectorAll('.aside-anchor a').forEach(link => {
			        if (link.getAttribute('href').slice(1) === activeAnchor.id) {
			            if (currentScrollTop > lastScrollTop) {
		                    link.classList.add('active-anchor');
		                } else {
		                    link.classList.remove('active-anchor');
		                }
			        }
			    });
		    }

		    lastScrollTop = currentScrollTop;
	    });
	} else if (document.querySelector('.sticky-box') != null) {
		let anchorFollow = document.querySelectorAll('.sticky-track .section');
	    let navLinks = document.querySelectorAll('.sticky a');

	    window.addEventListener('scroll', e => {
	    	let activeAnchor = null;
	    	let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
	    	
	    	anchorFollow.forEach(anchor => {
	    		const anchorTop = anchor.getBoundingClientRect().top;

	    		if (anchorTop <= window.innerHeight * 0.50 && anchorTop >= 0) {
	    			activeAnchor = anchor;
	    		}
	    	});

	    	if (activeAnchor != null) {
	    		navLinks.forEach(link => {
			        if (link.getAttribute('href').slice(1) === activeAnchor.id) {
			            if (currentScrollTop > lastScrollTop) {
		                    link.classList.add('active-anchor');
		                } else {
		                    link.classList.remove('active-anchor');
		                }
			        }
	    		});
	    	}

	    	lastScrollTop = currentScrollTop;
	    });
	}
}

anhor();

/* ANIMATION PAGE
---------------------------------------------------- */
function animScrollPage() {
    const elems = document.querySelectorAll('.animated');
    const options = {rootMargin: '0px'}
   
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
            	entry.target.classList.add('show');

            	entry.target.addEventListener('transitionend', (e) => {
            		entry.target.classList.add('animated-end');
            	});
            }
        });
    }, options);
   
    elems.forEach(elem => {
        observer.observe(elem);
    });
}
   
animScrollPage();

/* ANIMATION SOLUTIONS 
---------------------------------------------------- */
function animSolutions() {
	const contentList = document.querySelectorAll('.processing-content .content');

	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('show');
			}
		});
	}, {rootMargin: '-200px'});

	contentList.forEach(content => {
		observer.observe(content);
	});
}

animSolutions();

/* SHOW STICKY
----------------------------------- */
function showSticky() {
	const wrap = document.querySelector('.center > .aside-anchor');
	const button = wrap.querySelector('h5');

	button.addEventListener('click', e => {
		wrap.classList.toggle('show');
	});
}

/* GROW LINE
----------------------------------- */
function animationScrollLine() {
	let point = 0;
	let index = 0;

    window.addEventListener('scroll', e => {
    	if (window.innerWidth > 700) {
    		const header = document.getElementById('header');
    		const processing = document.querySelector('.processing');
    		const processingContent = document.querySelector('.processing-content');
    		const content = processingContent.querySelectorAll('.content');
    		const line = document.querySelector('.round-line .line');

    		const headerCoords = header.getBoundingClientRect();
    		const processingCoords = processing.getBoundingClientRect();

    		const startPoint = Math.round((window.scrollY + processingCoords.top) - (headerCoords.height + headerCoords.top));
    		const endPoint = Math.round(((window.scrollY + processingCoords.top + processingCoords.height) - (headerCoords.height + headerCoords.top)) - processingContent.offsetHeight - 20);
    		

    		if (window.scrollY >= startPoint && window.scrollY <= endPoint) {
    			point = endPoint / 3.3;

    			if (window.scrollY >= point && window.scrollY <= (point * 2)) {
    				point = point * 2;
    				index = 0;
    			} else if (window.scrollY >= point && window.scrollY <= (point * 3)) {
    				point = (point * 3);
    				index = 1;
    			} else if (window.scrollY >= point && window.scrollY <= (point * 4)) {
    				index = 2;
    			}

    			content.forEach(content => content.classList.remove('in-slide'));
    			content[index].classList.add('in-slide');

    			const fill = normalize(window.scrollY, startPoint, endPoint);
    			line.style.transform = `translate3d(0px, 0px, 0px) scale(1, ${ fill })`;
    		}

    		if (window.scrollY >= endPoint) {
    			processingContent.classList.add('end-scroll');
    		} else {
    			processingContent.classList.remove('end-scroll');
    		}
    	}
    });
}

if (document.querySelector('.round-line') != null) {
	animationScrollLine();
}

function normalize(x, min, max) {
    return (x - min) / (max - min);
}

/* START ANIMATION ICON
----------------------------------- */
function animationIcon() {
    let icons = document.querySelectorAll('.icon');
    console.log(icons);
    document.addEventListener('scroll', scrolling);
    document.addEventListener('DOMContentLoaded', scrolling);

    function scrolling() {
        icons.forEach(icon => {
            if (isFullyVisible(icon)) {
                if (icon.dataset.start == 'true') {                 
                    const animate = lottie.loadAnimation({
                        container: icon,
                        path: 'lottie/' + icon.dataset.src + '.json',
                        renderer: icon.dataset.render,
                        loop: (icon.dataset.loop) ? true : false,
                        autoplay: true
                    });

                    icon.dataset.start = false;
                }                
            }
        }); 
    }

    function isFullyVisible(el) {
        var elementBoundary = el.getBoundingClientRect();
     
        var top = elementBoundary.top;
        var bottom = elementBoundary.bottom;
        return ((bottom <= window.innerHeight));
    }
}

animationIcon();

/* START ANIMATION HOVER
----------------------------------- */
function startAnimationHover() {
    let hoverAll = document.querySelectorAll('.icon-hover');
    let icons = document.querySelectorAll('.icon-hover .ic i');

    icons.forEach(icon => {
        const animate = lottie.loadAnimation({
            container: icon,
            path: 'lottie/' + icon.dataset.src + '.json',
            renderer: icon.dataset.render,
            loop: false,
            autoplay: true
        });

        if (icon.classList.contains('ic-tenancy')) {
			animate.addEventListener('DOMLoaded', function(){
		        var customStopFrame = 35;
		        animate.playSegments([0, customStopFrame], true);
		    });
		}
    });

	hoverAll.forEach(hover => {
		hover.addEventListener('mouseover', (e) => {
			if (window.innerWidth > 700) {
				start(hover);
			}
        });

        hover.addEventListener('touchstart', (e) => {
        	console.log(hover.closest('.support-grid'));
        	if (hover.closest('.support-grid') != null) {
        		start(hover);
        	}
        });
	});

	function start(hover) {
		let icon = hover.querySelector('.ic i');

        if (icon.dataset.start == 'true') {
            icon.querySelector('svg').remove();

            let animate = lottie.loadAnimation({
                container: icon,
                path: 'lottie/' + icon.dataset.src + '.json',
                renderer: icon.dataset.render,
                loop: false,
                autoplay: true
            });

            icon.dataset.start = false;

            animate.addEventListener('complete', (e) => {
            	icon.dataset.start = true;
            });

            if (icon.classList.contains('ic-tenancy')) {
				animate.addEventListener('DOMLoaded', function(){
			        var customStopFrame = 35;
			        animate.playSegments([0, customStopFrame], true);
			    });
			}
        } 
	}
}

startAnimationHover();

/* TAB
----------------------------------- */
function tab(tabCls, controlCls) {
	if (document.querySelector(tabCls) != null) {
		setInterval(() => {
			let tab = document.querySelector(tabCls);
			let tabActive = document.querySelector(tabCls + ' .icon-hover.active');
			let control = document.querySelector(controlCls);
			let controlActive = control.querySelector('.icon-hover.active');
			let content = tab.querySelectorAll('li');

			tab.querySelectorAll('.icon-hover').forEach(control => control.classList.remove('active'));
			control.querySelectorAll('.icon-hover').forEach(control => control.classList.remove('active'));
			
			if (controlActive.nextElementSibling != null) {
				tabActive.nextElementSibling.classList.add('active');
				controlActive.nextElementSibling.classList.add('active');
			} else {
				tabActive = document.querySelector(tabCls + ' .icon-hover:first-child').classList.add('active');
				controlActive = control.querySelector('.icon-hover:first-child').classList.add('active');
			}
		}, 5000);
	}
}

tab('.tab', '.tab-control');

/* ACCORDEON
------------------------------------ */
function accordeon() {
    let accordeon = document.querySelectorAll('.accordeon');
    let flag = true;

    if (accordeon != null) {
        for (var i = 0; i < accordeon.length; i++) {
            item = accordeon[i].querySelectorAll('.item-accordeon');

            for (var j = 0; j < item.length; j++) {
                let btn = item[j].querySelector('.btn-accordeon');
                
                btn.addEventListener('click', openAccordeon);

                if (item[j].classList.contains('active')) {
                    let content = item[j].querySelector('.content-accordeon');
                    let inner = item[j].querySelector('.inner-accordeon');
                    content.style.height = (inner.clientHeight + 2) + 'px';
                }
            }
        }
    }

    function openAccordeon(e) {
        let item = this.closest('.accordeon').querySelectorAll('.item-accordeon');
        let inner = this.parentNode.querySelector('.inner-accordeon');
        let content = this.parentNode.querySelector('.content-accordeon');  

        if (this.parentNode.classList.contains('active')) {            
            this.parentNode.classList.remove('active');
            content.removeAttribute('style');
        } else {    
            for (var i = 0; i < item.length; i++) {
                item[i].classList.remove('active');
                item[i].querySelector('.content-accordeon').removeAttribute('style');
            }

            this.parentNode.classList.add('active');
            content.style.height = (inner.clientHeight + 2) + 'px';
        }    
    }
}

accordeon();

/* GRID
---------------------------------------------------- */
function gridMain() {
	const gridAll = document.querySelectorAll('.grid-main');

	gridAll.forEach(grid => {
		const cell = grid.querySelectorAll('span');
		const random = Math.floor(Math.random() * cell.length);
		const random2 = Math.floor(Math.random() * cell.length);
		const random3 = Math.floor(Math.random() * cell.length);

		cell.forEach(cell => cell.classList.remove('glow'));

		cell[random].classList.add('glow');
		cell[random2].classList.add('glow');
		cell[random3].classList.add('glow');
	});

	setTimeout(() => {
		gridMain();
	}, 1000);
}

if (document.querySelectorAll('.grid-main') != null) {
	gridMain();
}

/* TYPER NUMBER
---------------------------------------------------- */
function typerNumber() {
	const typerAll = document.querySelectorAll('.typer-number');
	const options = {rootMargin: '0px'}
   
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
            	if (!entry.target.classList.contains('finish')) {
            		const numberList = entry.target.querySelectorAll('span');

            		numberList.forEach(number => {
            			let min = Number(number.dataset.min);
            			let max = Number(number.dataset.max);
            			let time = Number(number.dataset.time);
            			let delay = Number(number.dataset.delay);

            			setTimeout(() => {
            				let interval = setInterval(() => {
            					if (number.dataset.reverse) {
            						max -= 1;
            						number.textContent = max;
	            					if (max <= min) {
	            						entry.target.classList.add('finish');
	            						clearInterval(interval);
	            					} 
            					} else {
            						min += 1;
            						number.textContent = min;
            						if (min >= max) {
            							entry.target.classList.add('finish');
            							clearInterval(interval);
            						} 
            					}
            				}, time);
            			}, delay);
            		});
            	}
            }
        });
    }, options);
   
    typerAll.forEach(elem => {
        observer.observe(elem);
    });
}

if (document.querySelectorAll('.typer-number') != null) {
	typerNumber();
}

/* TYPER
---------------------------------------------------- */
function typer() {
	var Typer = function(element) {
		this.element = element;
		var delim = element.dataset.delim || ",";
		var words = element.dataset.words || "override these,sample typing";
		this.words = words.split(delim).filter((v) => v); // non empty words
		this.delay = element.dataset.delay || 200;
		this.loop = element.dataset.loop || "true";
		if (this.loop === "false" ) { this.loop = 1 }
		this.deleteDelay = element.dataset.deletedelay || element.dataset.deleteDelay || 800;

		this.progress = { word: 0, char: 0, building: true, looped: 0 };
		this.typing = true;

		var colors = element.dataset.colors || "black";
		this.colors = colors.split(",");
		this.element.style.color = this.colors[0];
		this.colorIndex = 0;

		this.doTyping();
	};

	Typer.prototype.doTyping = function() {
		var e = this.element;
		var p = this.progress;
		var w = p.word;
		var c = p.char;
		var currentDisplay = [...this.words[w]].slice(0, c).join("");
		var atWordEnd;
		if (this.cursor) {
		    this.cursor.element.style.opacity = "1";
		    this.cursor.on = true;
		    clearInterval(this.cursor.interval);
		    this.cursor.interval = setInterval(() => this.cursor.updateBlinkState(), 400);
		}

	  	e.innerHTML = currentDisplay;

		if (p.building) {
		    atWordEnd = p.char === this.words[w].length;
		    if (atWordEnd) {
		    	p.building = false;
		    } else {
		    	p.char += 1;
		    }
		} else {
		    if (p.char === 0) {
		    	p.building = true;
		    	p.word = (p.word + 1) % this.words.length;
		    	this.colorIndex = (this.colorIndex + 1) % this.colors.length;
		    	this.element.style.color = this.colors[this.colorIndex];
		    } else {
		    	p.char -= 1;
		    }
		}

		if (p.word === this.words.length - 1) {
		    p.looped += 1;
		}

		if (!p.building && this.loop <= p.looped){
		    this.typing = false;
		}

		setTimeout(() => {
		    if (this.typing) { this.doTyping() };
		}, atWordEnd ? this.deleteDelay : this.delay);
	};

	function TyperSetup() {
		var typers = {};

		for (let e of document.getElementsByClassName("typer")) {
		    typers[e.id] = new Typer(e);
		}
	}

	TyperSetup();
}

if (document.querySelectorAll('.typer') != null) {
	typer();
}

/* ANIMATION GSAP	
---------------------------------------------------- */ 
function animationSticky() {
	gsap.from('.svg-section-1', {
		y: -150,
	    x: -400,
	    duration: 2,
	    scrollTrigger: {
	        trigger: '.svg-section-1',
	        end: "top 200px",
	        scrub: true
	    }
	});

	gsap.from('.svg-section-2', {
		y: -50,
	    x: -100,
	    duration: 2,
	    scrollTrigger: {
	        trigger: '.svg-section-2',
	        end: "top 200px",
	        scrub: true
	    }
	});

	gsap.from('.svg-section-3', {
		y: -100,
	    x: -400,
	    duration: 2,
	    scrollTrigger: {
	        trigger: '.svg-section-3',
	        end: "top 200px",
	        scrub: true
	    }
	});

	gsap.from('.svg-section-4', {
		x: 100,
	    duration: 2,
	    scrollTrigger: {
	        trigger: '.svg-section-4',
	        end: "top 200px",
	        scrub: true
	    }
	});

	gsap.from('.svg-section-5', {
		x: 100,
	    duration: 2,
	    scrollTrigger: {
	        trigger: '.svg-section-5',
	        end: "top 200px",
	        scrub: true
	    }
	});

	gsap.from('.svg-section-6', {
		x: 50,
	    duration: 2,
	    scrollTrigger: {
	        trigger: '.svg-section-6',
	        end: "top 300px",
	        scrub: true
	    }
	});

	if (document.querySelectorAll(".anim-random").length) {
		const random = document.querySelectorAll(".anim-random");

		random.forEach(random => {
			const tags = random.querySelectorAll(".svg-random");

			setInterval(() => {
				const randomNumber = Math.floor(Math.random() * (tags.length));
				tags[randomNumber].classList.add('scale');

				setTimeout(() => {
					tags[randomNumber].classList.remove('scale');
				}, 5500);
			}, 500);
		});
	}
}

if (document.querySelector('.sticky-box') != null) {
	animationSticky();
}

if (document.querySelector('.svg-right-1') != null) {
	gsap.from('.svg-right-1', {
		x: 100,
	    duration: 2
	});

	gsap.from('.svg-right-2', {
		x: 100,
	    duration: 3
	});

	gsap.from('.svg-right-3', {
		x: 100,
	    duration: 4
	});
}




