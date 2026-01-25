import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import AppRouter from "./components/AppRouter";


function App() {
  return (
    <Provider store={appStore}>
      <div className="">
        {/* <RouterProvider router={appRouter} >
          { <AppLayout /> } { Don't manually render it here the RouterProvider automatically renders the route }
        </RouterProvider> */}

        <AppRouter />
      </div>
    </Provider>
  );
}

export default App;