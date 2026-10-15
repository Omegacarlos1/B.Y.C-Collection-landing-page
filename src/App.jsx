import { useState } from 'react'

const A = '/assets/'

const assets = {
  logo: `${A}byc-logo.png`,
  search: `${A}search.svg`,
  user: `${A}user.svg`,
  heart: `${A}heart.svg`,
  cart: `${A}cart.svg`,
  heroTitle: `${A}hero-title.png`,
  heroWoman: `${A}hero-woman.png`,
  heroManRight: `${A}hero-man-right.png`,
  heroManLeft: `${A}hero-man-left.png`,
  arrivalMen: `${A}arrival-men.png`,
  arrivalWomen: `${A}arrival-women.png`,
  kids: `${A}collection-kids.png`,
  collectionMan: `${A}collection-man.png`,
  productOne: `${A}product-one.png`,
  productTwo: `${A}product-two.png`,
  productThree: `${A}product-three.png`,
  author: `${A}author.png`,
  blogOne: `${A}blog-one.png`,
  blogTwo: `${A}blog-two.png`,
  blogThree: `${A}blog-three.png`,
  view: `${A}view.svg`,
  like: `${A}like.svg`,
  arrow: `${A}arrow.svg`,
  carouselLeft: `${A}carousel-left.svg`,
  carouselRight: `${A}carousel-right.svg`,
  paginationLeft: `${A}pagination-left.svg`,
  paginationRight: `${A}pagination-right.svg`,
  mail: `${A}mail.svg`,
  phone: `${A}phone.svg`,
  paypal: `${A}paypal.svg`,
  visa: `${A}visa.svg`,
  mastercard: `${A}mastercard.svg`,
  socialFacebook: `${A}social-facebook.svg`,
  socialInstagram: `${A}social-instagram.svg`,
  socialTwitter: `${A}social-twitter.svg`,
  socialYoutube: `${A}social-youtube.svg`,
  aboutModel: `${A}about-model.png`,
  recentProduct: `${A}recent-product.png`,
  award: `${A}award.svg`,
  star: `${A}star.svg`,
  starHalf: `${A}star-half.svg`,
  angleRight: `${A}angle-right.svg`,
  contactMap: `${A}contact-map.png`,
  location: `${A}location.svg`,
  contactPhone: `${A}contact-phone.svg`,
  contactEmail: `${A}contact-email.svg`,
}

function Button({ children, variant = 'outline', className = '', ...props }) {
  return <button className={`button button--${variant} ${className}`} {...props}>{children}</button>
}

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="header">
      <div className="header__inner">
        <nav className={`nav nav--left ${open ? 'nav--open' : ''}`} aria-label="Primary navigation">
          <a href="/#shop">Shop Products</a><a href="/blog">Blog</a><a href="/#footer">FAQ</a>
        </nav>
        <a className="brand" href="/" aria-label="BYC home"><img src={assets.logo} alt="BYC" /></a>
        <nav className={`nav nav--right ${open ? 'nav--open' : ''}`} aria-label="Secondary navigation">
          <a href="/about">About Us</a><a href="/contact">Contact</a>
          <div className="nav__icons">
            <button aria-label="Search"><img src={assets.search} alt="" /></button>
            <a href="#account" aria-label="Account"><img src={assets.user} alt="" /></a>
            <a href="#wishlist" aria-label="Wishlist"><img src={assets.heart} alt="" /></a>
            <a href="#cart" aria-label="Shopping cart"><img src={assets.cart} alt="" /></a>
          </div>
        </nav>
        <button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__copy">
        <img className="hero__title-art" src={assets.heroTitle} alt="" aria-hidden="true" />
        <p className="sr-only">Your body deserves comfort</p>
        <h1 className="sr-only">Get the best for yourself</h1>
        <div className="button-row"><Button variant="dark">Shop Now</Button><Button>Learn more</Button></div>
      </div>
      <div className="hero__models" aria-label="BYC underwear collection">
        <div className="hero__model hero__model--side"><img src={assets.heroManLeft} alt="Model wearing black BYC underwear" /></div>
        <div className="hero__model hero__model--main"><img src={assets.heroWoman} alt="Model wearing a white BYC crop top" /></div>
        <div className="hero__model hero__model--side"><img src={assets.heroManRight} alt="Model wearing white BYC underwear" /></div>
      </div>
    </section>
  )
}

