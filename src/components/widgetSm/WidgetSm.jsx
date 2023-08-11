import './widgetSm.css'
import {Visibility} from "@mui/icons-material"

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
            <img src="https://images.pexels.com/photos/5378700/pexels-photo-5378700.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
                <span className="widgetSmUserName">Praveen</span>
                <span className="widgetSmUserTitle">Developer</span>
            </div>
            <button className="widgetSmButton">
              <Visibility />
              Display
            </button>
        </li>

        <li className="widgetSmListItem">
            <img src="https://images.pexels.com/photos/5378700/pexels-photo-5378700.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
                <span className="widgetSmUserName">Praveen</span>
                <span className="widgetSmUserTitle">Developer</span>
            </div>
            <button className="widgetSmButton">
              <Visibility />
              Display
            </button>
        </li>

        <li className="widgetSmListItem">
            <img src="https://images.pexels.com/photos/5378700/pexels-photo-5378700.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
                <span className="widgetSmUserName">Praveen</span>
                <span className="widgetSmUserTitle">Developer</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
        </li>

        <li className="widgetSmListItem">
            <img src="https://images.pexels.com/photos/5378700/pexels-photo-5378700.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
                <span className="widgetSmUserName">Praveen</span>
                <span className="">Developer</span>
            </div>
            <button className="widgetSmButton">
              <Visibility />
              Display
            </button>
        </li>

        <li className="widgetSmListItem">
            <img src="https://images.pexels.com/photos/5378700/pexels-photo-5378700.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
                <span className="widgetSmUserName">Praveen</span>
                <span className="widgetSmUserTitle">Developer</span>
            </div>
            <button className="widgetSmButton">
              <Visibility />
              Display
            </button>
        </li>
      </ul>
    </div>
  )
}
