import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageSquare, 
  Copy, 
  Check, 
  ExternalLink, 
  AlertCircle
} from 'lucide-react';

// Brand SVGs
const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedFullMessage, setCopiedFullMessage] = useState(false);

  const contactEmail = 'baigmkhizer18@gmail.com';
  const contactPhone = '03133752301';
  const contactLocation = 'Karachi, Pakistan';

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please enter your full name (at least 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      newErrors.subject = 'Please enter a message subject (at least 3 characters).';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please write a message with at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form validated! Since no remote backend is connected, show honest delivery modal
      setShowSubmitModal(true);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleOpenMailto = () => {
    const mailtoUrl = `mailto:${contactEmail}?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Inquiry'
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  const handleCopyFormattedMessage = () => {
    const formatted = `To: ${contactEmail}\nFrom: ${formData.name} (${formData.email})\nSubject: ${formData.subject}\n\n${formData.message}`;
    navigator.clipboard.writeText(formatted);
    setCopiedFullMessage(true);
    setTimeout(() => setCopiedFullMessage(false), 2000);
  };

  return (
    <section id="contact" className="section-wrapper contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <MessageSquare size={14} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">
            Let's Connect &amp; <span className="gradient-text">Collaborate</span>
          </h2>
          <p className="section-subtitle">
            Have an exciting idea, collaboration opportunity, or just want to discuss frontend web development and AI? Reach out directly!
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Details & Direct Actions */}
          <div className="contact-info-panel">
            <div className="glass-card contact-card">
              <h3 className="panel-title">Direct Contact Channels</h3>
              <p className="panel-desc">
                Feel free to email or call directly. As a student developer based in Karachi, I am excited to connect with developers, mentors, and teams.
              </p>

              {/* Direct Info List */}
              <div className="contact-details-list">
                {/* Email Item */}
                <div className="detail-item">
                  <div className="detail-icon-box">
                    <Mail size={20} color="#00D4FF" />
                  </div>
                  <div className="detail-meta">
                    <span className="detail-label">Email Address</span>
                    <a href={`mailto:${contactEmail}`} className="detail-value">
                      {contactEmail}
                    </a>
                  </div>
                  <button
                    className="copy-mini-btn"
                    onClick={handleCopyEmail}
                    title="Copy email to clipboard"
                    aria-label="Copy email"
                  >
                    {copiedEmail ? <Check size={16} color="#10B981" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="detail-item">
                  <div className="detail-icon-box">
                    <Phone size={20} color="#7C5CFC" />
                  </div>
                  <div className="detail-meta">
                    <span className="detail-label">Phone &amp; Mobile</span>
                    <a href={`tel:${contactPhone}`} className="detail-value">
                      {contactPhone}
                    </a>
                  </div>
                </div>

                {/* Location Item */}
                <div className="detail-item">
                  <div className="detail-icon-box">
                    <MapPin size={20} color="#10B981" />
                  </div>
                  <div className="detail-meta">
                    <span className="detail-label">Location</span>
                    <span className="detail-value static">{contactLocation}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons: Email Me & Call Me */}
              <div className="direct-cta-buttons">
                <a
                  href={`mailto:${contactEmail}`}
                  className="btn btn-primary direct-btn"
                >
                  <Mail size={18} />
                  <span>Email Me</span>
                </a>

                <a
                  href={`tel:${contactPhone}`}
                  className="btn btn-secondary direct-btn"
                >
                  <Phone size={18} />
                  <span>Call Me</span>
                </a>
              </div>

              {/* Social Media Placeholders */}
              <div className="social-links-box">
                <span className="social-heading">Social Profiles (Placeholders):</span>
                <div className="social-icons">
                  <a
                    href="#contact"
                    className="social-icon-btn"
                    title="GitHub (Placeholder - to be updated)"
                  >
                    <GithubIcon />
                  </a>
                  <a
                    href="#contact"
                    className="social-icon-btn"
                    title="LinkedIn (Placeholder - to be updated)"
                  >
                    <LinkedinIcon />
                  </a>
                  <a
                    href="#contact"
                    className="social-icon-btn"
                    title="Twitter / X (Placeholder - to be updated)"
                  >
                    <TwitterIcon />
                  </a>
                  <a
                    href="#contact"
                    className="social-icon-btn"
                    title="Instagram (Placeholder - to be updated)"
                  >
                    <InstagramIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Validated Contact Form */}
          <div className="contact-form-panel">
            <div className="glass-card form-card">
              <h3 className="form-title">Send a Direct Message</h3>
              <p className="form-subtitle">
                Fill in your message details below. All fields are verified for proper formatting.
              </p>

              <form onSubmit={handleSubmit} noValidate className="contact-form">
                {/* Name Field */}
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Your Name <span className="req">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Alex Johnson"
                    className={`form-input ${errors.name ? 'input-error' : ''}`}
                    required
                  />
                  {errors.name && (
                    <span className="error-message">
                      <AlertCircle size={13} /> {errors.name}
                    </span>
                  )}
                </div>

                {/* Email Field */}
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Your Email <span className="req">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. alex@example.com"
                    className={`form-input ${errors.email ? 'input-error' : ''}`}
                    required
                  />
                  {errors.email && (
                    <span className="error-message">
                      <AlertCircle size={13} /> {errors.email}
                    </span>
                  )}
                </div>

                {/* Subject Field */}
                <div className="form-group">
                  <label htmlFor="subject" className="form-label">
                    Subject <span className="req">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="e.g. Collaboration on Frontend Project"
                    className={`form-input ${errors.subject ? 'input-error' : ''}`}
                    required
                  />
                  {errors.subject && (
                    <span className="error-message">
                      <AlertCircle size={13} /> {errors.subject}
                    </span>
                  )}
                </div>

                {/* Message Field */}
                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message <span className="req">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Write your message here..."
                    className={`form-textarea ${errors.message ? 'input-error' : ''}`}
                    required
                  />
                  {errors.message && (
                    <span className="error-message">
                      <AlertCircle size={13} /> {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-primary submit-btn">
                  <Send size={18} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Honest Form Action Modal */}
      {showSubmitModal && (
        <div className="modal-backdrop" onClick={() => setShowSubmitModal(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <MessageSquare size={24} className="modal-icon" />
              <h3>Message Formatted &amp; Ready</h3>
            </div>
            <p className="modal-desc">
              Your details are verified! As this static portfolio website does not run a third-party server backend, your message has been formatted to send directly to <strong>{contactEmail}</strong>.
            </p>

            <div className="prefill-preview">
              <div className="prefill-row">
                <strong>From:</strong> {formData.name} ({formData.email})
              </div>
              <div className="prefill-row">
                <strong>Subject:</strong> {formData.subject}
              </div>
              <div className="prefill-body">{formData.message}</div>
            </div>

            <div className="modal-actions-stacked">
              <button className="btn btn-primary" onClick={handleOpenMailto} style={{ width: '100%' }}>
                <ExternalLink size={16} />
                <span>Launch in Default Email App</span>
              </button>

              <button
                className="btn btn-secondary"
                onClick={handleCopyFormattedMessage}
                style={{ width: '100%' }}
              >
                {copiedFullMessage ? <Check size={16} color="#10B981" /> : <Copy size={16} />}
                <span>{copiedFullMessage ? 'Copied to Clipboard!' : 'Copy Formatted Text'}</span>
              </button>

              <button
                className="btn btn-outline"
                onClick={() => setShowSubmitModal(false)}
                style={{ width: '100%' }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .contact-section {
          position: relative;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 2.5rem;
          align-items: flex-start;
        }

        .contact-card, .form-card {
          padding: 2.25rem;
        }

        .panel-title, .form-title {
          font-size: 1.45rem;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 0.5rem;
        }

        .panel-desc, .form-subtitle {
          font-size: 0.92rem;
          line-height: 1.6;
          color: var(--text-muted);
          margin-bottom: 2rem;
        }

        .contact-details-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-bottom: 2rem;
        }

        .detail-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          border-radius: var(--radius-md);
          background: rgba(15, 23, 42, 0.03);
          border: 1px solid rgba(15, 23, 42, 0.08);
          position: relative;
        }

        .detail-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(124, 92, 252, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .detail-meta {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .detail-label {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--text-dim);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .detail-value {
          font-size: 0.98rem;
          font-weight: 600;
          color: var(--text-main);
          word-break: break-all;
        }

        .detail-value.static {
          color: var(--text-main);
        }

        .detail-value:not(.static):hover {
          color: var(--accent-primary);
        }

        .copy-mini-btn {
          color: var(--text-muted);
          padding: 6px;
          border-radius: 6px;
          background: rgba(15, 23, 42, 0.05);
          transition: all 0.2s ease;
        }

        .copy-mini-btn:hover {
          color: #0F172A;
          background: rgba(15, 23, 42, 0.1);
        }

        .direct-cta-buttons {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .direct-btn {
          width: 100%;
        }

        .social-links-box {
          padding-top: 1.5rem;
          border-top: 1px solid rgba(15, 23, 42, 0.08);
        }

        .social-heading {
          display: block;
          font-family: var(--font-mono);
          font-size: 0.76rem;
          color: var(--text-dim);
          margin-bottom: 0.75rem;
        }

        .social-icons {
          display: flex;
          gap: 0.75rem;
        }

        .social-icon-btn {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: rgba(15, 23, 42, 0.04);
          border: 1px solid rgba(15, 23, 42, 0.08);
          color: #475569;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .social-icon-btn:hover {
          background: #7C5CFC;
          border-color: #7C5CFC;
          color: #FFFFFF;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(124, 92, 252, 0.3);
        }

        /* Form elements */
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .form-label {
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-main);
        }

        .req {
          color: #F43F5E;
        }

        .form-input, .form-textarea {
          background: rgba(255, 255, 255, 0.95);
          border: 1px solid rgba(15, 23, 42, 0.15);
          border-radius: var(--radius-md);
          padding: 0.75rem 1rem;
          color: var(--text-main);
          font-size: 0.95rem;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          outline: none;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);
        }

        .form-input:focus, .form-textarea:focus {
          border-color: var(--accent-primary);
          box-shadow: 0 0 0 3px rgba(124, 92, 252, 0.15);
        }

        .input-error {
          border-color: #F43F5E !important;
        }

        .error-message {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-family: var(--font-mono);
          font-size: 0.76rem;
          color: #F43F5E;
        }

        .submit-btn {
          margin-top: 0.5rem;
          width: 100%;
        }

        /* Prefill Preview */
        .prefill-preview {
          background: #F8FAFC;
          border: 1px solid rgba(15, 23, 42, 0.1);
          border-radius: var(--radius-md);
          padding: 1rem;
          margin-bottom: 1.5rem;
          font-size: 0.86rem;
          line-height: 1.5;
        }

        .prefill-row {
          margin-bottom: 0.3rem;
          color: #0F172A;
        }

        .prefill-row strong {
          color: var(--accent-primary);
        }

        .prefill-body {
          margin-top: 0.6rem;
          padding-top: 0.6rem;
          border-top: 1px solid rgba(15, 23, 42, 0.08);
          color: var(--text-muted);
          white-space: pre-wrap;
        }

        .modal-actions-stacked {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .modal-card {
          background: #FFFFFF;
          border: 1px solid rgba(124, 92, 252, 0.3);
          border-radius: var(--radius-lg);
          padding: 2rem;
          max-width: 480px;
          width: 100%;
          box-shadow: 0 25px 60px rgba(15, 23, 42, 0.2);
          color: #0F172A;
        }

        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          padding: 1.5rem;
        }

        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
