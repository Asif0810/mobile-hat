import { format } from "date-fns";

import { useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthCotext } from "../Context/AuthProvider";

const ModalOpen = ({ openModal, selectedDate, setOpenModal, refetch }) => {
    const { user } = useContext(AuthCotext)
    const date = format(selectedDate, 'PP')
    const {
        image, mobile_name, resale_price,
    } = openModal


    const modalhandler = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const username = form.name.value;
        const mobile = form.phoneName.value;
        const price = resale_price;
        const meeting_location = form.location.value;
        const booking_Date = date;
        const phone = form.phone.value;

        console.log(email, username, mobile, price, meeting_location, booking_Date)
        const booking = {
            email,
            username,
            mobile,
            price,
            meeting_location,
            booking_Date,
            phone,
            image
        }
        fetch('https://last-assignment-server-sigma.vercel.app/booking-phone', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('booking succesful')
                    form.reset()
                }

            })

    }
    return (
        <div>
            {/* Put this part before </body> tag */}

            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <form onSubmit={modalhandler} className="modal">
                <div className="modal-box  relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <input name="name" type="text" disabled defaultValue={user?.displayName} placeholder="Type here" className="input w-80 ml-16 mt-5 input-bordered  " />
                    <input name="email" type="email" disabled defaultValue={user?.email} placeholder="Type here" className="input w-80 ml-16 mt-5 input-bordered  " />
                    <input name="phoneName" type="text" disabled defaultValue={mobile_name} placeholder="Type here" className="input w-80 ml-16 mt-5 input-bordered  mb-6" /><br />
                    <b className="w-80 ml-16 ">price : ${resale_price}</b>
                    <input name="phone" type="phone" placeholder="your phone" className="input w-80 ml-16 mt-5 input-bordered  " />
                    <input name="location" type="text" placeholder="meeting location" className="input w-80 ml-16 mt-5 input-bordered  " />
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ModalOpen;