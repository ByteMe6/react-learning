import './index.css';
import { contacts } from './data.js';
import { IoCall } from "react-icons/io5";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { Fontbook } from './comps/Fontbook.jsx';

function App() {
  return (
   <main class="main">
     {/* {console.log(contacts)}
      {contacts.map((contact) => {
        return (
          <div key={contact.id} className="contact">
            <p className="contact__name"><MdDriveFileRenameOutline /> {contact.name}</p>
            <p className="contact__number"><IoCall /> {contact.number}</p>
          </div>
        );
      },)} */}


      {/* fontbook render */}
      <Fontbook />

   </main>
  );
}

export default App;
