import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component.jsx";
import Authentication from "./routes/authentication/authentication.component.jsx";
// import SignIn from "./routes/sign-in/sign-in.component.jsx";
const Shop = () => {
  return <h1>I am the shop page.</h1>;
};

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/auth' element={<Authentication />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
