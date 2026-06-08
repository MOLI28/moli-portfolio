import { Alert, Col, Row } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

export const Newsletter = () => {
    // We handle the state locally now!
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (email && email.indexOf("@") > -1) {
            setStatus('sending');
            setMessage('');
            
            try {
                // Send the email to your custom backend
                let response = await axios.post("http://localhost:5000/newsletter", { email: email });
                
                if (response.data.code === 200) {
                    setStatus('success');
                    setMessage('Success! You are now subscribed.');
                    setEmail(''); // Clear the field
                } else {
                    setStatus('error');
                    setMessage('Something went wrong. Please try again.');
                }
            } catch (error) {
                setStatus('error');
                setMessage('Cannot connect to the server. Is your backend running?');
            }
        } else {
            setStatus('error');
            setMessage('Please enter a valid email address.');
        }
    };

    return (
        <Col lg={12}>
            <div className="newsletter-bx wow slideInUp">
                <Row>
                    <Col lg={12} md={6} xl={5}>
                        <h3>Subscribe to our Newsletter<br></br> & Never miss latest updates</h3>
                        {status === 'sending' && <Alert>Sending...</Alert>}
                        {status === 'error' && <Alert variant="danger">{message}</Alert>}
                        {status === 'success' && <Alert variant="success">{message}</Alert>}
                    </Col>
                    <Col md={6} xl={7}>
                        <form onSubmit={handleSubmit}>
                            <div className="new-email-bx">
                                <input 
                                    type="email" 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    placeholder="Email address" 
                                />
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </div>
        </Col>
    )
}