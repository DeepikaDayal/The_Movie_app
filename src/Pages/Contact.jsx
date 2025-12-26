import "./Contact.css"
import { Form } from "react-router-dom"

export const contactData = async ({request}) => {
try{
 const res = await request.formData();
 const data = Object.fromEntries(res);
 console.log(data);
 return null;

}
catch(error){
console.log(error)
}
};

export const Contact = () =>{
     return (
        <>
        <section className=" section-content">
            <div className="container">
                <h2 className="section-common--heading"></h2>
                <p csection-common--subheading>
                    Get in touch with us.we are always here to help you.
                </p>
                </div>
                <div className="grid grid-two--cols">
                    <div className="contact-content">
                        <Form method="POST" action="/Contact">
                            <div className="grid grid-two-cols mb-3">
                                <div>
                                    <lable htmlFor="username">UserName</lable>
                                    <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    required
                                    autoComplete="off"
                                    placeholder="enter full name"
                                    />
                                </div>
                                <div>
                                    <lable htmlFor="email">email address</lable>
                                    <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    autoComplete="off"
                                    placeholder="abc@deep.com"
                                    />
                                </div>
                                <div className="mb-3">
                                  <lable htmlFor="message">message</lable>
                                  <textarea
                                  name="message"
                                  id="message"
                                  cols="30"
                                  rows="10"
                                  placeholder="we are always here to help you."
                                  > </textarea>
                                </div>
                            </div>
                            <div className="btn">
                                <button>Send Message</button>
                            </div>
                        </Form>
                    </div>
                </div>
        </section>
        </>
    )
}