import React from 'react';

const Blog = () => {
    return (
        <div className='container faq'>
            <section className="faq container mt-5" id="faq">
                <div className="faq-header text-center">
                    <h1 className="display-5 fw-bold">Frequently Asked Questions
                    </h1>
                    <p className="fs-5 text-secondary text-wrap text-center">Here is the list of most commonly asked web
                        development interview questions for freshers and experienced candidates.</p>
                </div>
                <section className="faq-body mt-5">
                    <div className="accordion" id="accordionPanelsStayOpenExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                <button className="accordion-button fw-bold text-black fs-4" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne"
                                    aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                    What is the purpose of react router?
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show"
                                aria-labelledby="panelsStayOpen-headingOne">
                                <div className="accordion-body">
                                    <h6 className="text-muted">
                                        The React Router is a standard library for routing in React.
                                        It enables navigation between views of different components in a React application.
                                        The user interface is kept in sync with the URL in this dynamic client-side routing.
                                        and create a one-page web application with navigation without the page refreshing as the user navigates..
                                        React Router calls components that display the appropriate information using a component structure.
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                                <button className="accordion-button fw-bold text-black fs-4 collapsed" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo"
                                    aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                    How does context API works?
                                </button>

                            </h2>
                            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse"
                                aria-labelledby="panelsStayOpen-headingTwo">
                                <div className="accordion-body">
                                    <h6 className="text-muted px-5">
                                        The React Context API is a way for a React app to effectively produce global variables
                                        that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent
                                        to child to parent, and so on. Context is also touted as an easier, lighter approach to state management
                                        using Redux.
                                        <ul className='mt-3 mx-5 w-100'>
                                            <li>It returns a consumer and a provider.</li>
                                            <li> Provider is a component that as it's names suggests provides the state to its children.<br></br>
                                                It will hold the "store" and be the parent of all the components that might need that store.</li>
                                            <li>Consumer as it so happens is a component that consumes and uses the state.</li>
                                        </ul>
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                                <button className="accordion-button fw-bold text-black fs-4 collapsed" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree"
                                    aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                    What is a useRef in React? What does it work?
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse"
                                aria-labelledby="panelsStayOpen-headingThree">
                                <div className="accordion-body">
                                    <h6 className="text-muted">
                                        The useRef is a hook that allows to directly create a reference to the DOM element in the
                                        functional component.
                                        <ul>
                                            <li>  The useRef Hook allows you to persist values between renders.</li>
                                            <li> It can be used to store a mutable value that does not cause a re-render when updated.
                                            </li>
                                            <li> It can be used to access a DOM element directly</li>
                                        </ul>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

        </div>
    );
};

export default Blog;