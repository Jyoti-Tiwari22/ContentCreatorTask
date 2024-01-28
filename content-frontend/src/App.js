import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ContentForm from './components/ContentForm';
import ContentPreview from './components/ContentPreview';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
    return (
        <section className='d-flex justify-content-center Hero-banner'>
            <div className='text-center mt-cont'>
                <h1 className="text-white font-weight-bold display-4">Content Creators Form</h1>
                <p className="text-white">Hey there! Please fill in this form to avail content writing services.</p>
                <Router>
                    <div className='flex'>
                        <Link to="/submit-content" className="btn mb-3 btn-light bg-dark text-white rounded-5 btn-hover-white sunmitContent">Submit Content</Link>
                        <Link to="/content-preview" className="btn mb-3 btn-light bg-dark text-white rounded-5 btn-hover-white">Preview Content</Link>
                    </div>
                    <Routes>
                        <Route path="/submit-content" element={<ContentForm />} />
                        <Route path="/content-preview" element={<ContentPreview />} />
                    </Routes>
                </Router>
            </div>
        </section>
    );
}

export default App;

