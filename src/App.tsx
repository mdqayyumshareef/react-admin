import React from "react";
import Header from "./layout/header";
import Sidebar from "./layout/sidebar";
import Dashboard from "./pages/dashboard";
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Typography from "./pages/typography";
import NotFound from "./pages/not-found";
import Forms from "./pages/forms";

function App() {
    return (
        <BrowserRouter>
            <main className="bg-white h-full w-full flex flex-col">
                <Header />
                <div className="flex-grow flex flex-row bg-gray-100 overflow-y-scroll">
                    <Sidebar />
                    <div className="w-full p-4 overflow-y-scroll">
                        <div className="w-full max-w-[992px] mx-auto">
                            <Switch>
                                <Redirect exact from="/" to="/dashboard" />
                                <Route exact path="/dashboard">
                                    <Dashboard />
                                </Route>
                                <Route exact path="/typography">
                                    <Typography />
                                </Route>
                                <Route exact path="/forms">
                                    <Forms />
                                </Route>
                                <Route path="*">
                                    <NotFound />
                                </Route>
                            </Switch>
                        </div>
                    </div>
                </div>
            </main>
        </BrowserRouter>
    );
}

export default App;
