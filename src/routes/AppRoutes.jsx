import { BrowserRouter } from "react-router-dom";

import SecuredRoutes from "./SecuredRoutes";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <SecuredRoutes />
        </BrowserRouter>
    );
}

export default AppRoutes;