const arrivals = [
  { title: 'Men Underwears', image: assets.arrivalMen, className: 'arrival--men' },
  { title: 'Women Underwears', image: assets.arrivalWomen, className: 'arrival--women' },
  { title: 'Underwears', image: assets.arrivalMen, className: 'arrival--underwears' },
]

function NewArrivals() {
  return (
    <section className="arrivals" id="shop">
      <h2>Checkout BYC New Arrivals</h2>
      <div className="arrivals__grid">
        {arrivals.map((item) => (
          <article className={`arrival ${item.className}`} key={item.title}>
            <div className="arrival__image"><img src={item.image} alt={item.title} /></div>
            <h3>{item.title}</h3><p>Parturient Venenatis Etiam</p>
          </article>
        ))}
      </div>
      <Button>View All</Button>
    </section>
  )
}

function CollectionStory() {
  return (
    <section className="collection" id="about">
      <div className="collection__grid">
        <div className="collection__story">
          <div><p className="eyebrow">BYC Collection 2021</p><h2>BYC Collection</h2>
          <p>The best everyday option in a Super Saver range within a reasonable price. It is our responsibility to keep you 100 percent stylish. Be smart &amp; trendy with us.</p>
          <Button>Explore</Button></div>
        </div>
        <div className="collection__image collection__image--kids"><img src={assets.kids} alt="Children wearing BYC vests" /></div>
        <div className="collection__image collection__image--woman"><img src={assets.heroWoman} alt="Woman wearing BYC basics" /></div>
        <div className="collection__image collection__image--man"><img src={assets.collectionMan} alt="Man wearing BYC underwear" /></div>
      </div>
      <Button>View All</Button>
    </section>
  )
}

const productImages = [assets.productOne, assets.productTwo, assets.productThree]

function CategoryShop() {
  const [audience, setAudience] = useState('For Women')
  const [type, setType] = useState('Pants')
  const [offset, setOffset] = useState(0)
  const products = productImages.map((image, index) => productImages[(index + offset) % productImages.length])
  return (
    <section className="categories">
      <h2>Shop By Category</h2>
      <div className="tabs tabs--primary" role="tablist">
        {['For Women', 'For Men', 'For Kids'].map((label) => <button key={label} className={audience === label ? 'is-active' : ''} onClick={() => setAudience(label)}>{label}</button>)}
      </div>
      <div className="tabs tabs--secondary" role="tablist">
        {['T-Shirt', 'Singlet', 'Pants', 'Boxers'].map((label) => <button key={label} className={type === label ? 'is-active' : ''} onClick={() => setType(label)}>{label}</button>)}
      </div>
      <div className="product-slider">
        <button className="slider-arrow slider-arrow--left" aria-label="Previous products" onClick={() => setOffset((offset + 2) % 3)}><img src={assets.carouselLeft} alt="" /></button>
        <div className="products">
          {products.map((image, index) => (
            <article className="product" key={`${image}-${index}`}>
              <div className="product__image"><img src={image} alt={`${audience} ${type.toLowerCase()}`} /></div>
              <h3>WOMEN PANTS <span>BYC-501LMS</span></h3><p>₦2,800.00</p>
            </article>
          ))}
        </div>
        <button className="slider-arrow slider-arrow--right" aria-label="Next products" onClick={() => setOffset((offset + 1) % 3)}><img src={assets.carouselRight} alt="" /></button>
      </div>
      <Button>View All</Button>
    </section>
  )
}

const posts = [
  { image: assets.blogOne, title: 'How important are clothes in your style?' },
  { image: assets.blogTwo, title: 'How important are pants in your style?' },
  { image: assets.blogThree, title: 'How important are shoes in your style?' },
]

