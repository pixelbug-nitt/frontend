import React, { useState } from 'react';
import axios from 'axios';
import { GoogleSpreadsheet } from "google-spreadsheet";
import {gcpSheetKeys} from "../var/Variables";

function EditMyRaw() {

    const [file, setFile] = useState(null);
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [phone, setPhone] = useState(null);

    var imagelink = "";

    const submitFile = async (e) => {
        e.preventDefault();
        try {
            if (!file) {

                throw new Error('Select a file first!');
            }
            const formData = new FormData();
            formData.append('file', file[0]);
            const result = await axios.post(`http://localhost:9000/test-upload`, formData, {
                headers: {
                'Content-Type': 'multipart/form-data',
                },
            });
            imagelink = result.data.Location;
            makeEntry();
            console.log("file uploaded || " + result.data.Location);
        } catch (error) {
            console.log("error while uploading " + error);
        }
    };
    const makeEntry = async () => {

        const SPREADSHEET_ID = gcpSheetKeys.SPREADSHEET_ID;
        const SHEET_ID = gcpSheetKeys.SHEET_ID;
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
            } catch (e) {
              console.error('Error, i tried: ', e);
            }
          };
        
          const newRow = { "Name": name, "Email": email, "Phone Number" :phone , "Link": imagelink };
        
          appendSpreadsheet(newRow);

    }

  return (
    <div >    
      <form className="form-contact" id="emrForm" onSubmit={submitFile} novalidate="novalidate">
            <div className="row">
                <div className="col-sm-12">
                    <div className="form-group">
                        <input className="form-control valid" onChange={event => setName(event.target.value)} name="name" id="name" type="text"  placeholder="Name"/>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="form-group">
                        <input className="form-control valid" onChange={event => setEmail(event.target.value)} name="email" id="email" type="email"  placeholder="Email"/>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="form-group">                    
                        <input className="form-control valid" onChange={event => setPhone(event.target.value)} name="number" id="number" type="tel"  placeholder="Whatsapp Number"/>
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-group">
                        <label>Choose your RAW image</label>
                        <input className="form-control file-input"  type="file" onChange={event => setFile(event.target.files)}  placeholder="Your RAW image"/>
                    </div>
                </div>                                            
            </div>
            <div className="form-group mt-3">
                <button type="submit" className="button button-contactForm boxed-btn">Send</button>
            </div>
        </form>       
    </div>
  );
}

export default EditMyRaw;
