import React, { useState } from "react";

import { Footer } from "./Components/Footer";
import { AppRoutes } from "./Components/AppRoutes";
import { Navbar } from "./Components/Navbar";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="dark:bg-gray-900 bg-gray-100 dark:text-gray-200 black min-h-screen">
        <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
        <AppRoutes />
        <Footer />
      </div>
    </div>
  );
};

export default App;
