import React, { useState } from 'react';
import axios from 'axios';
import { GoogleSpreadsheet } from "google-spreadsheet";
import {gcpSheetKeys} from "../var/Variables";

function EditedImage() {

    const [file, setFile] = useState(null);
    const [form,setForm] = useState(true);
    const [loading,setLoading] = useState(false);
    const [success,setSuccess] = useState(false);
    const [failure,setFailure] = useState(false);

    var imagelink = "";

    const submitFile = async (e) => {
        e.preventDefault();
        setForm(false);
        setLoading(true);
        try {
            if (!file) {

                throw new Error('Select a file first!');
            }
            const formData = new FormData();
            formData.append('file', file[0]);
            const result = await axios.post(`https://api.pixelbugnitt.com/test-upload`, formData, {
                headers: {
                'Content-Type': 'multipart/form-data',
                },
            });
            imagelink = result.data.Location;
            makeEntry();
            console.log("file uploaded || " + result.data.Location);
        } catch (error) {
            console.log("error while uploading " + error);
            setLoading(false);
            setFailure(true);
        }
    };
    const makeEntry = async () => {

        const SPREADSHEET_ID = gcpSheetKeys.SPREADSHEET_ID;
        const SHEET_ID = 434262535; 
        const CLIENT_EMAIL = gcpSheetKeys.CLIENT_EMAIL;
        const PRIVATE_KEY = gcpSheetKeys.PRIVATE_KEY;

        const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

        const appendSpreadsheet = async (row) => {
            try {
              await doc.useServiceAccountAuth({
                client_email: CLIENT_EMAIL,
                private_key: PRIVATE_KEY,
              });
              // loads document properties and worksheets
              await doc.loadInfo();
              //console.log(doc.title)
              const sheet = doc.sheetsById[SHEET_ID];
              const result = await sheet.addRow(row);
              console.log("Value inserted" + result);
              setLoading(false);
              setSuccess(true);
            } catch (e) {
              console.error('Error, i tried: ', e);
              setLoading(false);
              setFailure(true);
            }
          };
        
          const newRow = {  "RAW Link": "" , "Edited Link": imagelink };
        
          appendSpreadsheet(newRow);

    }

  return (
    <div>    
      { form ?  
          <form className="form-contact" id="emrForm" onSubmit={submitFile} novalidate="novalidate">
            <div className="row">                
                <div className="col-12">
                    <div className="form-group">
                        <label>Choose the edited image </label>
                        <input className="form-control file-input"  type="file" onChange={event => setFile(event.target.files)}  placeholder="Your RAW image"/>
                    </div>
                </div>                                            
            </div>
            <div className="form-group mt-3">
                <button type="submit" className="button button-contactForm boxed-btn">Send</button>
            </div>
        </form>       
        : <div>
            
            { loading ? <div className="loader">
                            <div className="preloader loading">
                                <span className="slice"></span>
                                <span className="slice"></span>
                                <span className="slice"></span>
                                <span className="slice"></span>
                                <span className="slice"></span>      
                                <span className="slice"></span>                      
                            </div>
                            <div><p>Uploading...</p></div>
                        </div>: null }
             <div className="submitStatus"> { success ? "🥳 Your image has been submitted successfully! 🥳 " : ( failure ? "😓 An error occured while uploading, please try again 😓" : null) }</div>  
            

        </div> 
    }    </div>
  );
}

export default EditedImage;
