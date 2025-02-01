import React from 'react';
import ContactForm from './ContactForm';


const Contact = () => {
    return (
        <div className='relative z-30 cotnainer m-auto animate__animated animate__fadeIn h-full'>
            <div className=" flex justify-center items-center  w-96 md:w-[800px] m-auto ">
                <ContactForm></ContactForm>
            </div>
        </div>
    );
};

export default Contact;