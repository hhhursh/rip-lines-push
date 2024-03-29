import { GitHubBanner, Refine, WelcomePage } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import { useNotificationProvider } from "@refinedev/antd";
import "@refinedev/antd/dist/reset.css";


import routerBindings, {
  DocumentTitleHandler,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import { App as AntdApp } from "antd";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";

import {dataProvider, liveProvider} from "./providers";
import {authProvider} from "./providers";
import {Home, ForgotPassword, Login, Register, CompanyList} from "./pages";
import {Authenticated} from "@refinedev/core";
import {CatchAllNavigate} from "@refinedev/react-router-v6";
import {Layout} from "./components/layout";
import {resources} from "./config/resources";





function App() {
  return (
    <BrowserRouter>
      <GitHubBanner />
      <RefineKbarProvider>
        
          <AntdApp>
            <DevtoolsProvider>
              <Refine
                dataProvider={dataProvider}
                liveProvider={liveProvider}
                notificationProvider={useNotificationProvider}
                routerProvider={routerBindings}
                authProvider={authProvider}
                resources = {resources}
                options={{
                  syncWithLocation: true,
                  warnWhenUnsavedChanges: true,
                  useNewQueryKeys: true,
                  projectId: "Qswpju-5OJbir-2EdsyC",
                  liveMode: "auto",
                }}
              >
                <Routes>
                 
                <Route path="/register" element={<Register />}/>
                  <Route path="/login" element={<Login />}/>
                  <Route path="/forgot-password" element={<ForgotPassword />}/>

                  <Route
                      element={
                      <Authenticated
                        key="authenticated-layout"
                        fallback={<CatchAllNavigate to="/login" />} 
                        >
                      <Layout>
                        <Outlet />
                      </Layout>
                      </Authenticated>} 

                  >
                   <Route index element={<Home />}/>
                   <Route path='/companies' element={<CompanyList />}/>
                  </Route>
                </Routes>
                <RefineKbar />
                <UnsavedChangesNotifier />
                <DocumentTitleHandler />
              </Refine>
              <DevtoolsPanel />
            </DevtoolsProvider>
          </AntdApp>
        
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
