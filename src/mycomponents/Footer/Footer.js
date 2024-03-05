import "./Footer.css";

export default function Footer() {
  return (
    <>
   <hr style={{width:'95%', margin: "auto"}}/>
  <footer className="d-flex justify-content-between px-3 py-2 my-4">
    <div className="d-flex">
      <div className="container-fluid">
        <p className="text-capitalize fw-bold">NEED HELP?</p>
        <ul className="d-flex flex-column gap-1 p-0">
          <li className="">
            <a
              className="link-underline link-underline-opacity-0 link-underline-opacity-75-hover link-opacity-50-hover text-secondary "
              target="_self"
              href="/"
              title="Order Status"
            >
              Order Status
            </a>
          </li>
          <li className="">
            <a
              className="link-underline link-underline-opacity-0 link-underline-opacity-75-hover link-opacity-50-hover text-secondary "
              target="_self"
              href="/"
              title="Delivery"
            >
              Delivery
            </a>
          </li>
          <li className="">
            <a
              className="link-underline link-underline-opacity-0 link-underline-opacity-75-hover link-opacity-50-hover text-secondary "
              target="_self"
              href="/"
              title="Returns"
            >
              Returns
            </a>
          </li>
          <li className="">
            <a
              className="link-underline link-underline-opacity-0 link-underline-opacity-75-hover link-opacity-50-hover text-secondary "
              target="_self"
              href="/"
              title="FAQs"
            >
              FAQs
            </a>
          </li>
          <li className="">
            <a
              className="link-underline link-underline-opacity-0 link-underline-opacity-75-hover link-opacity-50-hover text-secondary "
              target="_self"
              href="/"
              title="Shipping Policy"
            >
              Shipping Policy
            </a>
          </li>
          <li className="">
            <a
              className="link-underline link-underline-opacity-0 link-underline-opacity-75-hover link-opacity-50-hover text-secondary "
              target="_self"
              href="/"
              title="Return and Cancellation policy"
            >
              Return and Cancellation policy
            </a>
          </li>
          <li className="">
            <a
              className="link-underline link-underline-opacity-0 link-underline-opacity-75-hover link-opacity-50-hover text-secondary "
              target="_self"
              href="/"
              title="Contact Us"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
      <div className="container-fluid">
        <p className="fw-bold text-capitalize">ABOUT US</p>
        <ul className="d-flex flex-column gap-1 p-0">
          <li className="">
            <a
              className="link-underline link-underline-opacity-0 link-underline-opacity-75-hover link-opacity-50-hover text-secondary "
              target="_self"
              href="/"
              title=" Aditya Birla Fashion & Retail Ltd"
            >
              {" "}
              Aditya Birla Fashion &amp; Retail Ltd
            </a>
          </li>
          <li className="">
            <a
              className="link-underline link-underline-opacity-0 link-underline-opacity-75-hover link-opacity-50-hover text-secondary "
              target="_self"
              href="/"
              title="Find a Store"
            >
              Find a Store
            </a>
          </li>
          <li className="">
            <a
              className="link-underline link-underline-opacity-0 link-underline-opacity-75-hover link-opacity-50-hover text-secondary "
              target="_blank"
              href="/"
              title="Allen Solly Blogs"
            >
              Allen Solly Blogs
            </a>
          </li>
          <li className="">
            <a
              className="link-underline link-underline-opacity-0 link-underline-opacity-75-hover link-opacity-50-hover text-secondary "
              target="_self"
              href="/"
              title="Terms and conditions For Membership Program"
            >
              Terms and conditions For Membership Program
            </a>
          </li>
          <li className="">
            <a
              className="link-underline link-underline-opacity-0 link-underline-opacity-75-hover link-opacity-50-hover text-secondary "
              target="_self"
              href="/"
              title="Bulk Order"
            >
              Bulk Order
            </a>
          </li>
        </ul>
      </div>
    </div>


    <div className="d-flex flex-column mx-5">
      <div className="d-flex gap-2 container align-items-center py-2">
        <img
          alt="logo"
          title="logo"
          src="https://imagescdn.allensolly.com/img/app/brands/superapp/Icons/as_small_icon.svg"
          className="mb-3"
        />
        <p className="text-capitalize fw-bold">
          join the Allen Solly community
        </p>
      </div>
      <form className="d-flex justify-content-between border-bottom">
        <input
          type="text"
          placeholder="Enter your e-mail / mobile number"
          defaultValue=""
          className=""
          style={{ border: "none", flexGrow: 1 }}
        />
        <button className="btn" tabIndex={0} type="submit">
          <img
            alt="Arrow Right"
            title="Subscribe"
            src="https://imagescdn.allensolly.com/img/app/brands/superapp/Icons/icons-arrow-right-blue.svg"
          />
        </button>
      </form>
      <p className="fw-light" style={{ fontSize: "x-small" }}>
        Sign up for updates on the latest Allen Solly collection, campaigns and
        videos.
      </p>
      <div className="container d-flex justify-content-between py-3 gap-5">
        <span className="text-capitalize fw-bold">find us on social</span>
        <div className="d-flex gap-4">
          <a
            href="/"
            target="_blank"
            className="text-dark"
            aria-label="facebook"
            title="facebook"
          >
            <i className="bi bi-facebook"> </i>
          </a>
          <a
            href="/"
            target="_blank"
            className="text-dark"
            aria-label="twitter"
            title="twitter"
          >
            <i className="bi bi-twitter"> </i>
          </a>
          <a
            href="/"
            target="_blank"
            className="text-dark"
            aria-label="instagram"
            title="instagram"
          >
            <i className="bi bi-instagram"> </i>
          </a>
          <a
            href="/"
            target="_blank"
            className="text-dark"
            aria-label="youtube"
            title="youtube"
          >
            <i className="bi bi-youtube"> </i>
          </a>
          <a
            href="/"
            target="_blank"
            className="text-dark"
            aria-label="linkedin"
            title="linkedin"
          >
            <i className="bi bi-linkedin"> </i>
          </a>
        </div>
      </div>
    </div>
  </footer>
  <hr style={{width:'95%', margin: "auto"}}/>
  <div
    role="doc-footnote"
    className="d-flex justify-content-between align-items-center px-2 py-0"
  >
    <p className="text-capitalize fw-light fs-4 my-4">more from aleen solly</p>
    <i className="bi bi-plus text-capitalize fw-light fs-4 pe-3"> </i>
  </div>

  <hr style={{width:'95%', margin: "auto"}}/>

  <div
    role="doc-footnote"
    className="d-flex justify-content-between px-3 py-0 gap-5 mt-3 mb-4"
  >
    <div className="d-flex gap-2">
      <p className="border-end pe-3">Privacy Policy</p>
      <p>Trems and Conditions of Use</p>
    </div>
    <p className="fw-light" style={{ fontSize: "small" }}>
      © 2023 Madura Fashion &amp; Lifestyle, A Division of Aditya Birla Fashion
      &amp; Retail Limited. All Rights Reserved.
    </p>
  </div>
</>

    
    
  )
}
