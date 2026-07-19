'use client'

import { useId } from 'react'
import StructuredData, {
  webPageData,
  localBusinessData,
} from '@/components/StructuredData'

export default function ContactPage() {
  const firstNameId = useId()
  const lastNameId = useId()
  const emailId = useId()
  const phoneId = useId()
  const messageId = useId()

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    try {
      const response = await fetch('/api/follow-up-boss', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.get('firstName'),
          lastName: formData.get('lastName'),
          email: formData.get('email'),
          phone: formData.get('phone'),
          message: formData.get('message'),
          source: 'Contact Page',
          leadType: 'General Inquiry',
        }),
      })

      if (response.ok) {
        alert("Thank you! We'll be in touch within 24 hours.")
        e.currentTarget.reset()
      } else {
        alert('There was an error submitting your message. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an error submitting your message. Please try again.')
    }
  }

  return (
    <>
      <StructuredData type="LocalBusiness" data={localBusinessData} />
      <StructuredData
        type="WebPage"
        data={webPageData({
          name: 'Contact Henderson Real Estate Experts',
          description:
            'Get in touch with Dr. Jan Duffy for expert Henderson real estate guidance and personalized service',
          url: 'https://searchforhomesinhenderson.com/contact',
          mainEntity: {
            '@type': 'ContactPage',
            name: 'Contact Form',
            description: 'Contact form for Henderson real estate inquiries',
          },
        })}
      />
      <main className="min-h-screen">
        {/* Hero Section with H1 */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Henderson Real Estate Experts
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto mb-8">
              Ready to find your dream home in Henderson? Our local experts are
              here to guide you through every step of your real estate journey
              with personalized service and market expertise.
            </p>
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              📞 Free Consultation • Expert Guidance • Local Knowledge
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Get in Touch
                </h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we'll get back to you within 24
                  hours with personalized assistance for your Henderson real
                  estate needs.
                </p>

                <form className="space-y-6" onSubmit={handleContactSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor={firstNameId}
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        First Name *
                      </label>
                      <input
                        id={firstNameId}
                        type="text"
                        name="firstName"
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor={lastNameId}
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Last Name *
                      </label>
                      <input
                        id={lastNameId}
                        type="text"
                        name="lastName"
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor={emailId}
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        id={emailId}
                        type="email"
                        name="email"
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor={phoneId}
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        id={phoneId}
                        type="tel"
                        name="phone"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="(702) 555-0123"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor={messageId}
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      How Can We Help? *
                    </label>
                    <textarea
                      id={messageId}
                      name="message"
                      rows={4}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tell us about your real estate needs, questions, or how we can assist you..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
                  >
                    Send Message
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    By submitting this form, you agree to our privacy policy and
                    consent to being contacted about your inquiry.
                  </p>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Why Choose Our Henderson Experts?
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 text-sm font-bold">
                          ✓
                        </span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          Local Market Expertise
                        </h3>
                        <p className="text-gray-600 text-sm">
                          Deep knowledge of Henderson neighborhoods, schools,
                          and market trends
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 text-sm font-bold">
                          ✓
                        </span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          Personalized Service
                        </h3>
                        <p className="text-gray-600 text-sm">
                          One-on-one attention and customized solutions for your
                          unique needs
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 text-sm font-bold">
                          ✓
                        </span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          Proven Results
                        </h3>
                        <p className="text-gray-600 text-sm">
                          Track record of successful transactions and satisfied
                          clients in Henderson
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 text-sm font-bold">
                          ✓
                        </span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          Full-Service Support
                        </h3>
                        <p className="text-gray-600 text-sm">
                          From initial consultation to closing and beyond
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Contact Information
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-blue-600">📧</span>
                      <span className="text-gray-600">
                        info@hendersonhomes.com
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-blue-600">📞</span>
                      <span className="text-gray-600">(702) 500-1064</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-blue-600">📍</span>
                      <span className="text-gray-600">
                        2470 Paseo Verde Parkway, Suite 135
                        <br />
                        Henderson, NV 89074
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-blue-600">🕒</span>
                      <span className="text-gray-600">
                        Mon-Fri: 9AM-6PM | Sat: 10AM-4PM
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Quick Response Guarantee
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    We understand that real estate decisions often require quick
                    responses. That's why we commit to:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Respond to all inquiries within 24 hours</li>
                    <li>• Provide same-day property showings when possible</li>
                    <li>
                      • Offer immediate market analysis for urgent decisions
                    </li>
                    <li>
                      • Maintain flexible scheduling for busy professionals
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
              Henderson Communities We Serve
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Green Valley
                </h3>
                <p className="text-gray-600 text-sm">
                  Luxury master-planned community with championship golf
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Anthem
                </h3>
                <p className="text-gray-600 text-sm">
                  Hillside community with stunning views and amenities
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Stephanie Ranch
                </h3>
                <p className="text-gray-600 text-sm">
                  Family-friendly with excellent schools
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Whitney Ranch
                </h3>
                <p className="text-gray-600 text-sm">
                  Established community with mature landscaping
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Henderson Home Search?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Don't wait to find your dream home in Henderson. Our experts are
              ready to help you navigate the market and make informed decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="http://drjanduffy.realscout.com/onboarding"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Start Searching
              </a>
              <a
                href="http://drjanduffy.realscout.com/onboarding"
                className="inline-block bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Get Home Value
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
