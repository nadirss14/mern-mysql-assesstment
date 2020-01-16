import React from "react";
import Loading from "../../component/Loading/Loading";
import "./Chart.scss";
import ReactHighcharts from "react-highcharts";

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      config: {
        // chart: { type: "line" },
        // title: { text: "Comisiones por Agente" },
        // xAxis: {
        //   categories: ["JUAN", "PEDRO", "JUAN"]
        // },
        // series: [
        //   {
        //     data: [100, 200, 85]
        //   }
        // ]
      },
      load: false,
      loading: false
    };
  }
  componentDidMount() {
    this.setState({ loading: true });
    this.setState({ loading: false, config: this.props.config, load: true });
  }
  render() {
    if (!this.state.load) {
      return "";
    }
    if (this.state.loading) {
      return <Loading />;
    }
    return (
      <article className='Chart__container--item'>
        <ReactHighcharts config={this.state.config} />
      </article>
    );
  }
}

export default Chart;