function BlogCard({ image, title }) {
  return (
    <article className="blog-card">
      <div className="blog-card__image"><img src={image} alt="" /></div>
      <div className="blog-card__meta">
        <img className="blog-card__avatar" src={assets.author} alt="Wade Warren" />
        <div className="blog-card__stats"><span><img src={assets.view} alt="" />35</span><span><img src={assets.like} alt="" />23</span></div>
      </div>
      <div className="blog-card__body">
        <p className="blog-card__author"><strong>Wade Warren</strong><span>•</span>Fashion Designer</p>
        <h3>{title}</h3>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
        <a href="/blog/how-important-are-shoes-in-your-style">Read more <img src={assets.arrow} alt="" /></a>
      </div>
    </article>
  )
}

function BlogSection() {
  return (
    <section className="blog" id="blog"><h2>BYC AFRICA Blog News</h2>
      <div className="blog__grid">{posts.map((post) => <BlogCard key={post.title} {...post} />)}</div>
      <Button>View All</Button>
    </section>
  )
}

const blogPagePosts = [
  { image: assets.blogThree, crop: 'three' },
  { image: assets.blogOne, crop: 'one', reversed: true },
  { image: assets.blogTwo, crop: 'two' },
]

function AuthorStats() {
  return (
    <>
      <div className="listing-post__stats">
        <img className="listing-post__avatar" src={assets.author} alt="Wade Warren" />
        <div className="listing-post__metrics">
          <span><img src={assets.view} alt="" />35</span>
          <span><img src={assets.like} alt="" />23</span>
        </div>
      </div>
      <p className="listing-post__author"><strong>Wade Warren</strong><span>•</span>Fashion Designer</p>
    </>
  )
}

function ListingPost({ image, crop, reversed }) {
  return (
    <article className={`listing-post ${reversed ? 'listing-post--reversed' : ''}`}>
      <div className={`listing-post__image listing-post__image--${crop}`}><img src={image} alt="BYC Africa fashion editorial" /></div>
      <div className="listing-post__content">
        <h2>Fashion trend forecast for Summer 2021</h2>
        <p className="listing-post__excerpt">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        <a className="listing-post__read" href="/blog/how-important-are-shoes-in-your-style">Read more <img src={assets.arrow} alt="" /></a>
        <AuthorStats />
      </div>
    </article>
  )
}

function Pagination() {
  const [page, setPage] = useState(3)
  return (
    <nav className="pagination" aria-label="Blog pages">
        <button aria-label="Previous page" onClick={() => setPage(Math.max(1, page - 1))}><img src={assets.paginationLeft} alt="" /></button>
        {[1, 2, 3].map((number) => <button key={number} className={page === number ? 'is-active' : ''} aria-current={page === number ? 'page' : undefined} onClick={() => setPage(number)}>{number}</button>)}
        <button aria-label="Next page" onClick={() => setPage(Math.min(3, page + 1))}><img src={assets.paginationRight} alt="" /></button>
    </nav>
  )
}

function BlogPage() {
  return (
    <main className="blog-listing" id="top">
      <h1>BYC AFRICA Blog News</h1>
      <div className="blog-listing__posts">
        {blogPagePosts.map((post, index) => <ListingPost key={`${post.crop}-${index}`} {...post} />)}
      </div>
      <Pagination />
    </main>
  )
}

const articleSentence = 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
const articleIntro = Array(6).fill(articleSentence).join(' ')
const articleBody = Array(18).fill(articleSentence).join(' ')

function BlogDetailPage() {
  return (
    <main className="blog-detail" id="top">
      <nav className="blog-detail__breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&gt;</span><a href="/blog">Blogs</a></nav>
      <h1>How important are shoes in your style?</h1>
      <p className="blog-detail__intro">{articleIntro}</p>
      <div className="blog-detail__hero"><img src={assets.blogThree} alt="Model wearing BYC fashion beside a car" /></div>
      <p className="blog-detail__body">{articleBody}</p>
      <h2>More Blog news</h2>
      <div className="blog__grid blog-detail__grid">{posts.map((post) => <BlogCard key={post.title} {...post} />)}</div>
      <Pagination />
    </main>
  )
}

