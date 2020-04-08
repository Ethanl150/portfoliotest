
import React from "react";
import "./app.css"



function Contact() {

    const handleSubmit = e => {

    }

    return (
        <>
            <main className="container bg-white">
                <h1 className="text-center">Contact</h1>
                <hr />
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label for="input-name">Name</label>
                        <input type="text" className="form-control" id="input-name" placeholder="Enter your name here" />
                    </div>
                    <div className="form-group">
                        <label for="input-email">Email</label>
                        <input type="email" className="form-control" id="input-email" placeholder="Enter your email here" />
                    </div>
                    <div className="form-group">
                        <label for="input-message">Message</label>
                        <textarea className="form-control" id="input-message" rows="7"></textarea>
                    </div>
                    <input id="resumeBtn" className="btn" type="submit" value="Submit" />
                    {/* <input className="btn" type="submit" value="Submit" /> */}
                </form>
            </main>
        </>
    )
}

export default Contact;