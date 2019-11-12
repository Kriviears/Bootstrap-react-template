import React, { Component } from 'react';

export default class Home extends Component {

    render(){
        return(
            <div className='col text-center'>
                <h1>Home</h1>
                <p>
                    Little 5 Points Center for Arts & Community – 
                    L5PCAC (formerly the Little 5 Points Community Center) 
                    is a 501(C)3 non-profit composed of partner 
                    organizations, community leaders, and neighborhood 
                    representatives. Our resident partners are non-profit 
                    groups with a wide range of goals with the common thread 
                    of community awareness and improvement.
                </p>
                <p>
                    Host your next event at L5PCAC.  Click here for more info.
                </p>
                <img
                    src='http://www.l5pcc.org/wp-content/uploads/2010/02/front-of-building-1024x768.jpg'
                    alt='l5pcc front yard' className='img-fluid'
                />
                <p>
                    In 1919 the present building opened its doors as the new Moreland 
                    Elementary School, replacing the former “Neel Academy” site on 
                    Moreland Avenue. It served the Inman and Candler Park communities 
                    as a public school continuously through 1982, with as many as 900 
                    students enrolled in 1928. After the school closed in 1982, the 
                    building attracted the attention of struggling non-profit 
                    organizations.
                </p>
                <p>
                    In the fall of 1982 the L5PCC, Inc. leased the building from the 
                    Atlanta School Board and set up operations with a mission to 
                    support arts, cultural, and community service organizations in 
                    the Little 5 Points area of Atlanta. We have continued to 
                    contribute to the stability of the in-town arts community and to 
                    the growth of community cultural organizations. As a successful 
                    experiment in adaptive reuse of older school buildings, L5PCC, 
                    Inc., purchased the site from the Atlanta School Board in 1995.
                </p>
                <p>The Center is located at:</p>
                <p>
                    1083 Austin Ave NE
                    Atlanta, GA 30307
                    (404) 522-2926
                    David Shorter, Executive Director
                    director@l5pcc.org 
                </p>
            </div>
        )
    }
}