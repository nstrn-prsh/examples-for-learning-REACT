import React, { Component } from "react";
import Loader from "react-loader-spinner";
import Info from "./Info";
import "./IpGeoLocation.css";
import getInfo from "./ipService";

class IpGeoLocation extends Component {
     constructor(props) {
          super(props);
          this.state = {
               isLoading: true,
          };
     }

     componentDidMount() {
          getInfo().then((data) => {
               console.log(data);
               this.setState({
                    ip: data.ip,
                    country: data.location.country,
                    city: data.location.region,
                    lng: data.location.lng,
                    lat: data.location.lat,
                    timezone: data.location.timezone,

                    isLoading: false,
               });
          });
     }

     render() {
          return (
               <>
                    {this.state.isLoading ? (
                         <Loader
                              type='RevolvingDot'
                              color='#00BFFF'
                              height={100}
                              width={100}
                         />
                    ) : (
                         <Info
                              country={this.state.country}
                              city={this.state.city}
                              timezone={this.state.timezone}
                              ip={this.state.ip}
                              lng={this.state.lng}
                              lat={this.state.lat}
                         />
                    )}
               </>
          );
     }
}

export default IpGeoLocation;
