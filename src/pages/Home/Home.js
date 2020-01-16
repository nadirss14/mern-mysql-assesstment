import React from "react";
import Navbar from "../../component/Navbar/Navbar";
import Chart from "../../component/Chart/Chart";
import { Redirect } from "react-router";
import Error from "../../component/Error/Error";
import Loading from "../../component/Loading/Loading";
import { getBaseUrl } from "../../lib/api";
import swal from "sweetalert";
import "./Home.scss";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      error: false,
      msgError: {},
      loading: false,
      isData: true,
      config: [
        {
          title: { text: "" },
          xAxis: { categories: [] },
          series: [{ data: [] }]
        }
      ]
    };
    this.intervalID = {};
  }

  componentDidMount() {
    this.handleChart();
    this.handleInterval();
  }

  handleInterval = () => {
    this.intervalID = setInterval(this.handleChart, 5000 * 2);
  };

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  handleChart = async () => {
    this.setState({
      loading: true,
      redirect: false,
      error: false,
      isData: true,
      msgError: {}
    });
    try {
      const options = {};
      options.method = "GET";
      options.headers = new Headers({
        "Content-Type": "application/json; charset=utf-8"
      });
      console.log(`${getBaseUrl}agent`);
      const response = await fetch(
        `${getBaseUrl}agent`,
        // "http://localhost:3001/api/v1/agent",
        options
      );
      const value = await response.json();
      let lineChart = [];
      let barChar = [];

      if (value.length) {
        lineChart = this.handleLineChart(value);
        barChar = this.handleBarChart(value);
        this.setState({
          config: [lineChart, barChar],
          loading: false,
          redirect: false
        });
      } else {
        this.setState({
          config: [lineChart, barChar],
          loading: false,
          redirect: false,
          msgError: {},
          isData: false
        });
      }
    } catch (error) {
      this.setState({
        loading: false,
        error: true,
        msgError: { error }
      });
    }
  };

  handleLineChart = value => {
    const AxisY = [];
    const AxisX = [];
    const serie = [];
    value.forEach(element => {
      AxisY.push(element.agent.agentName);
      AxisX.push(element.agent.country);
      serie.push(element.agent.commisions);
    });
    return {
      chart: { type: "line" },
      title: { text: "Comisiones por Agente" },
      xAxis: {
        categories: AxisY,
        paises: AxisX
      },
      series: [
        {
          data: serie
        }
      ]
    };
  };

  handleBarChart = value => {
    const AxisY = [];
    const AxisX = [];
    const serie = [];
    value.forEach(element => {
      AxisY.push(element.agent.agentName);
      AxisX.push(element.agent.country);
      serie.push([element.agent.country, element.agent.commisions]);
    });

    return {
      chart: { type: "pie" },
      title: { text: "Nombre del Grafico" },
      xAxis: {
        categories: AxisY,
        paises: AxisX
      },
      series: [
        {
          data: serie
        }
      ]
    };
  };

  handleClearData = async () => {
    this.setState({ loading: true, error: false, msgError: {} });
    try {
      const options = {};
      options.method = "POST";
      options.headers = new Headers({
        "Content-Type": "application/json; charset=utf-8"
      });

      const response = await fetch(
        `${getBaseUrl}agent/cleardata`,
        //"http://localhost:3001/api/v1/agent/cleardata",
        options
      );
      await response.json();
      this.setState({ loading: false, error: false, msgError: {} });
    } catch (error) {
      this.setState({ loading: false, error: true, msgError: error });
    }
  };

  render() {
    if (this.state.loading) {
      return <Loading />;
    }
    if (this.state.redirect) {
      return <Redirect push to='/' />;
    }
    if (this.state.error) {
      return <Error Error={this.state.msgError} />;
    }
    return (
      <React.Fragment>
        <Navbar styles='Header__dark'></Navbar>
        {this.state.isData ? (
          ""
        ) : (
          <div>
            <p className='Home__message'>No hay data para mostrar....</p>
          </div>
        )}
        <button
          type='button'
          className='Home__button'
          onClick={this.handleClearData}>
          CLEAR DATA
        </button>
        <section className='Chart__container'>
          <Chart config={this.state.config[0]} />
          <Chart config={this.state.config[1]} />
        </section>
      </React.Fragment>
    );
  }
}

export default Home;
