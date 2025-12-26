import {NavLink, useNavigate, useRouteError } from "react-router-dom";

export const ErrorPage = () => {

const error = useRouteError();
const navigate = useNavigate();

const handleGoBack = () =>{
    navigate(-1)
}

if(error.status === 404) {
    return(
        <section className="error-section">
            <div id="error-text">
                <figure>
                    <img src = "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTlzMGlkZWN3NHQ4NDRndXJ3YzNmdDFoMTMwNXQxd2l0ano0bmttZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/C21GGDOpKT6Z4VuXyn/giphy.gif" alt="404 not found"/>
                </figure>
                <div className="text-center">
                    <p className="p-a">
                        .The page you were looking for could not be found
                    </p>
                    <p className="p-b">
                        ...Back to previous page
                    </p>
                </div>
            </div>
            <NavLink to="/" className="btn">
            Go Back to Home Page
            </NavLink>
            <button className="btn" onClick={handleGoBack}>Go Back</button>
        </section>
    );
};
console.log(error)

 return <h1>The page you are looking does not exists</h1>;
};