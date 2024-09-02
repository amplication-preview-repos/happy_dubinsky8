import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { RoadmapList } from "./roadmap/RoadmapList";
import { RoadmapCreate } from "./roadmap/RoadmapCreate";
import { RoadmapEdit } from "./roadmap/RoadmapEdit";
import { RoadmapShow } from "./roadmap/RoadmapShow";
import { CareerList } from "./career/CareerList";
import { CareerCreate } from "./career/CareerCreate";
import { CareerEdit } from "./career/CareerEdit";
import { CareerShow } from "./career/CareerShow";
import { AlternativeRouteList } from "./alternativeRoute/AlternativeRouteList";
import { AlternativeRouteCreate } from "./alternativeRoute/AlternativeRouteCreate";
import { AlternativeRouteEdit } from "./alternativeRoute/AlternativeRouteEdit";
import { AlternativeRouteShow } from "./alternativeRoute/AlternativeRouteShow";
import { JobList } from "./job/JobList";
import { JobCreate } from "./job/JobCreate";
import { JobEdit } from "./job/JobEdit";
import { JobShow } from "./job/JobShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"mycareer"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Roadmap"
          list={RoadmapList}
          edit={RoadmapEdit}
          create={RoadmapCreate}
          show={RoadmapShow}
        />
        <Resource
          name="Career"
          list={CareerList}
          edit={CareerEdit}
          create={CareerCreate}
          show={CareerShow}
        />
        <Resource
          name="AlternativeRoute"
          list={AlternativeRouteList}
          edit={AlternativeRouteEdit}
          create={AlternativeRouteCreate}
          show={AlternativeRouteShow}
        />
        <Resource
          name="Job"
          list={JobList}
          edit={JobEdit}
          create={JobCreate}
          show={JobShow}
        />
      </Admin>
    </div>
  );
};

export default App;
