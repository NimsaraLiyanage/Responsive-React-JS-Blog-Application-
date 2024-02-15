// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Logout from './Logout'; // Import the Logout component
import ProtectedRoute from './ProtectedRoute'; // Assuming you have a ProtectedRoute component for handling authentication

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <ProtectedRoute path="/logout" component={Logout} /> {/* ProtectedRoute ensures that only authenticated users can access the logout page */}
        {/* Other routes */}
      </Switch>
    </Router>
  );
};

export default App;
