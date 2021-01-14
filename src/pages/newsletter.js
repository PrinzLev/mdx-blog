import React from 'react'
import Layout from '../components/Layout'
const NewsLetter = () => {
  return (
    <Layout>
      <section className="newsletter-page">
        <div className="page-center">
          <h2>Weekly Newsletter</h2>
          <h4>Get updates on my latest posts, and personalized messages.</h4>
          <form
            className="contact-form"
            name="contact"
            method="POST"
            netlify-honeypot="bot-field"
            data-netlify="true"
            action="/success"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="form-control"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="form-control"
            />
            <button type="submit" className="btn form-control submit-btn">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </Layout>
  )
}

export default NewsLetter
