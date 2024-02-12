import { useState } from 'react'
import reactLogo from './assets/react.svg'



function App() {
  

  return (
<div>
<div className="join">
  <input className="input input-bordered join-item" placeholder="Email"/>
  <button className="btn join-item rounded-r-full">Subscribe</button>
</div>
 {/* You can open the modal using document.getElementById('ID').showModal() method */}
    
<button className="btn" onClick={()=>document.getElementById('my_modal_4').showModal()} >open </button>
<dialog id="my_modal_4" className="modal">
  <div className="modal-box w-11/12 max-w-5xl">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Click the button below to close</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
{/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>open modal</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
</div>
  )
}

export default App
