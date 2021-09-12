import React, {useState} from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {
    //state hook
    const[file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const types = ['image/png','image/jpeg','image/jpg']; //allowed types of files


    const changeHandler = (e) => { //on event
      // console.log("changed");
        let selected = e.target.files[0];
      //  console.log(selected);
        if(selected && types.includes(selected.type)){ //check if the file exists
//if not then no need to update the state
            setFile(selected);
            setError(''); //don't show error message, show empty string
        }
        else{
            setFile(null); //don't select the file
            setError('Please select an image type only!');
        }
    }
    return(
        <form>
            <label>
           <input type = "file" onChange = {changeHandler}/>
           <span>+</span>
         </label>
           <div className = "output">
               {error && <div className = "error">{error}</div>}
               { file && <div>Image name: {file.name}</div>} 
               { file && <ProgressBar file ={file} setFile = {setFile}/>}
           </div>
        </form>
    )
}

export default UploadForm;