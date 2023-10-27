function updateQueryString(key, value, url) {
    if (!url) url = window.location.href;
    var re = new RegExp("([?&])" + key + "=.*?(&|#|$)(.*)", "gi"),
        hash;

    if (re.test(url)) {
        if (typeof value !== 'undefined' && value !== null) {
            return url.replace(re, '$1' + key + "=" + value + '$2$3');
        } else {
            hash = url.split('#');
            url = hash[0].replace(re, '$1$3').replace(/(&|\?)$/, '');
            if (typeof hash[1] !== 'undefined' && hash[1] !== null) {
                url += '#' + hash[1];
            }
            return url;
        }
    } else {
        if (typeof value !== 'undefined' && value !== null) {
            var separator = url.indexOf('?') !== -1 ? '&' : '?';
            hash = url.split('#');
            url = hash[0] + separator + key + '=' + value;
            if (typeof hash[1] !== 'undefined' && hash[1] !== null) {
                url += '#' + hash[1];
            }
            return url;
        } else {
            return url;
        }
    }
}

function parseDate(date) {
	return date.split('-')[1] + '-' + date.split('-')[2] + '-' + date.split('-')[0];
}

let previousPostsSnapshot = "";
const SPACE = '34uihq81dwtm';
const TOKEN = 'bYCiQb6srVEhqYwtTF3Xzi7spI2F8-7jJc_LTbn4Jus';
let LIMIT = 6;
let COUNT_LIMIT = 3;
let ORDERBY = 'fields.title';

const client = contentful.createClient({
	space: SPACE,
	accessToken: TOKEN
});

async function getPosts(limit) {
	try {
		const response = await client.getEntries({
	    	content_type: 'pageBlogPost',
	    	order: ORDERBY,
	    	limit: LIMIT
	    });

	    return response.items;
	} catch (error) {
		console.log('Error fetchind entries:', error);
		return null;
	}
}

async function countPosts() {
	try {
		const response = await client.getEntries({
	    	content_type: 'pageBlogPost',
	    	order: ORDERBY,
	    	limit: 100
	    });

	    return response.items;
	} catch (error) {
		console.log('Error fetchind entries:', error);
		return null;
	}
}

async function getPostsSearch(word) {
	try {
		const response = await client.getEntries({
			content_type: 'pageBlogPost',
	    	'fields.title[match]': word,
	    	limit: LIMIT
	    });

	    return response.items;
	} catch (error) {
		console.log('Error fetchind entries:', error);
		return null;
	}
}

async function getPostsByCategoryId(limit, categoryId, order) {
	if (order != undefined && order == 'date' && order != null) {
		ORDERBY = 'fields.publishedDate';
	} else {
		ORDERBY = 'fields.title';
	}

	try {
		const response = await client.getEntries({
	    	content_type: 'pageBlogPost',
	    	'fields.category.sys.id': categoryId,
	    	order: ORDERBY,
	    	limit: LIMIT,
	    });

	    return response.items;
	} catch (error) {
		console.log('Error fetchind entries:', error);
		return null;
	}
}

async function getPostById(slug) {
	try {
		const response = await client.getEntries({
			content_type: 'pageBlogPost',
			'fields.slug': slug
		});

		return response.items[0];
	} catch (error) {
		console.log('Error fetchind entries:', error);
		return null;
	}
}

async function getCategories() {
	try {
		const response = await client.getEntries({
			content_type: 'category'
		});
		
		return response;
	} catch (error) {
		console.log('Error fetchind entries:', error);
		return null;
	}
}

async function getCategoryById(id) {
	try {
		const response = await client.getEntry(id);
		return response;
	} catch (error) {
		console.log('Error fetchind entries:', error);
		return null;
	}
}

async function parsePostsAll(posts, selector) {
	const container = document.querySelector(selector);
	const total = document.querySelector('.blog-filter .total');
	const totalFilter = document.querySelector('.blog-filter .total-filter');
	let html = '';

	posts.forEach(post => {
		html += `
			<div class="post">
				<a href="post?slug=${ post.fields.slug }" class="image">
					<img src="${ post.fields.featuredImage.fields.file.url }" alt="${ post.fields.featuredImage.fields.title }">
				</a>

				<h2><a href="post?slug=${ post.fields.slug }">${ post.fields.title }</a></h2>

				<div class="metadata">
					<span class="${ post.fields.category.fields.title }">${ post.fields.category.fields.title }</span>
					<span class="${ post.fields.readingTime }">${ post.fields.readingTime }</span>
					<span class="${ post.fields.publishedDate }">${ parseDate(post.fields.publishedDate) }</span>
				</div>

				<a href="post?slug=${ post.fields.slug }" class="more">
					<span>Read more</span>
					<svg width="15" height="14">
						<use xlink:href="#arr-right"></use>
					</svg>
				</a>
			</div>
		`;
	});

	const count = await countPosts();

	container.innerHTML = html;
	if (total != null) total.textContent = count.length;
	if (totalFilter != null) totalFilter.textContent = posts.length;
}

