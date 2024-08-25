import React, { useEffect, useState ,useRef} from "react";
import "./index.css";
import Flexbox from "../../components/flexbox";
import SearchBar from "../../components/searchBar";
import SnackBars from "../../components/snackBar";
import ScollerBar from "../../components/scollerBar";
import BoxLoading from "../../components/boxLoading";

const Home = (props)=>{

    const [snackBarOpen,setSnackBarOpen] = useState(false);


    const handleOpen = ()=>{
        setSnackBarOpen(true)
    }
    
    const handleClose = ()=>{
        setSnackBarOpen(false)
    }


    return (<>

        <ScollerBar/>

        <Flexbox style={{justifyContent:'flex-start'}} title={"context"} >
            <div className="flexbox-data full" > 
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
             </div>
        </Flexbox>
        <Flexbox style={{justifyContent:'flex-start'}} title={'products'}>
        <div className="flexbox-data"> 
                <img src="./pic.png" />
             </div>
             <div className="flexbox-data"> 
                <img src="./pic.png" />
             </div>
             <div className="flexbox-data"> 
                <img src="./pic.png" />
             </div>
             <div className="flexbox-data"> 
                <img src="./pic.png" />
             </div>
        </Flexbox>
        <Flexbox style={{justifyContent:'flex-start'}}>
        <div className="flexbox-data"> 
                <img src="./pic.png" />
             </div>
             <div className="flexbox-data"> 
                <img src="./pic.png" />
             </div>
             <div className="flexbox-data"> 
                <img src="./pic.png" />
             </div>
             <div className="flexbox-data"> 
                <img src="./pic.png" />
             </div>
        </Flexbox>
        <Flexbox style={{justifyContent:'flex-start'}}>
        <div className="flexbox-data"> 
                <img src="./pic.png" />
             </div>
             <div className="flexbox-data"> 
                <img src="./pic.png" />
             </div>
             <div className="flexbox-data"> 
                <img src="./pic.png" />
             </div>
             <div className="flexbox-data"> 
                <img src="./pic.png" />
             </div>
        </Flexbox>
        <Flexbox style={{justifyContent:'flex-start'}}>
        <div className="flexbox-data"> 
                <img src="./pic.png" />
             </div>
             <div className="flexbox-data"> 
                <img src="./pic.png" />
             </div>
             <div className="flexbox-data"> 
                <img src="./pic.png" />
             </div>
             <div className="flexbox-data"> 
                <img src="./pic.png" />
             </div>
        </Flexbox>
        <Flexbox style={{justifyContent:'flex-start'}}>
        <div className="flexbox-data"> 
                <img src="./pic.png" />
             </div>
             <div className="flexbox-data"> 
                <img src="./pic.png" />
             </div>
             <div className="flexbox-data"> 
                <img src="./pic.png" />
             </div>
             <div className="flexbox-data"> 
                <img src="./pic.png" />
             </div>
        </Flexbox>
    
    </>)

}

export default Home;