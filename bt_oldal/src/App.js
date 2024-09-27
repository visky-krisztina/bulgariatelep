import React, { useState } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "./index.css";

import { DataProvider } from "./contexts/DataProvider.js";
import { AuthProvider } from "./contexts/AuthContext.js";
import { ModalProvider } from "./contexts/ModalContext.js";
import HomePage from "./pages/homepage/homepage.component.jsx";
import ContactPage from "./pages/contactpage/contactpage.component.jsx";
import AboutPage from "./pages/aboutpage/aboutpage.component";
import ZenesIstentiszteletek from "./pages/zenesIstentiszteletek/zenesIstentiszteletek.component";
import CsendesNapok from "./pages/csendesnapok/csendesNapok.component";
import Navbar from "./components/navbar/navbar.component";
import Alkalmaink from "./pages/alkalmaink/alkalmaink.component";
import Predikaciok from "./pages/predikaciok/predikaciok.component";
import BurgerMenu from "./components/burgerMenu/burgerMenu.component";
import GyerekPage from "./pages/gyerekPage/gyerekPage.component";
import FiatalokPage from "./pages/fiatalokPage/fiatalokPage.component";
import FelnottekPage from "./pages/felnottekPage/felnottekPage.component";
import Footer from "./components/footer/footer.component";
import UtmutatoPage from "./pages/utmutato/utmutato.component";
import ScrollToTop from "./components/scrollToTop/scrollToTop.jsx";
import BankiAdatok from "./pages/bankDetailsPage/bankDetails.jsx";
import Login from "./components/login/login.component.jsx";
import Logout from "./components/logout/logout.jsx";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.component.jsx";

function App() {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<AuthProvider>
			<DataProvider>
				<ModalProvider>
					<BrowserRouter>
						{/* ScrollToTop should be here, outside of Switch */}
						<ScrollToTop />
						<Navbar toggle={toggle} />
						<BurgerMenu isOpen={isOpen} toggle={toggle} />

						<Switch>
							<Route exact path='/' component={HomePage} />
							<Route path='/about' component={AboutPage} />
							<Route path='/alkalmaink' component={Alkalmaink} />
							<Route path='/gyerekek' component={GyerekPage} />
							<Route path='/fiatalok' component={FiatalokPage} />
							<Route path='/felnottek' component={FelnottekPage} />
							<Route path='/zenesIstentiszteletek' component={ZenesIstentiszteletek} />
							<Route path='/csendesNapok' component={CsendesNapok} />
							<Route path='/predikaciok' component={Predikaciok} />
							<Route path='/contact' component={ContactPage} />
							<Route path='/utmutato' component={UtmutatoPage} />
							<Route path='/bankiadatok' component={BankiAdatok} />
							<Route path='/login' component={Login} />
							<Route path='/logout' component={Logout} />
							<PrivateRoute path='/protected' component={HomePage} />
						</Switch>

						<Footer />
					</BrowserRouter>
				</ModalProvider>
			</DataProvider>
		</AuthProvider>
	);
}

export default App;
