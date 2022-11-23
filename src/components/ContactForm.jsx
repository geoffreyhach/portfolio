import React, { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

function ContactForm({ isContactFormOpen, setIsContactFormOpen }) {
    const [emailSent, setEmailSent] = useState(false);
    const [isVerified, setIsVerified] = useState(false);
    const myRef = useRef();
    const formRef = useRef();

    useEffect(() => {
        if (isContactFormOpen) myRef.current.showModal();
        if (!isContactFormOpen) myRef.current.close();
    }, [isContactFormOpen]);

    function MaterialSymbolsCloseRounded() {
        return (
            <svg width="1.5rem" height="1.5rem" viewBox="0 0 24 24">
                <path
                    fill="currentColor"
                    d="m12 13.4l-4.9 4.9q-.275.275-.7.275q-.425 0-.7-.275q-.275-.275-.275-.7q0-.425.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7q0-.425.275-.7q.275-.275.7-.275q.425 0 .7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275q.425 0 .7.275q.275.275.275.7q0 .425-.275.7L13.4 12l4.9 4.9q.275.275.275.7q0 .425-.275.7q-.275.275-.7.275q-.425 0-.7-.275Z"
                ></path>
            </svg>
        );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setEmailSent(true);

        emailjs.sendForm(
            "service_ktljp6v",
            "template_m3u18gv",
            formRef.current,
            "kcZQrlI6KOz4AF0p7"
        );
    };

    const handleChange = () => {
        setIsVerified(true);
    };

    return (
        <dialog ref={myRef} className="contact-modal">
            <button
                onClick={() => {
                    setIsContactFormOpen(false);
                    setEmailSent(false);
                }}
            >
                <MaterialSymbolsCloseRounded />
            </button>
            {!emailSent ? (
                <form ref={formRef} onSubmit={handleSubmit}>
                    <label htmlFor="name">Your name</label>
                    <input type="text" id="name" name="from_name" />
                    <label htmlFor="email">Your E-mail</label>
                    <input type="text" id="email" name="user_email" />
                    <label htmlFor="message">Your message</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                        cols="33"
                    ></textarea>
                    <div className="flex-col centered">
                        {" "}
                        <ReCAPTCHA
                            sitekey="6LdN1SojAAAAAD4iqk6zhecJCTP8MidnNPw6X4iD"
                            onChange={handleChange}
                        />
                        <button type="submit" disabled={!isVerified}>
                            Envoyer
                        </button>
                    </div>
                </form>
            ) : (
                <div className="email-sent">
                    <p>Email sent ! I'll answer as soon as possible.</p>
                </div>
            )}
        </dialog>
    );
}

export default ContactForm;