function parsePost(post, selector) {
	const aside = document.querySelector(selector + ' .aside');
	const content = document.querySelector(selector + ' .content');
	const breadcrumbs = document.querySelector('.breadcrumbs .center');
	let innerContent = '';

	const meta = document.createElement('meta');
	meta.setAttribute('name', 'description');
	meta.setAttribute('content', post.fields.shortDescription);
	document.head.appendChild(meta);

	const title = document.createElement('title');
	title.textContent = post.fields.title;
	document.head.appendChild(title);

	const span = document.createElement('span');
	span.textContent = post.fields.title;
	breadcrumbs.appendChild(span);

	post.fields.content.content.forEach(content => {
		if (content.nodeType == 'paragraph') innerContent += `<p class="text">`;
		if (content.nodeType == 'heading-1') innerContent += `<h1>`;
		if (content.nodeType == 'heading-2') innerContent += `<h2>`;
		if (content.nodeType == 'heading-3') innerContent += `<h3>`;
		if (content.nodeType == 'heading-4') innerContent += `<h4>`;
		if (content.nodeType == 'heading-5') innerContent += `<h5>`;
		if (content.nodeType == 'heading-6') innerContent += `<h6>`;
		if (content.nodeType == 'blockquote') innerContent += '<blockquote>';

		if (content.nodeType == 'paragraph' 
			|| content.nodeType == 'heading-1' 
			|| content.nodeType == 'heading-2' 
			|| content.nodeType == 'heading-3' 
			|| content.nodeType == 'heading-4' 
			|| content.nodeType == 'heading-5' 
			|| content.nodeType == 'heading-6' 
			|| content.nodeType == 'blockquote') {

			content.content.forEach(content => {
				let style = '';

				if (content.marks) {
					content.marks.forEach(mark => {
						style += mark.type + ' ';
					});
				}

				if (content.nodeType == 'hyperlink') {
					innerContent += `<a href="${ content.data.uri }">`; 

					content.content.forEach(content => {
						let style = '';

						if (content.marks) {
							content.marks.forEach(mark => {
								style += mark.type + ' ';
							});
						}

						innerContent += `<span class="${ style }">${ content.value }</span>`;
					});

					innerContent += `</a>`;
				} else if (content.nodeType = 'paragraph') {
					if (content.value != undefined) {
						innerContent += `<span class="${ style }">${ content.value }</span>`;
					} else {
						content.content.forEach(content => {
							let style = '';

							if (content.marks) {
								content.marks.forEach(mark => {
									style += mark.type + ' ';
								});
							}

							innerContent += `<span class="${ style }">${ content.value }</span>`;
						});
					}
				} else {
					innerContent += `<span class="${ style }">${ content.value }</span>`;
				}
			});
		}

		if (content.nodeType == 'paragraph') innerContent += `</p>`;
		if (content.nodeType == 'heading-1') innerContent += `</h1>`;
		if (content.nodeType == 'heading-2') innerContent += `</h2>`;
		if (content.nodeType == 'heading-3') innerContent += `</h3>`;
		if (content.nodeType == 'heading-4') innerContent += `</h4>`;
		if (content.nodeType == 'heading-5') innerContent += `</h5>`;
		if (content.nodeType == 'heading-6') innerContent += `</h6>`;
		if (content.nodeType == 'blockquote') innerContent += '</blockquote>';

		if (content.nodeType == 'embedded-entry-block') {
			if (content.data.target.sys.contentType.sys.id == 'promo') {
				innerContent += `<div class="promo">
					<h3>${ content.data.target.fields.title }</h3>
					<p>${ content.data.target.fields.text.content[0].content[0].value }</p>
					<a href="${ content.data.target.fields.button }" class="btn">Get started now</a>
				</div>`;
			} else if (content.data.target.sys.contentType.sys.id == 'componentRichImage') {
				innerContent += `<div class="image-inner">
					<img src="${ content.data.target.fields.image.fields.file.url }" alt="${ content.data.target.fields.image.fields.file.url }">
					<div class="caption">${ content.data.target.fields.image.fields.title }</div>
				</div>`;
			}
		}

		if (content.nodeType == 'unordered-list' || content.nodeType == 'ordered-list') {
			if (content.nodeType == 'unordered-list') innerContent += '<ul>';
			if (content.nodeType == 'ordered-list') innerContent += '<ol>';

			content.content.forEach(content => {
				innerContent += '<li>';
				
				content.content.forEach(content => {
					content.content.forEach(content => {
						let style = '';

						if (content.marks) {
							content.marks.forEach(mark => {
								style += mark.type + ' ';
							});
						}

						if (content.nodeType == 'hyperlink') {
							innerContent += `<a href="${ content.data.uri }">`; 

							content.content.forEach(content => {
								let style = '';

								if (content.marks) {
									content.marks.forEach(mark => {
										style += mark.type + ' ';
									});
								}

								innerContent += `<span class="${ style }">${ content.value }</span>`;
							});

							innerContent += `</a>`;
						} else {
							innerContent += `<span class="${ style }">${ content.value }</span>`;
						}
					});
				});

				innerContent += '</li>';
			});

			if (content.nodeType == 'unordered-list') innerContent += '</ul>';
			if (content.nodeType == 'ordered-list') innerContent += '</ol>';
		}

		if (content.nodeType == 'hr') {
			innerContent += '<hr>';
		}
	});

	let h2About = '';
	let pAbout = '';

	if (post.fields.author.fields.about != undefined) {
		h2About = post.fields.author.fields.about.content[0].content[0].value;

		if (post.fields.author.fields.about.content[1] != undefined) {
			pAbout = post.fields.author.fields.about.content[1].content[0].value;
		}
	}

	content.innerHTML = ` 
		<h1 class="title">${ post.fields.title }</h1>
		<div class="image">
			<img src="${ post.fields.featuredImage.fields.file.url }" alt="${ post.fields.featuredImage.fields.title }">
		</div>

		${ innerContent }

		<div class="post-author">
			<div class="info">
				<img src="${ post.fields.author.fields.avatar.fields.file.url }">
				<div>
					<h3>${ post.fields.author.fields.avatar.fields.title }</h3>
					<p>${ post.fields.author.fields.position }</p>
				</div>
			</div>
			<div class="about">
				<h2>${ h2About }</h2>
				<p>${ pAbout }</p>
			</div>
		</div>
	`;

	const anchors = document.querySelectorAll('.content [id]');
	
	if (anchors.length) {
		let anchorString = '';

		anchors.forEach((anchor, index) => {
			const html = ` 
				<li>
					<a href="#${ anchor.id }">
						${ anchor.textContent }
					</a>
				</li>
			`;

			anchorString += html;
		});

		let anchorContainer = `
			<div class="aside-box aside-anchor">
				<h5>Table of Contents:</h5>
				<ul>${ anchorString }</ul>
			</div> 
		`;

		aside.insertAdjacentHTML('afterbegin', anchorContainer);
		document.querySelector('.post-content .center').insertAdjacentHTML('afterbegin', anchorContainer);

		anhor(anchors);
		showSticky();
	}
}

