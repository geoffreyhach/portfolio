import React, { useRef } from "react";
import { useEffect } from "react";

function ContactForm({ isContactFormOpen, setIsModalFormOpen }) {
    const myRef = useRef();

    useEffect(() => {
        if (isContactFormOpen) myRef.current.showModal();
        if (!isContactFormOpen) myRef.current.close();
    }, [isContactFormOpen]);

    return (
        <dialog ref={myRef}>
            <button
                onClick={() => {
                    setIsModalFormOpen(false);
                }}
            >
                close
            </button>
        </dialog>
    );
}

export default ContactForm;
