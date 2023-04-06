import React from 'react';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
  return (
    <>

  
<section className="mb-4 container">
    <h2 className="h1-responsive font-weight-bold text-center ">Contact us</h2>
    <p className="text-center w-responsive mx-auto mb-2">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>
    <div className="row">
        <div className="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                <div className="row">
                    <div className="col-md-10">
                        <div className="md-form mb-0">
                            <label for="name" className="mb-2">Your name</label>
                            <input type="text" id="name" name="name" className="form-control"/>
                        </div>
                    </div>
                    <div className="col-md-10">
                        <div className="md-form mb-0">
                            <label for="number" className="mb-2">Phone</label>
                            <input type="text" id="name" name="number" className="form-control"/>
                        </div>
                    </div>
                    <div className="col-md-10">
                        <div className="md-form mb-0">
                            <label for="email" className="mb-2">Your email</label>
                            <input type="text" id="email" name="email" className="form-control"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-10">
                        <div className="md-form mb-0">
                            <label for="subject" className="mb-2">Subject</label>
                            <input type="text" id="subject" name="subject" className="form-control"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-10">
                        <div className="md-form">
                            <label for="message" className='mb-2'>Your message</label>
                            <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                        </div>
                    </div>
                </div>
            </form>
            <div className="text-center text-md-left mt-3">
                <a className="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send Message</a>
            </div>
            <div className="status"></div>
        </div>
        <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
                <li><AddLocationIcon />
                    <p>San Francisco, CA 94126, USA</p>
                </li>

                <li><LocalPhoneIcon />
                    <p>+ 01 234 567 89</p>
                </li>

                <li><EmailIcon />
                    <p>contact@mdbootstrap.com</p>
                </li>
            </ul>
        </div>
    </div>
</section>
      
    </>
  )
}

export default Contact;