function parsePostsSliderAll(posts, selector) {
	const container = document.querySelector(selector);
	let html = '';

	posts.forEach((post, index) => {
		if (index < 4) {
			html += `
				<li class="splide__slide">
					<div class="inner">
						<div class="content">
							<h2><a href="post?slug=${ post.fields.slug }">${ post.fields.title }</a></h2>

							<div class="foot">
								<div class="date-wrap">
									news
									<span></span>
									<div class="date">${ parseDate(post.fields.publishedDate) }</div>
								</div>

								<a href="post?slug=${ post.fields.slug }" class="read-more">
									<span>Read more</span>
									<svg width="15" height="14">
										<use xlink:href="#arr-right"></use>
									</svg>
								</a>
							</div>
						</div>

						<div class="image">
							<img src="${ post.fields.featuredImage.fields.file.url }" alt="${ post.fields.featuredImage.fields.title }">
						</div>
					</div>
				</li>
			`;
		}
	});

	container.innerHTML = html;

	if (document.querySelector('.blog-slider .splide') != null) {
		new Splide('.blog-slider .splide', {
			type: 'loop',
			rewind: true,
			perPage: 1,
			arrows: false
		}).mount();
	}
}

function parseCategories(categories, selector) {
	const container = document.querySelector(selector);
	const select = document.querySelector('.select-categories select');
	let html = '';

	categories.items.forEach(category => {
		html += `
			<li class="splide__slide"><a class="link" href="category?id=${ category.sys.id }">${ category.fields.title }</a></li> 
		`;
	});

	container.innerHTML = html;

	categories.items.forEach(category => {
		const option = document.createElement('option');
		option.textContent = category.fields.title;
		option.setAttribute('value', category.sys.id);
		option.dataset.name = category.fields.title;
		select.appendChild(option);
	});

	if (document.querySelector('.categories .splide') != null) {
		new Splide('.categories .splide', {
			type: 'loop',
		    drag: 'free',
		    arrows: true,
		    perPage: 5,
		    perMove: 1,
		    gap: 20,
		    autoWidth: true
		}).mount();
	}
}

