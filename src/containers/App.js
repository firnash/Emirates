import './App.scss';
import React from "react";
import { connect } from "react-redux";
import Loader from "../components/Loader/Loader";
import Home from './Home/Home';

class App extends React.Component {

  render() {
    const { loading } = this.props;
    return (
      <div className="body">
        {loading ? <Loader /> : null}
        <Home />
      </div>
    );
  }
}

const mapStateToProps = ({ loading }) => ({
  loading,
});

export default connect(mapStateToProps)(App);
