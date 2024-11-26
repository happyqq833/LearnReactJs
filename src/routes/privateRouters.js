import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { UserContext } from "../context/userContext";
import { Alert } from "react-bootstrap";


const PrivateRoute = (props) => {
    
    const {user} = useContext(UserContext);

    if (user && !user.auth){
        return (
            <Alert  className="mt-3" variant="danger"  >
            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            <p>
               You don't have permisson to acess this route!
            </p>
          </Alert>
        )
    }

    return(
        <>
           {props.children}
        </>
    )
}

export default PrivateRoute;