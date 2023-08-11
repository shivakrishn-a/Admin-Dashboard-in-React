import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from "@mui/icons-material"
import "./user.css"
import { Link } from "react-router-dom"

export default function User() {
    return (
        <div className="user">

            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser">
                   <button className="userAddButton">Create</button>
                </Link>    
            </div>

            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""
                            className="userShowImg" />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Kitty Gudda</span>
                            <span className="userShowUserTitle">React Developer</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon" />
                            <span className="userShowInfoTitle">Kitgu</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarToday className="userShowIcon" />
                            <span className="userShowInfoTitle">27.11.1998</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <PhoneAndroid className="userShowIcon" />
                            <span className="userShowInfoTitle">9010696912</span>
                        </div>

                        <div className="userShowInfo">
                            <MailOutline className="userShowIcon" />
                            <span className="userShowInfoTitle">Kitgu@gmail.com</span>
                        </div>
                         
                        <div className="userShowInfo">
                            <LocationSearching className="userShowIcon" />
                            <span className="userShowInfoTitle">RedLight Area | Mumbai</span>
                        </div>

                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>UserName</label>
                                <input type="text" 
                                placeholder="kitgu"
                                className="userUpdateInput" />
                            </div>

                            <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input type="text" 
                                placeholder="kitty Gudda"
                                className="userUpdateInput" />
                            </div>

                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input type="email" 
                                placeholder="kitgu@gmail.com"
                                className="userUpdateInput" />
                            </div>

                            <div className="userUpdateItem">
                                <label>Phone no.</label>
                                <input type="number" 
                                placeholder="9010696912"
                                className="userUpdateInput" />
                            </div>

                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input type="text" 
                                placeholder="RedLight Area | Mumbai"
                                className="userUpdateInput" />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img className="userUpdateImg" src="https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                                 <label htmlFor="file"><Publish className="userUpdateIcon"/></label>
                                <input type="file"  id="file" style={{display:"none"}}/>
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}
