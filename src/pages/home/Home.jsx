import { useOktaAuth } from "@okta/okta-react";

import { Button } from "../../atoms";
import { useAuth } from "../../hooks";

const Home = () => {
    const [user] = useAuth();
    const { authState, oktaAuth } = useOktaAuth();

    if (!authState) return null;

    const logOutRedirect = async () => await oktaAuth.signOut();

    return (
        <>
            <h3>Hello {user?.name}</h3>
            <Button
                id="logout-button"
                onClick={logOutRedirect}
                title="Logout"
            >Logout</Button>
        </>
    );
}

export default Home;
