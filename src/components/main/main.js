import React from 'react'
import hello from '../../asset/hello.jpg';
import Chart from "../charts/chart";
import './main.css';

 const Main = () => {
    return (
        <main>
            <div className="main__container">
                <div className="main__title">
                    <img src={hello} alt="Hello"/>
                    <div className="main__greeting">
                    <h1>Hello Sonika </h1>
                    <p>Welcome to your admin dashboard</p>
                    </div>
                 </div>
                <div className="main__cards">
                <div className="card">
                <i className="fa fa-user fa-2x text-lightblue"></i>
                <div className="card_inner">
                    <p className="text-primary-p">Number of Viewers</p>
                    <span className="text-title font-bold">588</span>
                </div>
                </div>
                <div className="card">
                <i className="fa fa-calendar fa-2x text-red"></i>
                <div className="card_inner">
                    <p className="text-primary-p">Times of Watching</p>
                    <span className="text-title font-bold">2700</span>
                </div>
                </div>
                <div className="card">
                <i className="fa fa-video-camera fa-2x text-yellow"></i>
                <div className="card_inner">
                    <p className="text-primary-p">Number of Video</p>
                    <span className="text-title font-bold">270</span>
                </div>
                </div>
                <div className="card">
                <i className="fa fa-thumbs-up fa-2x text-green"></i>
                <div className="card_inner">
                    <p className="text-primary-p">Number of Likes</p>
                    <span className="text-title font-bold">27000</span>
                </div>
                </div>
                </div>
                <div className="charts">
                    <div className="charts__left">
                        <div className="charts__left__title">
                            <div>
                                <h1>Daily Report</h1>
                                <p>Indira Nagar,Lucknow</p>
                            </div>
                            <i className="fa fa-usd"></i>
                        </div>
                        <Chart/>
                    </div>
                    <div className="charts__right">
                        <div className="charts__right__title">
                            <div>
                              <h1>Stats Report</h1>  
                              <p>Indira Nagar,Lucknow</p>
                            </div>
                            <i className="fa fa-usd"></i>
                        </div>
                        <div className="charts__right__cards">
                            <div className="card1">
                                <h1>Income</h1>
                                <p>rs 600000</p>
                            </div>
                            <div className="card2">
                                <h1>Sales</h1>
                                <p>rs 6000</p>
                            </div>
                            <div className="card3">
                                <h1>Users</h1>
                                <p>8000</p>
                            </div>
                            <div className="card4">
                                <h1>Orders</h1>
                                <p>300</p>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
            
        </main>
    )
}
export default Main;