const achievements = [
  { year: 1990, text: 'Gold Prize for the Best Listed Firm awarded by Daesin Economy Research Institute.' },
  { year: 1993, text: 'Selected as representaive enterprise of Korea for successful stategies on globalization of Korean brands by Korean Traders Association.' },
  { year: 1997, text: "BYC' selected as the most preferred brand for underwear by the Federation of Korean Women Economists.." },
  { year: 1997, text: 'Selected as the official commercializer of underwear for 1988 France Worldcup.' },
  { year: 1999, text: 'The Prize for Export of Original Brands awarded as recommended by the Korean Assoiatioon of Textile Industries' },
  { year: 2001, text: '“The 10th Prize for the Enterprise of Economical Justice” by the enterprise Assessment commission.' },
  { year: 2006, text: 'The Prize for Export of Original Brands awarded as recommended by the Korean Assoiatioon of Textile Industries' },
  { year: 2006, text: "selected by korea management association as no.1 in brand influence among the men's underwear companies" },
  { year: 2011, text: 'Selected as the Best Korean Enterprise of 1992 by Korean Management Association.' },
]

function AchievementCard({ year, text, index }) {
  return (
    <article className={`achievement-card ${index === 0 ? 'achievement-card--featured' : ''}`}>
      <img src={assets.award} alt="Award medal" />
      <p>{text}</p>
      <strong>Year {year}</strong>
    </article>
  )
}

function Rating() {
  return (
    <div className="recent-card__rating" aria-label="Rated 4.05 out of 5">
      {[0, 1, 2, 3].map((star) => <img key={star} src={assets.star} alt="" />)}
      <img src={assets.starHalf} alt="" />
      <span>4.05</span>
    </div>
  )
}

function RecentlyViewedCard() {
  return (
    <article className="recent-card">
      <div className="recent-card__image"><div><img src={assets.recentProduct} alt="BYC men's boxer product packaging" /></div></div>
      <div className="recent-card__content">
        <h3>MEN BOXERS <span>BYC 1163</span></h3>
        <p>Fashionable Men's Underwear Boxer Cotton Underwear 3 In 1</p>
        <strong>₦1,900.00</strong>
        <Rating />
      </div>
    </article>
  )
}

function AboutPage() {
  return (
    <main className="about-page" id="top">
      <nav className="about-page__breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&gt;</span><span>About Us</span></nav>
      <h1>ABOUT US</h1>

      <section className="about-intro">
        <div className="about-intro__image"><img src={assets.aboutModel} alt="Model wearing BYC underwear" /></div>
        <div className="about-intro__copy">
          <h2>ABOUT BYC AFRICA</h2>
          <p>We are the sole distributor of BYC products in Africa. We import BYC products from Korea and distribute them to African countries through Onamik Holdings Limited.</p>
        </div>
      </section>

      <section className="about-records">
        <h2>WHAT OUR RECORD SAYS</h2>
        <div className="about-records__grid">
          {achievements.map((achievement, index) => <AchievementCard key={`${achievement.year}-${index}`} {...achievement} index={index} />)}
        </div>
      </section>

      <section className="recently-viewed">
        <div className="recently-viewed__header"><h2>Recently Viewed</h2><a href="#shop">See all <img src={assets.angleRight} alt="" /></a></div>
        <div className="recently-viewed__rule" />
        <div className="recently-viewed__items">{Array.from({ length: 5 }, (_, index) => <RecentlyViewedCard key={index} />)}</div>
      </section>
    </main>
  )
}

const contactDetails = [
  { icon: assets.location, title: 'ADDRESS', lines: ['( Head Office )', '175 Cameroun Road Aba, Abia State.'] },
  { icon: assets.contactPhone, title: 'PHONE', lines: ['08101375376 09053403403'] },
  { icon: assets.contactEmail, title: 'EMAIL ADDRESS', lines: ['BYCAFRICA@gmail.com'] },
]

