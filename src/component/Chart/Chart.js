import React from "react";
import Loading from "../../component/Loading/Loading";
import "./Chart.scss";
import ReactHighcharts from "react-highcharts";

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      config: {},
      load: false,
      loading: false
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ loading: true });
    if (typeof nextProps !== "undefined") {
      this.setState({ loading: false, config: nextProps.config, load: true });
    } else {
      this.setState({ load: true });
    }
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
