import { DATA } from "./DataGlasses";
import { useState } from "react";

function Content() {
    const [infor, setInfor] = useState({});

    return (
        <div id="Content-wrap">
            <header id="Header">
                <h2 className="header-title">TRY GLASSES APP ONLINE</h2>
            </header>
            <div className="Content container">
                <div className="row model-glasses">
                    <div className="img-model-wrap col-md-6">
                        <img className="img-model" src="./glassesImage/model.jpg" />
                        <div className="glasses-infor">
                            <h5 style={{color: '#FFD154'}}>{infor.name}</h5>
                            <span style={{color: '#fff'}}>{infor.desc}</span>
                        </div>
                    </div>
                    <div className="img-model-wrap col-md-6">
                        <img className="img-model" src="./glassesImage/model.jpg" />
                        <div className="img-glasses-for-model">
                            <img src={infor.url} className="w-100"/>
                    </div>
                    </div>
                </div>
                <div className="option-glasses">
                    <ul className="option-glasses-list">
                        <div className="row">
                            {DATA.map((glass,index) => (
                                <li 
                                    className="option-glasses-item col-md-2"
                                    key={index}
                                    onClick={() => setInfor({
                                        name: glass.name,
                                        url: glass.url,
                                        desc: glass.desc
                                    })}    
                                >
                                    <img src={glass.url} className="w-100"/>
                                </li>
                            ))}
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Content;