function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    event.currentTarget.reset()
    setSubmitted(true)
  }

  return (
    <main className="contact-page" id="top">
      <nav className="contact-page__breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&gt;</span><span>Contact Us</span></nav>
      <h1>CONTACT US</h1>

      <section className="contact-hero" aria-label="Contact locations">
        <img className="contact-hero__map" src={assets.contactMap} alt="Map showing the San Francisco Civic Center area" />
        <div className="contact-details">
          {contactDetails.map((detail) => (
            <article className="contact-detail" key={detail.title}>
              <div className="contact-detail__icon"><img src={detail.icon} alt="" /></div>
              <div><h2>{detail.title}</h2>{detail.lines.map((line) => <p key={line}>{line}</p>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-form-section">
        <h2>Drop a Message</h2>
        <form onSubmit={handleSubmit}>
          <label className="contact-field contact-field--phone">Phone<input type="tel" name="phone" required /></label>
          <label className="contact-field contact-field--email">Email address<input type="email" name="email" required /></label>
          <label className="contact-field contact-field--notes">Notes<textarea name="notes" required /></label>
          <button type="submit">Submit</button>
          {submitted && <p className="sr-only" role="status">Your message has been submitted.</p>}
        </form>
      </section>

      <section className="recently-viewed">
        <div className="recently-viewed__header"><h2>Recently Viewed</h2><a href="/#shop">See all <img src={assets.angleRight} alt="" /></a></div>
        <div className="recently-viewed__rule" />
        <div className="recently-viewed__items">{Array.from({ length: 5 }, (_, index) => <RecentlyViewedCard key={index} />)}</div>
      </section>
    </main>
  )
}

function FooterColumn({ title, children }) {
  return <div className="footer__column"><h3>{title}</h3>{children}</div>
}

function Footer({ phoneNumber = '+2348102722844, +2348051856625' }) {
  return (
    <footer className="footer" id="footer">
      <div className="footer__top">
        <div className="footer__links">
          <FooterColumn title="Company Info"><a href="/about">About Us</a><a href="#affiliate">Affiliate</a><a href="/blog">Fashion Blogger</a></FooterColumn>
          <FooterColumn title="Help & Support"><a href="#shipping">Shipping Info</a><a href="#refunds">Refunds</a><a href="#order">How to Order</a><a href="#track">How to Track</a><a href="#sizes">Size Guides</a></FooterColumn>
          <FooterColumn title="Customer Care"><a href="/contact">Contact Us</a><a href="#payment">Payment Methods</a><div className="payments"><img src={assets.paypal} alt="PayPal" /><img src={assets.visa} alt="Visa" /><img src={assets.mastercard} alt="Mastercard" /></div></FooterColumn>
        </div>
        <div className="newsletter"><h3>Signup For The Latest News</h3><form onSubmit={(event) => event.preventDefault()}><input type="email" placeholder="Enter Email" aria-label="Email address" /><button aria-label="Subscribe">›</button></form><p><img src={assets.mail} alt="" /> bycafrica@gmail.com</p><p><img src={assets.phone} alt="" /> {phoneNumber}</p></div>
      </div>
      <div className="socials">
        {[assets.socialFacebook, assets.socialInstagram, assets.socialTwitter, assets.socialYoutube].map((icon, i) => <a href="#social" key={icon} aria-label={['Facebook', 'Instagram', 'Twitter', 'YouTube'][i]}><img src={icon} alt="" /></a>)}
      </div>
      <div className="footer__bottom">All rights Reserved copyright bycafrica 2021.</div>
    </footer>
  )
}

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'
  if (path === '/contact') return <><Header /><ContactPage /><Footer phoneNumber="+2348101375376 ; +2349053403403" /></>
  if (path === '/about') return <><Header /><AboutPage /><Footer phoneNumber="+2348101375376 ; +2349053403403" /></>
  if (path === '/blog/how-important-are-shoes-in-your-style') return <><Header /><BlogDetailPage /><Footer phoneNumber="+2348101375376 ; +2349053403403" /></>
  if (path === '/blog') return <><Header /><BlogPage /><Footer phoneNumber="+2348101375376 ; +2349053403403" /></>
  return <><Header /><main><Hero /><NewArrivals /><CollectionStory /><CategoryShop /><BlogSection /></main><Footer /></>
}
