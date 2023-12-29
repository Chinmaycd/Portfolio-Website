import React from "react";
import "./Service.css";
import { FaChromecast } from "react-icons/fa";
import { IoLayersOutline } from "react-icons/io5";
import { IoIosContacts } from "react-icons/io";
import { CgScreen } from "react-icons/cg";

const Service = () => {
    return (
        <>
            <div className="service-container" id="service">
                <div className="service-main-text-container">
                    <h1 className="service-title">My Awesome Service</h1>
                    <p className="service-text">
                        There are many variations of passages of Lorem Ipsum available, but
                        the majority have suffered alteration.
                    </p>
                </div>
                <div className="service-section">
                    <div className="service-item">
                        <i>
                            <FaChromecast />
                        </i>
                        <h1>Business Stratagy</h1>
                        <p>
                            I throw myself down among the tall grass by the stream as I lie
                            close to the earth.
                        </p>
                    </div>
                    <div className="service-item">
                        <i>
                            <IoLayersOutline />
                        </i>
                        <h1>Website Development</h1>
                        <p>
                            I throw myself down among the tall grass by the stream as I lie
                            close to the earth.
                        </p>
                    </div>
                    <div className="service-item">
                        <i>
                            <IoIosContacts />
                        </i>
                        <h1>Marketing & Reporting</h1>
                        <p>
                            I throw myself down among the tall grass by the stream as I lie
                            close to the earth.
                        </p>
                    </div>
                    <div className="service-item">
                        <i>
                            <CgScreen />
                        </i>
                        <h1>Mobile App Development</h1>
                        <p>
                            I throw myself down among the tall grass by the stream as I lie
                            close to the earth.
                        </p>
                    </div>
                    <div className="service-item">
                        <i>
                            <IoIosContacts />
                        </i>
                        <h1>Marketing & Reporting</h1>
                        <p>
                            I throw myself down among the tall grass by the stream as I lie
                            close to the earth.
                        </p>
                    </div>
                    <div className="service-item">
                        <i>
                            <CgScreen />
                        </i>
                        <h1>Mobile App Development</h1>
                        <p>
                            I throw myself down among the tall grass by the stream as I lie
                            close to the earth.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Service;
