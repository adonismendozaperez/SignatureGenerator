import { useForm } from './Hook/UseForm';
import './main.css';
import domtoimage from 'dom-to-image';

const initialState = {
  Name: 'Adonis Mendoza',
  Position:'Web Developer',
  Phone:'(849)-590-2021',
  Email:'mail@example.com',
  Location:'Santo domingo, Republica dominicana'
}

export default function App() {
 const [formValues, handleInputChange] = useForm(initialState);
 const { Name, Position, Phone,Email, Location} = formValues;

 const DownloadImage = ()=>{
  let node = document.getElementById('Image_To_Download');
  domtoimage.toPng(node)
      .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'Signature.png';
        link.href = dataUrl;
        link.click();
      })
      .catch(function (error) {
          console.error('oops, something went wrong!', error);
      });
 }

  return (
    <div className="container main" style={{backgroundColor: '#052C48'}}>
        <h1 className="text-center">Signature Generator</h1>
        <div className="row my-5 justify-content-center container_signature">
          {/*Start Card Signature*/}
            <div id="Image_To_Download" className="col-lg-offset-3 col-lg-6 col-md-offset-2 col-md-8 col-sm-offset-1 col-sm-10">
                <div className="email-signature7">
                    <div className="signature-icon">
                        <i className="fa fa-user"></i>
                    </div>
                    <div className="signature-detail">
                        <h2 className="title">{Name}</h2>
                        <span className="post">{Position}</span>
                    </div>
                    <ul className="signature-content">
                        <li><span><i className="fas fa-phone-alt"></i></span>{Phone}</li>
                        <li><span><i className="fas fa-map-marker-alt"></i></span>{Location}</li>
                    </ul>
                </div>
            </div>
          {/*End Card Signature*/}
            <div className="col-md-6" style={{marginTop:'10px'}}>
            <div className="card card-outline-secondary">
              <div className="card-body">
                <form className="form">
                  <div className="form-group row">
                      <div className="col-lg-6">
                        <label htmlFor="Name">Name</label> 
                        <input 
                          type="text"
                          autoComplete="off"
                          className="form-control" 
                          id="Name"
                          name="Name" 
                          title="First and last name" 
                          value={Name}
                          onChange={handleInputChange} 
                        />
                      </div>
                      <div className="col-lg-6">
                        <label htmlFor="Position">Position</label> 
                        <input 
                          type="text"
                          autoComplete="off" 
                          className="form-control" 
                          title="Position"
                          id="Position"
                          name="Position" 
                          value={Position}
                          onChange={handleInputChange} 
                        />
                      </div>
                  </div>
                  <div className="form-group row">
                      <div className="col-lg-6">
                        <label htmlFor="Phone">Phone</label> 
                        <input 
                          type="text"
                          className="form-control" 
                          autoComplete="off"
                          id="Phone"
                          name="Phone"   
                          title="Phone Number"
                          value={Phone}
                          onChange={handleInputChange} 
                        />
                      </div>
                      <div className="col-lg-6">
                        <label htmlFor="Location">Location</label> 
                        <input 
                          type="text"
                          autoComplete="off" 
                          className="form-control" 
                          title="Location" 
                          id="Location"
                          name="Location"
                          value={Location}
                          onChange={handleInputChange}
                        />
                      </div>
                  </div>
                  <div className="form-group row" style={{marginTop:'10px'}}>
                    <div className="d-grid gap-2">
                      <button className="btn btn-default btn-lg btn-block" type="button" onClick={DownloadImage}>Download</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