function parseCategory(category, selector) {
	const container = document.querySelector(selector);
	const mainTitle = container.querySelector('.blog-title h1');
	
	const title = document.createElement('title');
	title.textContent = category.fields.title;
	document.head.appendChild(title);

	mainTitle.textContent = category.fields.title;
}

async function loadMore() {
	const loadMore = document.querySelector('.load-more');
	const count = await countPosts();

	loadMore.addEventListener('click', async (e) => {
		e.preventDefault();

		LIMIT += COUNT_LIMIT;

		loadMore.textContent = 'Load more...';
		const posts = await getPosts(LIMIT);
		parsePostsAll(posts, '.blog-post');
		loadMore.textContent = 'Load more';

		if (posts.length >= count.length) {
			loadMore.remove();
		}
	});
}

function filter() {
	const container = document.querySelector('.blog-filter');
	const selectList = container.querySelectorAll('select');
	let obj = {};

	selectList.forEach(select => {
		select.addEventListener('change', async (e) => {
			const option = e.target.options[e.target.selectedIndex];

			if (e.target.getAttribute('name') == 'category') {
				obj.category = {
					'id': e.target.value,
					'name': option.dataset.name,
				};
			}

			if (e.target.getAttribute('name') == 'sort') {
				obj.sort = {
					'id': e.target.value,
					'name': option.dataset.name,
				};
			}

			addFilterBy(obj);
		});
	});

	function addFilterBy(obj) {
		const filtering = document.querySelector('.blog-filter .filtering');
		const reset = document.querySelector('.blog-filter .reset');
		filtering.classList.remove('d-none');
		reset.classList.remove('d-none');

		if (filtering.querySelectorAll('a').length) {
			filtering.querySelectorAll('a').forEach(link => link.remove());
		}

		for (key in obj) {
			const html = `
				<a href="#" data-name="${ key }" data-id="${ obj[key].id }">
					<span class="text">${ obj[key].name }</span>
					<span class="close"></span>
				</a>
			`;

			filtering.insertAdjacentHTML('beforeend', html);
		}

		onResetBy();
		onRest();
		init();
	}

	function onResetBy() {
		const closeList = document.querySelectorAll('.blog-filter .filtering a .close');

		closeList.forEach(close => {
			close.addEventListener('click', e => {
				e.preventDefault();
				const name = e.target.parentNode.dataset.name;

				delete obj[name];
				e.target.parentNode.remove();
				init();
			});
		});
	}

	function onRest() {
		const btn = document.querySelector('.blog-filter .reset');
		const filtering = document.querySelector('.blog-filter .filtering');
		const closeList = document.querySelectorAll('.blog-filter .filtering a');

		btn.addEventListener('click', e => {
			e.preventDefault();

			obj = {};
			init();

			closeList.forEach(close => {
				close.remove();
			});

			btn.classList.add('d-none');
			filtering.classList.add('d-none');
		});
	}

	async function init() {
		let categoryId = null;
		let order = null;

		if (obj.category != undefined) {
			categoryId = obj.category.id;
		}

		if (obj.sort != undefined) {
			order = obj.sort.id;
		}

		const posts = await getPostsByCategoryId(LIMIT, categoryId, order);
		parsePostsAll(posts, '.blog-post');
	}
}

function search() {
	const search = document.querySelector('.blog-filter .search input');

	search.addEventListener('input', async (e) => {
		const posts = await getPostsSearch(e.target.value);
		parsePostsAll(posts, '.blog-post');

		if (document.querySelector('.load-more') != null) {
			if (posts.length < LIMIT) {
				document.querySelector('.load-more').classList.add('d-none');
			} else {
				document.querySelector('.load-more').classList.remove('d-none');
			}
		}

		return false;
	});

	search.addEventListener('keydown', e => {
		if (e.key === 'Enter' || e.keyCode === 13) {
	        e.preventDefault();
	    }
	});
}

async function render() {
	if (document.querySelector('.page-blog') != null) {
		const posts = await getPosts(LIMIT);
		const categories = await getCategories();
		
		parsePostsAll(posts, '.blog-post');
		parsePostsSliderAll(posts, '.blog-slider .splide__list');
		parseCategories(categories, '.blog-filter .splide__list');

		loadMore();
		filter();
		search();
	}

	if (document.querySelector('.page-post') != null) {
		const urlParams = new URLSearchParams(window.location.search);
		const slug = urlParams.get('slug');
		// const slug = window.location.pathname.slice(1);
		const post = await getPostById(slug);
		parsePost(post, '.post-main');
	}

	if (document.querySelector('.page-category') != null) {
		const urlParams = new URLSearchParams(window.location.search);
		const categoryId = urlParams.get('id');
		
		const posts = await getPostsByCategoryId(100, categoryId);
		const category = await getCategoryById(categoryId);

		parsePostsAll(posts, '.blog-post');
		parseCategory(category, '.page-category');
	}
}

render();