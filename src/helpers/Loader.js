import ReactLoading from "react-loading";
import './loader.css'


const Loader = () =>{

    return(<div className="loader">

        <ReactLoading
            className="loader"
            type= "bubbles"
            color="#E2041F"
            height={60}
            width={100}
            delay={1000}
        />
    </div>)
}

export default Loader