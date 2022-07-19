import React from 'react'; 
import { useLocation } from 'react-router-dom';


const NotFound = () => {
    const location = useLocation()
    return(
        <>
          <div class="d-flex align-items-center justify-content-center vh-100">
            <div class="text-center">
                <h1 class="display-1 fw-bold">404</h1>
                <p class="fs-3"> <span class="text-danger">Opps!</span> Sorry,<mark>{location.pathname}</mark>  page not found!</p>
                <p class="lead">
                    The page you’re looking for doesn’t exist.
                  </p>
                <a href="/" class="btn btn-dark">Go Home</a>
            </div>
        </div>

    
        </>
    )

}


export default NotFound; 
